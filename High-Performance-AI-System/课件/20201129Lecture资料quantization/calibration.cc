// Tencent is pleased to support the open source community by making TNN available.
//
// Copyright (C) 2020 THL A29 Limited, a Tencent company. All rights reserved.
//
// Licensed under the BSD 3-Clause License (the "License"); you may not use this file except
// in compliance with the License. You may obtain a copy of the License at
//
// https://opensource.org/licenses/BSD-3-Clause
//
// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the 
// specific language governing permissions and limitations under the License.

#include "calibration.h"
#include <algorithm>
#include <cmath>
#include <random>
#include "tnn/core/macro.h"
#include "file_reader.h"
#include "tnn/interpreter/tnn/objseri.h"
#include "tnn/interpreter/tnn/model_packer.h"
#include "tnn/utils/dims_vector_utils.h"

namespace TNN_NS {

//卷积层，全连接层，ADD层和CONCAT层
static const std::set<LayerType> kQuantizedLayerTypeStr = {
    LAYER_CONVOLUTION, LAYER_ADD, LAYER_CONCAT, LAYER_INNER_PRODUCT};

//ReLU和POOLING可以合并
static const std::set<LayerType> kBlobScaleMergeLayerTypeStr = {LAYER_RELU,
                                                                LAYER_POOLING};
                                                                
//交替方向乘子法Alternating Direction Method of Multipliers
static void InitWeightScaleADMM(const float* weights, const int size,
                                const int output_channel, float* weight_scale,
                                const int quantize_bits) {
    const int oc_stride = size / output_channel;
    //8bit量化最大值为127
    const int bound     = std::pow(2, quantize_bits - 1) - 1;

    //分别循环每个channel
    for (int i = 0; i < output_channel; i++) {
        float avg = 0;
        float max = 0;
        float val_abs;

        for (int j = 0; j < oc_stride; j++) {
            //求绝对值
            val_abs = std::fabs(weights[i * oc_stride + j]);
            avg += val_abs;
            if (val_abs > max) {
                max = val_abs;
            }
        }
        //求绝对值的平均值
        avg = avg / float(oc_stride);
        //计算权重缩放系数
        if (quantize_bits > 2) {
            weight_scale[i] = max / (bound * 1.25);
        } else {
            weight_scale[i] = avg;
        }
    }
}

//ADMM update更新量化结果
static void UpdateQuantizedWeightsADMM(const float* weights, const int size,
                                       const int output_channel,
                                       float* weight_scale,
                                       const int quantize_bits,
                                       int8_t* quantized_weights) {
    const int oc_stride = size / output_channel;
    const float bound   = std::pow(2, quantize_bits - 1) - 1;
    const float eps     = 1e-9f;
    float weight_quan;
    ASSERT(quantize_bits > 4);

    for (int i = 0; i < size; i++) {
        //更新量化权重
        weight_quan = weights[i] / (weight_scale[i / oc_stride] + eps);//防止为0的情况出现
        quantized_weights[i] =
            std::min(bound, std::max(-bound, std::roundf(weight_quan)));
    }
}

//更新权重缩放系数s(i+1)
static void UpdateAlphaADMM(const float* weights, const int size,
                            const int output_channel, float* weight_scale,
                            int8_t* quantized_weights) {
    const int oc_stride = size / output_channel;
    const float eps     = 1e-9f;
    //循环更新weight_scale的值
    for (int i = 0; i < output_channel; i++) {
        const int offset = i * oc_stride;
        float sum1       = 0;
        float sum2       = 0;

        for (int j = 0; j < oc_stride; j++) {
            sum1 += weights[offset + j] * quantized_weights[offset + j];
            sum2 +=
                quantized_weights[offset + j] * quantized_weights[offset + j];
        }
        //更新weight_scale值
        weight_scale[i] = sum1 / (sum2 + eps);
    }
};


Calibration::Calibration() {
    //默认输入（blob）和权重（weight）均使用MIN_MAX量化方法
    cali_params_.blob_quantize_method    = MIN_MAX;
    cali_params_.weights_quantize_method = MIN_MAX;
    cali_params_.merge_blob_channel      = true;
    cali_params_.input_bias              = {0, 0, 0, 0};
    cali_params_.input_scale             = {1.0f, 1.0f, 1.0f, 1.0f};
}

Calibration::~Calibration() {}

Status Calibration::Init(NetworkConfig& net_config, ModelConfig& model_config,
                         InputShapesMap inputs_shape) {
    DefaultModelInterpreter* interpreter =
        dynamic_cast<DefaultModelInterpreter*>(
            CreateModelInterpreter(model_config.model_type));
    if (!interpreter) {
        return Status(TNNERR_NET_ERR, "interpreter is nil");
    }
    interpreter_ = std::shared_ptr<DefaultModelInterpreter>(interpreter);

    Status status = interpreter_->Interpret(model_config.params);
    if (status != TNN_OK) {
        LOGE("interpret the model falied!\n");
        return TNNERR_INVALID_MODEL;
    }

    instance_ = std::make_shared<Instance>(net_config, model_config);
    status    = instance_->Init(
        std::static_pointer_cast<AbstractModelInterpreter>(interpreter_),
        inputs_shape);
    if (status != TNN_OK) {
        LOGE("create instance falied!\n");
        return TNNERR_INST_ERR;
    }

    return TNN_OK;
}

//设置量化参数
int Calibration::SetCalibrationParams(CalibrationParam params) {
    cali_params_ = params;

    //输入不支持ADMM量化
    if (cali_params_.blob_quantize_method == ADMM) {
        LOGE("Not support ADMM in quantizing blobs!\n");
        cali_params_.blob_quantize_method = MIN_MAX;
        return -1;
    }
    //权重不支持KL量化
    if (cali_params_.weights_quantize_method == KL_DIVERGENCE) {
        LOGE("Not support KL_DIVERGENCE in quantizing weights!\n");
        cali_params_.weights_quantize_method = MIN_MAX;
        return -1;
    }

    return 0;
}

//在数据集上执行校准
Status Calibration::RunCalibration(DataSet& dataset) {
    // Compute Feature Scale
    //计算输入校准
    int ret = CalBlobScale(dataset);
    if (ret != 0) {
        LOGE("calcluate blob scale falied!\n");
        return TNNERR_QUANTIZE_ERROR;
    }

    //权重量化
    // Quantize params
    ret = QuantizeParams();
    if (ret != 0) {
        LOGE("quantize params falied!\n");
        return TNNERR_QUANTIZE_ERROR;
    }

    // Merge Blob Scale of some layers
    ret = MergeBlobScale();//处理可以Merge的层
    if (ret != 0) {
        LOGE("merge blob scale falied!\n");
        return TNNERR_QUANTIZE_ERROR;
    }
    return TNN_OK;
}

//量化结构序列化到模型结构和描述中
Status Calibration::Serialize(std::string proto_path, std::string model_path) {
    NetStructure* net_struct  = interpreter_->GetNetStructure();
    NetResource* net_resource = interpreter_->GetNetResource();
    if (net_struct == nullptr || net_resource == nullptr) {
        LOGE("net struct or net resource is null\n");
        return TNNERR_INVALID_MODEL;
    }

    //Packer的pack过程
    TNN_NS::ModelPacker packer(net_struct, net_resource);

    Status status = packer.Pack(proto_path, model_path);
    if (status != TNN_OK) {
        LOGE("pack the model falied!\n");
        return status;
    }

    return TNN_OK;
}

//计算输出blob的量化scale信息
int Calibration::CalBlobScale(DataSet& dataset) {
    printf("Start to calculate blob scale ...\n");
    //获取网络资源句柄
    NetResource* net_resource = interpreter_->GetNetResource();
    
    //对整个网络层进行reshape
    Status status = instance_->Reshape(dataset.input_shape);
    if (status != TNN_OK) {
        LOGE("instance reshape falied!\n");
        return -1;
    }

    // Init Feature map
    int ret = InitFeatureMap();
    if (ret != 0) {
        LOGE("init feautre map for quantize falied!\n");
        return ret;
    }
    printf("\tInit Feature Map done!\n");

    // Collect the Range of Feature map
    ret = UpdateBlobRange(dataset);//循环每个文件，更新每个channel的最小值和最大值统计量
    if (ret != 0) {
        LOGE("collect feautre map range falied!\n");
        return ret;
    }
    printf("\tCollect Blob Range done!\n");

    // Calculate Distribute of Feature map
    ret = UpdateBlobDistribute(dataset);//再次读取dateset更新2048bin的统计
    if (ret != 0) {
        LOGE("update feautre map distribute falied!\n");
        return ret;
    }
    printf("\tCollect Blob Distribution done!\n");

    // Compute Scale of Feature map and save to resource map
    //直接循环需要计算scale的blob，通过遍历feature_map完成
    for (auto& item : feature_map_) {
        std::vector<float> scale_vec;
        //计算scale
        int ret = item.second->CalculateScale(scale_vec);
        if (ret != 0) {
            return ret;
        }
        
        std::string input_scale_name =
            item.first->GetBlobDesc().name + BLOB_SCALE_SUFFIX;
        //创建一个resource
        LayerResource* blob_scale_res = CreateIntScale(scale_vec);
        //讲resource添加到查找表
        net_resource->resource_map[input_scale_name] =
            std::shared_ptr<LayerResource>(blob_scale_res);
        printf("\t====> Calculate (%s) done!\n", input_scale_name.c_str());
    }
    return 0;
}

//初始化整个神经网络，在支持量化的层，挂载相应的量化统计表
int Calibration::InitFeatureMap() {
    feature_map_.clear();
    BlobStatisticCallback func = [&](std::vector<Blob*>& blobs,
                                     LayerInfo* info) {
        //获取当前层的类型                                 
        LayerType layer_type = info->type;
        //如果当前层的类型支持量化
        if (kQuantizedLayerTypeStr.find(layer_type) !=
                kQuantizedLayerTypeStr.end() ||
            kBlobScaleMergeLayerTypeStr.find(layer_type) !=
                kBlobScaleMergeLayerTypeStr.end()) {
            for (auto blob : blobs) {
                if (feature_map_.find(blob) == feature_map_.end()) {
                    std::shared_ptr<ScaleCalculator> scale_cal(
                        new ScaleCalculator());
                    if (scale_cal->Init(blob, cali_params_.merge_blob_channel,
                                        cali_params_.blob_quantize_method) ==
                        0) {
                        feature_map_[blob] = scale_cal;//对支持量化的层绑定对应的统计结构
                    }
                }
                // set FC layer input and ouput blob to merge channel
                if (layer_type == LAYER_INNER_PRODUCT) {//全连接层则需要Merge所有的channel
                    if (feature_map_.find(blob) != feature_map_.end()) {
                        feature_map_[blob]->SetMergeChannel(true);
                    }
                }
            }
        }
    };
    
    //遍历所有的层执行.两个参数分别定义了对input和output的处理。前后两次之后则对
    instance_->ForwardWithCallback(func, func);

    // set input blob quantize method to MIN_MAX
    BlobMap input_blobs;

    //获取所有的神经网络输入
    Status status = instance_->GetAllInputBlobs(input_blobs);
    if (status != TNN_OK) {
        LOGE("instance get input blobs falied!\n");
        return -1;
    }
    //遍历所有的输入blob，并将量化方法全部设为MIN_MAX
    for (auto item : input_blobs) {
        if (feature_map_.find(item.second) != feature_map_.end()) {
            feature_map_[item.second]->SetQuantizeMethod(MIN_MAX);
        }
    }

    return 0;
}

//更新量化表统计量
int Calibration::UpdateBlobRange(DataSet& dataset) {
    BlobMap input_blobs;
    //获取所有的输出
    Status status = instance_->GetAllInputBlobs(input_blobs);
    if (status != TNN_OK) {
        LOGE("instance get input blobs falied!\n");
        return -1;
    }
    Blob* input_blob = input_blobs.begin()->second;

    //更新每个channel的数值范围
    BlobStatisticCallback func = [&](std::vector<Blob*>& blobs,
                                     LayerInfo* info) {
        for (auto blob : blobs) {
            //如果对应的blob在统计需求映射表中，则执行更新操作
            if (feature_map_.find(blob) != feature_map_.end()) {
                feature_map_[blob]->UpdateRange();
            }
        }
    };

    FileReader file_reader;
    file_reader.SetBiasValue(cali_params_.input_bias);
    file_reader.SetScaleValue(cali_params_.input_scale);

    //遍历所有的校准文件(图片或者文本)
    for (auto file_pack : dataset.file_list) {
        //每读取一个文件，则启动数据更新
        for (auto item : feature_map_) {
            item.second->ClearRangeFlag();
        }

        //讲数据加载到输入blob中
        status =
            file_reader.Read(input_blob, file_pack.first, file_pack.second);
        if (status != TNN_OK) {
            LOGE("read input file (%s) falied!\n", file_pack.first.c_str());
            continue;
        }
        //执行前后向统计
        instance_->ForwardWithCallback(func, func);
    }

    return 0;
}

//更新分布统计
int Calibration::UpdateBlobDistribute(DataSet& dataset) {

    //初始化blob的分布统计参数
    for (auto& item : feature_map_) {
        item.second->ResetDistribute();
    }

    BlobMap input_blobs;
    //获取所有的输入blob
    Status status = instance_->GetAllInputBlobs(input_blobs);
    if (status != TNN_OK) {
        LOGE("instance get input blobs falied!\n");
        return -1;
    }
    //获取第一个input
    Blob* input_blob = input_blobs.begin()->second;

    //回调函数实现更新2048个bin的统计量
    BlobStatisticCallback func = [&](std::vector<Blob*>& blobs,
                                     LayerInfo* info) {
        for (auto blob : blobs) {
            if (feature_map_.find(blob) != feature_map_.end()) {
                feature_map_[blob]->UpdateDistribute();
            }
        }
    };

    FileReader file_reader;
    file_reader.SetBiasValue(cali_params_.input_bias);
    file_reader.SetScaleValue(cali_params_.input_scale);
    for (auto file_pack : dataset.file_list) {
        for (auto& item : feature_map_) {
            item.second->ClearDistributeFlag();
        }
        //读取文件进行推理
        status =
            file_reader.Read(input_blob, file_pack.first, file_pack.second);
        if (status != TNN_OK) {
            LOGE("read input file (%s) falied!\n", file_pack.first.c_str());
            continue;
        }
        //执行钱箱操作，回调定义函数。
        instance_->ForwardWithCallback(func, func);
    }

    return 0;
}

IntScaleResource* Calibration::CreateIntScale(std::vector<float> scale_vec) {
    IntScaleResource* int8scale = new IntScaleResource();
    // scale
    RawBuffer scale(scale_vec.size() * sizeof(float));
    float* k_data = scale.force_to<float*>();
    memcpy(k_data, scale_vec.data(), scale_vec.size() * sizeof(float));
    int8scale->scale_handle = scale;

    // bias
    RawBuffer bias(scale_vec.size() * sizeof(int32_t));
    bias.SetDataType(DATA_TYPE_INT32);
    int32_t* b_data = bias.force_to<int32_t*>();
    memset(b_data, 0, scale_vec.size() * sizeof(int32_t));
    int8scale->bias_handle = bias;
    return int8scale;
}

//神经网络各层参数量化过程
int Calibration::QuantizeParams() {
    printf("Start to Quantize Parameters ...\n");
    //网络结构
    NetStructure* net_struct  = interpreter_->GetNetStructure();
    //网络资源
    NetResource* net_resource = interpreter_->GetNetResource();
    //遍历每个神经网络层
    for (auto& item : net_struct->layers) {
        LayerType layer_type = item->type;//获取层的类型
        //支持量化
        if (kQuantizedLayerTypeStr.find(layer_type) !=
            kQuantizedLayerTypeStr.end()) {
            // assign NetStructure
            item->param->quantized = true;//设置盖层执行量化

            // assign NetResource
            if (layer_type == LAYER_CONVOLUTION) {//针对卷积层
                printf("\tQuantize Convolution parameters...\n");
                if (net_resource->resource_map.find(item->name) ==
                    net_resource->resource_map.end()) {
                    LOGE("Convolution resource not found (name: %s)",
                         item->name.c_str());
                    return -1;
                }
                //卷积层对应的资源
                ConvLayerResource* conv_res = dynamic_cast<ConvLayerResource*>(
                    net_resource->resource_map[item->name].get());
                //获取卷积参数
                ConvLayerParam* conv_param =
                    dynamic_cast<ConvLayerParam*>(item->param.get());
                std::string input_blob_scale_name =
                    item->inputs[0] + BLOB_SCALE_SUFFIX;
                
                if (net_resource->resource_map.find(input_blob_scale_name) ==
                    net_resource->resource_map.end()) {
                    LOGE("Blob Scale resource not found (name: %s)",
                         input_blob_scale_name.c_str());
                    return -1;
                }
                IntScaleResource* blob_scale = dynamic_cast<IntScaleResource*>(
                    net_resource->resource_map[input_blob_scale_name].get());
                    
                int ret = QuantizeConvParams(conv_res, conv_param, blob_scale);
                if (ret != 0) {
                    LOGE(
                        "Quantize convolution weights failed! (layer name: "
                        "%s)\n",
                        item->name.c_str());
                    return -1;
                }
                printf("\t====> done!\n");

            } 
            //全连接层的量化实现
            else if (layer_type == LAYER_INNER_PRODUCT) {
                printf("\tQuantize InnerProduct parameters...\n");
                if (net_resource->resource_map.find(item->name) ==
                    net_resource->resource_map.end()) {
                    LOGE("InnerProduct resource not found (name: %s)",
                         item->name.c_str());
                    return -1;
                }
                //获取全连接层的参数资源句柄
                InnerProductLayerResource* fc_res =
                    dynamic_cast<InnerProductLayerResource*>(
                        net_resource->resource_map[item->name].get());
                
                InnerProductLayerParam* fc_param =
                    dynamic_cast<InnerProductLayerParam*>(item->param.get());
                
                //获取input的scale参数
                std::string input_blob_scale_name =
                    item->inputs[0] + BLOB_SCALE_SUFFIX;
                
                //查找对应的scale对应的blob
                if (net_resource->resource_map.find(input_blob_scale_name) ==
                    net_resource->resource_map.end()) {
                    LOGE("Blob Scale resource not found (name: %s)",
                         input_blob_scale_name.c_str());
                    return -1;
                }

                IntScaleResource* blob_scale = dynamic_cast<IntScaleResource*>(
                    net_resource->resource_map[input_blob_scale_name].get());
                //计算FC的scale信息。blob_scale为输入的scale系数
                int ret = QuantizeFcParams(fc_res, fc_param, blob_scale);
                if (ret != 0) {
                    LOGE(
                        "Quantize InnerProduct weights failed! (layer name: "
                        "%s)\n",
                        item->name.c_str());
                    return -1;
                }
                printf("\t====> done!\n");
            }
        }
    }

    return 0;
}

//量化卷积参数
int Calibration::QuantizeConvParams(ConvLayerResource* resource,
                                    ConvLayerParam* param,
                                    IntScaleResource* input_scale) {
    int group          = param->group;
    //输出channel数，表示有多少个卷积核
    int output_channel = param->output_channel;
    //每个卷积核包含的参数个数
    int kernel_size    = DimsVectorUtils::Count(param->kernels);
    //全部的权重参数矩阵
    int size           = resource->filter_handle.GetDataCount();
    if (size % (kernel_size * output_channel) != 0) {
        LOGE("invalid weight size!\n");
        return -1;
    }
    //必须能够均匀分组
    if (output_channel % group != 0) {
        LOGE("invalid conv param (output channel, group)!\n");
        return -1;
    }
    //每个group对应的channel数
    int input_channel_per_group  = size / output_channel / kernel_size;
    int output_channel_per_group = output_channel / group;
    int oc_stride                = input_channel_per_group * kernel_size;

    std::vector<float> weight_multiby_inputscale(size);
    bool merge_channel = false;
    if (input_scale->scale_handle.GetDataCount() == 1)
        merge_channel = true;

    bool is_depthwise = group == output_channel;

    // multi weights by input_scale
    float* input_scale_data = input_scale->scale_handle.force_to<float*>();
    float* weight_data      = resource->filter_handle.force_to<float*>();
    for (int group_idx = 0; group_idx < group; group_idx++) {
        for (int oc = 0; oc < output_channel_per_group; ++oc) {
            for (int ic = 0; ic < input_channel_per_group; ++ic) {
                int s_idx = ic + group_idx * input_channel_per_group;
                for (int i = 0; i < kernel_size; ++i) {
                    int idx = (group_idx * output_channel_per_group + oc) *
                                  oc_stride +
                              ic * kernel_size + i;
                    if (merge_channel)
                        s_idx = 0;
                    if (is_depthwise) {
                        weight_multiby_inputscale[idx] = weight_data[idx];
                    } else {
                        weight_multiby_inputscale[idx] =
                            weight_data[idx] * input_scale_data[s_idx];
                    }
                }
            }
        }
    }

    // quantize weights
    RawBuffer weight_quantized(size * sizeof(char));
    weight_quantized.SetDataType(DATA_TYPE_INT8);
    RawBuffer weight_scale(output_channel * sizeof(float));

    float* weight_scale_data      = weight_scale.force_to<float*>();
    int8_t* weight_quantized_data = weight_quantized.force_to<int8_t*>();
    int ret = CalQuantizedWeights(weight_multiby_inputscale.data(), size,
                                  output_channel, weight_quantized_data,
                                  weight_scale_data);
    if (ret != 0) {
        LOGE("Calculate quantized weights falied!\n");
        return ret;
    }

    // for depthwise conv, need to mul weight_scale by input_scale
    if (is_depthwise) {
        for (int i = 0; i < output_channel; ++i) {
            int s_idx = i;
            if (merge_channel)
                s_idx = 0;
            weight_scale_data[i] =
                weight_scale_data[i] * input_scale_data[s_idx];
        }
    }

    resource->filter_handle = weight_quantized;
    resource->scale_handle  = weight_scale;

    // quantize bias
    if (param->bias) {
        float* bias_data = resource->bias_handle.force_to<float*>();
        RawBuffer bias_quantized(output_channel * sizeof(int32_t));
        bias_quantized.SetDataType(DATA_TYPE_INT32);
        int32_t* bias_quantized_data = bias_quantized.force_to<int32_t*>();

        for (int oc = 0; oc < output_channel; ++oc) {
            if (weight_scale_data[oc] == 0) {
                bias_quantized_data[oc] = 0;
            } else {
                bias_quantized_data[oc] =
                    static_cast<int32_t>(bias_data[oc] / weight_scale_data[oc]);
            }
        }

        resource->bias_handle = bias_quantized;
    }

    return 0;
}

//量化全连接的具体实现过程
int Calibration::QuantizeFcParams(InnerProductLayerResource* resource,
                                  InnerProductLayerParam* param,
                                  IntScaleResource* input_scale) {
    //全连接的输出channel，比如256
    int output_channel = param->num_output;
    //获取权重矩阵包含的权重个数
    int size           = resource->weight_handle.GetDataCount();
    //维度必须要正确size = H * W output_channel=W
    if (size % output_channel != 0) {
        LOGE("invalid weight size!\n");
        return -1;
    }
    int oc_stride = size / output_channel;


    std::vector<float> weight_multiby_inputscale(size);

    if (input_scale->scale_handle.GetDataCount() != 1) {
        LOGE("invalid scale size!\n");
        return -1;
    }

    // multi weights by input_scale
    float* input_scale_data = input_scale->scale_handle.force_to<float*>();
    float* weight_data      = resource->weight_handle.force_to<float*>();
    
    //将输入的scale系数直接乘到w上，这样只需要保存W的scale参数就可以了
    for (int i = 0; i < size; ++i) {
        weight_multiby_inputscale[i] = weight_data[i] * input_scale_data[0];
    }

    // quantize weights
    RawBuffer weight_quantized(size * sizeof(char));//量化之后的weight
    weight_quantized.SetDataType(DATA_TYPE_INT8);//设置类型为INT8

    //每个通道独立进行量化scale
    RawBuffer weight_scale(output_channel * sizeof(float));

    float* weight_scale_data      = weight_scale.force_to<float*>();
    int8_t* weight_quantized_data = weight_quantized.force_to<int8_t*>();

    int ret = CalQuantizedWeights(weight_multiby_inputscale.data(), size,
                                  output_channel, weight_quantized_data,
                                  weight_scale_data);
    if (ret != 0) {
        LOGE("Calculate quantized weights falied!\n");
        return ret;
    }
    
    //resource更新为量化
    resource->weight_handle = weight_quantized;
    resource->scale_handle  = weight_scale;

    // quantize bias bias量化过程直接使用weight的scale系数进行
    if (param->has_bias) {//如果包含bias，则对bias进行量化
        //获取bias数据
        float* bias_data = resource->bias_handle.force_to<float*>();
        //存储量化后的bias数据
        RawBuffer bias_quantized(output_channel * sizeof(int32_t));
        //修改数据类型
        bias_quantized.SetDataType(DATA_TYPE_INT32);//量化为INT32
        int32_t* bias_quantized_data = bias_quantized.force_to<int32_t*>();

        for (int oc = 0; oc < output_channel; ++oc) {
            if (weight_scale_data[oc] == 0) {
                bias_quantized_data[oc] = 0;
            } else {
                //直接除以weight的在对应位置的scale系数
                bias_quantized_data[oc] =
                    static_cast<int32_t>(bias_data[oc] / weight_scale_data[oc]);
            }
        }
        //更新bias对应的handle
        resource->bias_handle = bias_quantized;
    }
    return 0;
}

//计算权重的量化结果
int Calibration::CalQuantizedWeights(const float* weights, const int size,
                                     const int output_channel,
                                     int8_t* quantized_weights,
                                     float* weight_scale) {
    ASSERT(size % output_channel == 0);
    if (cali_params_.weights_quantize_method == MIN_MAX) { //采用MIN_MAX量化方法
        // MIN_MAX
        int oc_stride = size / output_channel;
        //W的存储格式为:[output_channel,oc_stride]
        for (int oc = 0; oc < output_channel; ++oc) {
            //起始指针
            const float* weight_start = weights + oc * oc_stride;
            int8_t* weight_q_start    = quantized_weights + oc * oc_stride;
            //计算对应最大值和最小值
            auto minmax =
                std::minmax_element(weight_start, weight_start + oc_stride);
            
            //获取绝对值最大的数
            float max_val_abs =
                std::max(std::abs(*minmax.first), std::abs(*minmax.second));
            
            //获取weight的缩放因子
            weight_scale[oc]       = max_val_abs / 127.0f;
            float scale_float2int8 = 1.0f;
            //倒数则为float到int8的缩放系数
            if (max_val_abs != 0)
                scale_float2int8 = 1 / weight_scale[oc];

            // quantize weights
            for (int i = 0; i < oc_stride; ++i) {
                //四舍五入到最近的整数
                int value = static_cast<int>(
                    std::round(weight_start[i] * scale_float2int8));
                //边界调整银蛇到-127和127
                weight_q_start[i] = std::min(127, std::max(-127, value));
            }
        }
    } 
    //ADMM量化。
    else if (cali_params_.weights_quantize_method == ADMM) {
        // ADMM
        int oc_stride           = size / output_channel;
        //量化到8bit
        const int quantize_bits = 8;
        //初始化每个channel的权重scale
        InitWeightScaleADMM(weights, size, output_channel, weight_scale,
                            quantize_bits);

        int iter           = 0;
        float pre_sum      = 0;
        float cur_sum      = 0;
        const int max_iter = 1000;
        //求所有weight的绝对值的和
        for (int i = 0; i < size; i++) {
            pre_sum += std::fabs(weights[i]);
        }
        // update weights quan。迭代1000次进行求解
        while (iter < max_iter) {
            UpdateQuantizedWeightsADMM(weights, size, output_channel,
                                       weight_scale, quantize_bits,
                                       quantized_weights);
            UpdateAlphaADMM(weights, size, output_channel, weight_scale,
                            quantized_weights);
            iter++;
        }
        //循环计算量化
        for (int i = 0; i < size; i++) {
            cur_sum +=
                std::fabs(quantized_weights[i] * weight_scale[i / oc_stride]);
        }
        // LOGD("iter: %d  with diff %f\n", iter, pre_sum - cur_sum);
    } else {
        LOGE("Not support yet (method: %d) for quantize weights",
             cali_params_.weights_quantize_method);
        return -1;
    }

    return 0;
}

int Calibration::MergeBlobScale() {
    printf("Start to Merge Blob Scale ...\n");
    NetStructure* net_struct  = interpreter_->GetNetStructure();
    NetResource* net_resource = interpreter_->GetNetResource();

    for (auto& item : net_struct->layers) {
        MergeBlobScaleRecursion(item.get(), net_struct, net_resource);
    }

    return 0;
}


void Calibration::MergeBlobScaleRecursion(LayerInfo* layer_info,
                                          NetStructure* net_struct,
                                          NetResource* net_resource) {
    LayerType layer_type = layer_info->type;
    if (kBlobScaleMergeLayerTypeStr.find(layer_type) !=
        kBlobScaleMergeLayerTypeStr.end()) {
        ASSERT(layer_info->inputs.size() == 1 &&
               layer_info->outputs.size() == 1)
        LayerInfo* pre_layer_info =
            GetLayerInfoFromOutpubBlobName(layer_info->inputs[0], net_struct);
        if (pre_layer_info != nullptr && pre_layer_info->param->quantized) {
            // merge blob scale
            std::string input_scale_name =
                layer_info->inputs[0] + BLOB_SCALE_SUFFIX;
            std::string output_scale_name =
                layer_info->outputs[0] + +BLOB_SCALE_SUFFIX;
            if (net_resource->resource_map.find(input_scale_name) !=
                    net_resource->resource_map.end() &&
                net_resource->resource_map.find(output_scale_name) !=
                    net_resource->resource_map.end()) {
                net_resource->resource_map[input_scale_name] =
                    net_resource->resource_map[output_scale_name];
                layer_info->param->quantized = true;
            }

            MergeBlobScaleRecursion(pre_layer_info, net_struct, net_resource);
        }
    }
}

//通过输出名称，反向找到对应的层的信息
LayerInfo* Calibration::GetLayerInfoFromOutpubBlobName(
    std::string blob_name, NetStructure* net_struct) {
    LayerInfo* layer_info = nullptr;
    for (auto item : net_struct->layers) {
        for (auto name : item->outputs) {
            if (name == blob_name) {
                layer_info = item.get();
                return layer_info;
            }
        }
    }

    return layer_info;
}

}  // namespace TNN_NS

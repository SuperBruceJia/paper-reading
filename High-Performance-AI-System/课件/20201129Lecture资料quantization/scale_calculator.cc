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

#include "scale_calculator.h"
#include <algorithm>
#include <cmath>

namespace TNN_NS {

// Given distribution P and Q, KL-Divergence is
// Sum(P[i] * log(P[i] / Q[i]))

//KL距离计算
static float KlDivergence(const std::vector<float>& dis_ref,
                          const std::vector<float>& dis_epd) {//epd代表expand
    float result   = 0.0f;
    const int size = dis_ref.size();

    for (int i = 0; i < size; ++i) {
        if (dis_ref[i] != 0) {
            if (dis_epd[i] == 0) {
                result += 1.0f;
            } else {
                result += (dis_ref[i] * std::log(dis_ref[i] / dis_epd[i]));
            }
        }
    }

    return result;
}

ScaleCalculator::ScaleCalculator() {
    origin_blob_          = nullptr;
    range_done_flag_      = false;
    distribute_done_flag_ = false;
    bin_nums_             = 2048;
}

ScaleCalculator::~ScaleCalculator() {}

int ScaleCalculator::Init(Blob* blob, bool merge_channel,
                          CalibrationMethod method) {
    origin_blob_   = blob;
    merge_channel_ = merge_channel;
    cali_method_   = method;

    // TO-DO: support different data_type and device_type
    if (blob->GetBlobDesc().data_type == DATA_TYPE_FLOAT &&
        blob->GetBlobDesc().device_type == DEVICE_NAIVE) {
        // TO-DO: support different data format, now only NCHW
        int channel = blob->GetBlobDesc().dims[1];
        int height  = blob->GetBlobDesc().dims[2];
        int width   = blob->GetBlobDesc().dims[3];

        //初始化每个channle的最大值和最小值
        range_per_channel_.resize(channel);
        for (auto& item : range_per_channel_) {
            item.first  = 1e6;   // init min
            item.second = -1e6;  // init max
        }

        interval_per_channel_.resize(channel);
        valid_channel_.resize(channel);
        distribute_per_channel_.resize(channel);
        //每个按2048个bin来统计
        for (auto& item : distribute_per_channel_) {
            item.resize(bin_nums_);
        }

        //如果宽高很小，则按照MIN_MAX方式来进行量化
        if (height * width < 100) {
            // the data num is too small, use minmax
            cali_method_ = MIN_MAX;
        }

        return 0;
    } else {
        LOGE("Invalid Blob for quantization!\n");
        return -1;
    }
}

//目前仅支持MIN_MAX和KL_DIVERGENCE两种量化
int ScaleCalculator::SetQuantizeMethod(CalibrationMethod method) {
    if (method != MIN_MAX && method != KL_DIVERGENCE) {
        LOGE("invalid method (%d) for blob quantization!\n", method);
        return -1;
    }

    cali_method_ = method;
    return 0;
}

//设置对输入进行channel 合并处理
void ScaleCalculator::SetMergeChannel(bool merge) {
    merge_channel_ = merge;
}

void ScaleCalculator::ClearRangeFlag() {
    range_done_flag_ = false;
}

void ScaleCalculator::ClearDistributeFlag() {
    distribute_done_flag_ = false;
}

//更新统计量的过程
int ScaleCalculator::UpdateRange() {
    if (range_done_flag_) {
        return 0;
    }

    int batch       = origin_blob_->GetBlobDesc().dims[0];
    int channel     = origin_blob_->GetBlobDesc().dims[1];
    int height      = origin_blob_->GetBlobDesc().dims[2];
    int width       = origin_blob_->GetBlobDesc().dims[3];
    int hxw         = height * width;
    float* data_ptr = reinterpret_cast<float*>(
        static_cast<char*>(origin_blob_->GetHandle().base) +
        origin_blob_->GetHandle().bytes_offset);

    for (int b = 0; b < batch; ++b) {
        for (int c = 0; c < channel; ++c) {
            int channel_idx = c;
            if (merge_channel_) {
                channel_idx = 0;
            }

            float* p = data_ptr + b * channel * hxw + c * hxw;
            //获取channel的range范围
            for (int i = 0; i < hxw; ++i) {
                float val = p[i];
                //更新每个channel
                if (val < range_per_channel_[channel_idx].first) {
                    range_per_channel_[channel_idx].first = val;
                }
                if (val > range_per_channel_[channel_idx].second) {
                    range_per_channel_[channel_idx].second = val;
                }
            }
        }
    }

    range_done_flag_ = true;
    return 0;
}

int ScaleCalculator::ResetDistribute() {
    //保存每个channel的间隔信息
    for (unsigned int i = 0; i < interval_per_channel_.size(); ++i) {
        float max_val     = std::max(std::abs(range_per_channel_[i].first),
                                 std::abs(range_per_channel_[i].second));
        //最大值必须满足的条件
        valid_channel_[i] = max_val > 0.00001;

        //计算每个channel保存的间隔，如果是 2048/最大值
        if (valid_channel_[i]) {
            interval_per_channel_[i] = (float)bin_nums_ / max_val;
        }

        if (merge_channel_)
            break;
    }

    for (auto& item : distribute_per_channel_) {
        std::fill(item.begin(), item.end(), 1.0e-7);
    }

    return 0;
}

//更新分布统计
int ScaleCalculator::UpdateDistribute() {
    if (distribute_done_flag_) {
        return 0;
    }
    
    int batch       = origin_blob_->GetBlobDesc().dims[0];
    int channel     = origin_blob_->GetBlobDesc().dims[1];
    int height      = origin_blob_->GetBlobDesc().dims[2];
    int width       = origin_blob_->GetBlobDesc().dims[3];
    int hxw         = height * width;

    //获取数据的实际起始位置
    float* data_ptr = reinterpret_cast<float*>(
        static_cast<char*>(origin_blob_->GetHandle().base) +
        origin_blob_->GetHandle().bytes_offset);

    //循环batch中的每个数据
    for (int b = 0; b < batch; ++b) {
        //循环每个channel
        for (int c = 0; c < channel; ++c) {
            int channel_idx = c;
            if (merge_channel_) {
                channel_idx = 0;
            }
            if (!valid_channel_[channel_idx]) {
                continue;
            }
            //获取到每个channel的数据起始点
            float* p = data_ptr + b * channel * hxw + c * hxw;
            float* distribute_data =
                distribute_per_channel_[channel_idx].data();
            //遍历输入更新bin统计量
            for (int i = 0; i < hxw; ++i) {
                float val = p[i];
                if (val == 0) {
                    continue;
                }
                //计算index，更新统计量
                int index = static_cast<int>(
                    std::abs(val) * interval_per_channel_[channel_idx]);
                index = std::min(index, bin_nums_ - 1);
                distribute_data[index] += 1.0;
            }
        }
    }

    distribute_done_flag_ = true;
    return 0;
}

int ScaleCalculator::CalculateScale(std::vector<float>& val) {
    val.clear();

    if (merge_channel_) {
        val.push_back(0.0f);
        if (!valid_channel_[0]) {
            return -1;
        }
        int ret = CalculateScalePerDis(distribute_per_channel_[0],
                                       interval_per_channel_[0], val[0]);
        if (ret != 0)
            return -1;
    } else {//不进行channel merge
        val.resize(valid_channel_.size());
        std::fill(val.begin(), val.end(), 0.0f);

        for (unsigned int c = 0; c < distribute_per_channel_.size(); ++c) {
            if (!valid_channel_[c]) {
                continue;
            }
            //计算分别计算每个channel的距离
            int ret = CalculateScalePerDis(distribute_per_channel_[c],
                                           interval_per_channel_[c], val[c]);
            if (ret != 0)
                return -1;
        }
    }

    return 0;
}

//已经统计的分布
int ScaleCalculator::CalculateScalePerDis(std::vector<float>& distribute,
                                          float interval, float& output) {

    //目标bin为128个
    const int target_bin_nums = 128;
    int threshold             = target_bin_nums;

    // normalize
    float sum = 0;
    //统计总的数据个数
    std::for_each(distribute.begin(), distribute.end(),
                  [&](float n) { sum += n; });
    //计算落在每个bin中的概率
    std::for_each(distribute.begin(), distribute.end(),
                  [sum](float& n) { n /= sum; });

    //MIN_MAX量化
    if (cali_method_ == MIN_MAX) {
        threshold = bin_nums_ - 1;
    } 
    else if (cali_method_ == KL_DIVERGENCE) {
        float kl_val_min          = 1e6;
        float sum_after_threshold = 0.0f;

        std::for_each(distribute.begin() + target_bin_nums, distribute.end(),
                      [&](float n) { sum_after_threshold += n; });
        
        // 为了找到合适的阈值，从target_bin_nums（128）开始遍历，依次扩大范围，实现了选取|T|的计算逻辑，不断测试新的边界，并计算KL距离
        for (int i = target_bin_nums; i < bin_nums_; ++i) {
            // 1. get referenced distribute
            std::vector<float> distribute_ref(i);
            //直接拷贝到ref中
            std::copy(distribute.begin(), distribute.begin() + i,
                      distribute_ref.begin());

            //超过的部分全部合并到最后一个bin中
            distribute_ref[i - 1] += sum_after_threshold;

            //下一次需要合并的概率值
            sum_after_threshold -= distribute[i];  // for next loop

            // 2. quantize the distribute within threshold scope as target bins
            std::vector<float> distribute_quantized(target_bin_nums);
            const float bin_interval = (float)i / (float)target_bin_nums;

            //映射到128bin的分布统计
            for (int j = 0; j < target_bin_nums; ++j) {
                //每个bin包含的范围
                const float start = j * bin_interval;
                const float end   = start + bin_interval;

                const int left_upper = static_cast<int>(std::ceil(start));
                if (left_upper > start) {
                    const float left_scale = left_upper - start;
                    distribute_quantized[j] +=
                        left_scale * distribute[left_upper - 1];
                }
                const int right_lower = static_cast<int>(std::floor(end));
                if (right_lower < end) {
                    const float right_scale = end - right_lower;
                    distribute_quantized[j] +=
                        right_scale * distribute[right_lower];
                }
                //量化后的分布
                std::for_each(distribute.begin() + left_upper,
                              distribute.begin() + right_lower,
                              [&](float n) { distribute_quantized[j] += n; });
            }

            // 3. expand target bins to i bins to calculate kl
            std::vector<float> distribute_expanded(i);//扩展bin

            //仍然循环128次
            for (int j = 0; j < target_bin_nums; ++j) {
                const float start    = j * bin_interval;
                const float end      = start + bin_interval;//开始和结束位置
                float count          = 0;
                //向上取整数、向下取整数造成的边界问题处理
                const int left_upper = static_cast<int>(std::ceil(start));
                float left_scale     = 0.0f;

                if (left_upper > start) {
                    left_scale = left_upper - start;
                    if (distribute[left_upper - 1] != 0) {
                        count += left_scale;
                    }
                }
                const int right_lower = static_cast<int>(std::floor(end));
                float right_scale     = 0.0f;
                if (right_lower < end) {
                    right_scale = end - right_lower;
                    if (distribute[right_lower] != 0) {
                        count += right_scale;
                    }
                }

                std::for_each(distribute.begin() + left_upper,
                              distribute.begin() + right_lower, [&](float n) {
                                  if (n != 0) {
                                      count += 1;
                                  }
                              });

                if (count == 0) {
                    continue;
                }

                const float to_expand_val = distribute_quantized[j] / count;

                if (left_upper > start && distribute[left_upper - 1] != 0) {
                    distribute_expanded[left_upper - 1] +=
                        to_expand_val * left_scale;
                }
                if (right_lower < end && distribute[right_lower] != 0) {
                    distribute_expanded[right_lower] +=
                        to_expand_val * right_scale;
                }

                for (int k = left_upper; k < right_lower; ++k) {
                    if (distribute[k] != 0) {
                        distribute_expanded[k] += to_expand_val;
                    }
                }
            }

            // 4. calculate kl val
            const float kl_val_cur =
                KlDivergence(distribute_ref, distribute_expanded);

            // 5. get the threshold of min kl val
            if (kl_val_cur < kl_val_min) {
                kl_val_min = kl_val_cur;
                threshold  = i;
            }
        }
    } else {
        LOGE("invalid calibration method! (type: %d)\n", cali_method_);
        return -1;
    }

    output = ((float)threshold + 0.5) / interval / 127.0;

    return 0;
}

}  // namespace TNN_NS

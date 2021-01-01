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

#ifndef TNN_TOOLS_QUANTIZATION_CALIBRATION_COMMON_H_
#define TNN_TOOLS_QUANTIZATION_CALIBRATION_COMMON_H_

#include <map>
#include <string>
#include <vector>

#include "file_reader.h"

namespace TNN_NS {

//支持的量化方法
typedef enum {
    /* min max method */
    MIN_MAX = 0,
    /* ADMM method */
    ADMM = 1,
    /* kl divergence method */
    KL_DIVERGENCE = 2,
} CalibrationMethod;

//数据集表示
struct DataSet {
    /* list of input file path and format */
    std::vector<std::pair<std::string, FileFormat>> file_list;//支持图片、numpy和文本格式。每个元素为一个文件

    /* input shape of the input files* */
    InputShapesMap input_shape;//输入名称和输入维度的映射表
};

//量化校准参数
struct CalibrationParam {
    CalibrationMethod blob_quantize_method;//输入[input]量化方法
    CalibrationMethod weights_quantize_method;//权重[weight]量化方法
    bool merge_blob_channel;//决定是否合并输入的channel
    std::vector<float> input_bias;//输入的bias
    std::vector<float> input_scale;//输入的scale参数
};

}  // namespace TNN_NS

#endif  // TNN_TOOLS_QUANTIZATION_CALIBRATION_COMMON_H_

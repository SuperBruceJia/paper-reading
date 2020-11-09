# 如何参与

[TOC]

非常欢迎参与 `Python 编码风格与规范` 的建设。

参与贡献的方式：

1. 先在 `Issue` 中提出看法进行讨论；
2. 或者对关联的 issue 推送`Merge Request`；（推送MR请求之前，需要自行先编译预览一遍）
3. 大家一起讨论相关`issue`的合理性，编辑规范，然后管理员合并到`master`。

## 目录结构
```bash
/
/docs/             # html 页面，用于展示静态页面
/docs/index.html   # README.md动态生成的html格式   <---- 不可直接编辑，make html 生成

/rules/            # Python 规则列表，yaml格式
/rules/language_rules/         # 语言规则
/rules/style_rules/            # 风格规则

/template/                     # 模版文件，用于编译的源
/template/item.yaml.example    # 每个简单的python规则格式
/template/flake8.jinja2        # flake8的配置模版
/template/pylintrc.jinja2      # .pylintrc的配置模版
/template/README.md.jinja2     # README.md的模版
/template/rule_item_template.jinja2     # 用于渲染 README.md 的每条规则模版

/.pylintrc    # 配置文件模版   <---- 不可直接编辑，make build 生成
/build.py     # 用于从yaml编译生成README.md以及pylint等配置文件的工具
/CNAME        # pages.oa.com 的静态页面域名配置
/README.md    # 最终规则生成   <---- 不可直接编辑，make build 生成
/setup.cfg    # 配置文件模版   <---- 不可直接编辑，make build 生成
```

## 开发预览

相关开发环境使用

- Python3.6+
- Pylint
- pandoc
- jinja2
- yaml

```bash
# 安装依赖
pip install -r requirements.txt

# 编译生成README.md 以及相关配置demo
make build

# 执行make build，以及生成html文档
make html

# 执行make html，并用浏览器打开
make bhtml

# 检查python脚本
# 本项目的代码也要准守本编码规范
make lint
```


### 举个例子

比如要添加 import 的一些规范。 

1.编辑`/rules/style_rules/07 import.yml`，在`rules`列表下添加


2.添加新的内容，按照 `/template/item.yaml.example` 格式

* 按推荐级别 `Mandatory/Preferable/Optional` 排序依次添加
* 如果有直接对应的 pylint、或者pycodestyle 检查编号直接添加
* 最好有`good_example`, `bad_example` 代码样例
* 如果简短的说明 `summary` 无法满足，可以在 `description` 中补充

```yaml
  - name: multiple-imports
    level: Mandatory
    summary: 每个导入应该独占一行。
    description:
    bad_example: |
      ```python
      import os, sys
      ```
    good_example: |
      ```python
      import os
      import sys
      ```
    pylint:
      - multiple-imports
    pycodestyle:
```


3.编译预览 README.md，编译的产物均需提交到git

```bash
# 编译的产物均需提交到git
make build
make bhtml
make lint
```
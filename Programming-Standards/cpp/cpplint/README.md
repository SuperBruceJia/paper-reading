# cpplint

Cpplint 是一个 Python 编写的基于 Google 代码规范的检测工具。它只是一个代码风格检测工具，其并不对代码逻辑、语法错误等进行检查。
因为我们的代码规范也是以 Google 代码规范为，因此它也适用于我们。

但是需要注意的是，由于我们的代码规范和 Google 代码规范的差异，有些地方不能直接使用，比如我们的最大行长度是 100，而不是 Google 原始规范的 80，
此时就需要在目录行指定 `--lintlength=100` 来适配。我们并不想改动 cpplint.py 里的默认值。

Cpplint 有一套推测项目的根目录的算法，但是如果错误的话会导致对头文件保护宏命名的检查出错，此时可以通过 --repository 或者 --root 指定项目的根目录。

cpplint 也支持项目/目录级别的 `CPPLINT.cfg` 配置文件，这样就不需要每次在命令行传递相同的参数了，参见[参考配置](CPPLINT.cfg)。

维护者注意：Cpplint 目前有很多不同的版本流出，本版本并非[原始的官方版本](https://github.com/google/styleguide/tree/gh-pages/cpplint)，而是更新更活跃的[Fork的独立版本](https://github.com/cpplint/cpplint)。

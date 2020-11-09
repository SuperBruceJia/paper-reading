# 代码格式化工具

## 用途
代码格式化工具有两种用法：
- 作为保存时自动格式化的工具，确保所有开发者写出来的都一样。需要注意的是这种做法不适合不打算全部批量格式化的存量代码，因为很容易造成改动一个时引发大量的无关修改，导致代码评审困难。
- 手工批量统一转换格式不符合现有规范的旧代码。

## 安装

Mac 系统：
```bash
brew install clang-format
```

Linux 系统：
```bash
# RedHat 系，包括 CentOS
yum install clang-format
# Debian 系，包括 Ubuntu
apt install clang-format
```

不过 tlinux 虽然可以通过 yum 安装，但是默认安装的 clang-format 版本很低，是 3.4.2 版，使用时会对我们提供的参考配置报错。解决方案有两个：

- 从[官方网站](https://releases.llvm.org/download.html)下载，经测试 `SuSE Linux Enterprise Server 11SP3 x86_64` 可以在 tlinux 上正常安装。
  ```bash
  # 在合适的目录下，下载和解压
  $ wget https://github.com/llvm/llvm-project/releases/download/llvmorg-10.0.0/clang+llvm-10.0.0-x86_64-linux-sles11.3.tar.xz
  $ tar xf clang+llvm-10.0.0-x86_64-linux-sles11.3.tar.xz

  # 加到环境变量里，也可以加到 `~/.bashrc` 之类的文件里以便永久生效，注意 $PWD 要改为实际目录。
  $ export PATH=$PWD/clang+llvm-10.0.0-x86_64-linux-sles11.3/bin:$PATH

  # 查看版本是否正确
  $ clang-format
  clang-format version 10.0.0
  ```
- 从[Tlinux SCL源](http://km.oa.com/group/799/articles/show/299371)安装（需要 root 或者 sudo）
  ```bash
  yum install centos-release-scl -y
  yum install llvm-toolset-7.0
  scl enable llvm-toolset-7.0 bash
  ```
  这样安装的版本是 7.0。

## 用法
[请阅读官方文档](https://clang.llvm.org/docs/ClangFormat.html)，这里提供了一份[参考配置文件](.clang-format)。

如果 clang-format 版本较老，可能会报告不支持 `Language` 和 `IncludeBlocks`，如果不方便升级，可以去掉相应的配置。

`Language` 是因为 clang-format 后来支持了其他语言，我们在这里加入是为了方便和格式化其他语言的配置文件合并，去掉不影响使用。

还要同时去掉 `SortIncludes`。这样会失去自动排列头文件的功能。
`SortIncludes` 的用途是对头文件按字母顺序排序。但只是简单地开启这个功能，会对文件中整个 include 列表里的同类头文件合并后重新排序，导致无法使用。
后来的版本引入了 `IncludeBlocks`，支持只在 include 块内排序，满足了我们的要求，我们写代码时只要在不同分组的 include 之间用空行隔开即可。
如果要去掉 `IncludeBlocks`，`SortIncludes` 也要关闭，以免对所有的头文件做排序，

自动化工具可能未必总能 100% 让人满意，如果确实有格式化错误，可以[局部禁用 clang-format](http://clang.llvm.org/docs/ClangFormatStyleOptions.html#disabling-formatting-on-a-piece-of-code)：

```cpp
int formatted_code;
// clang-format off
    void    unformatted_code  ;
// clang-format on
void formatted_code_again;
```

## 其他
还有一些类似的工具比如 [astyle](http://astyle.sourceforge.net/)，不过目前看来来 clang-format 是最好的。

代码格式化后，被修改的行的作者信息会发生改变，影响通过 `git blame` 查找最后修改者的功能，可以参考[这篇文章](http://km.oa.com/group/46770/articles/show/423749)或者用[codeformatter](https://git.code.oa.com/nocchijiang/codeformatter)工具解决。

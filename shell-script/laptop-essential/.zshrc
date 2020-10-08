# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/var/root/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
# ZSH_THEME="rkj-repos"
ZSH_THEME="af-magic"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS=true

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
# plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

export PATH=/Users/shuyuej/anaconda3/bin:$PATH
source ~/.bash_profile

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositoriesa
plugins=(
    git
    docker
    z
    web-search
    zsh-autosuggestions
    zsh-syntax-highlighting
    fzf
)

source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh

export PATH="/usr/local/opt/icu4c/bin:$PATH"
export PATH="/usr/local/opt/icu4c/sbin:$PATH"
export PATH="/usr/local/opt/qt/bin:$PATH"
export PATH=$PATH:/Users/shuyuej/.local/bin
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/local/lib"
export PATH=$PATH:/usr/local/bin

export PATH="/usr/local/opt/bison/bin:$PATH"

source /Users/shuyuej/Library/Preferences/org.dystroy.broot/launcher/bash/br

alias ll="ls -al"
alias cl="clear"

alias speed="speedtest-cli"
alias youtube="youtube-dl -f best -i"
alias cpu="htop" 
alias clone="git clone"
alias cpu_version="sysctl machdep.cpu.brand_string"
alias cpu_thread="sysctl -n machdep.cpu.thread_count"
alias lzd='docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock -v ~/.config/lazydocker:/.config/jesseduffield/lazydocker lazyteam/lazydocker'
alias pcat='pygmentize -f terminal256 -O style=native -g'
alias fd='find'
alias task='asynctask -f'

# Save a lot of typing for common commands
alias gs="git status"
alias gc="git commit"
alias v="vim"

# Save you from mistyping
alias sl=ls

# Overwrite existing commands for better defaults
alias mv="mv -i"           # -i prompts before overwrite
alias mkdir="mkdir -p"     # -p make parent dirs as needed
alias df="df -h"           # -h prints human readable format

# Alias can be composed
alias la="ls -A"
alias lla="la -l"

export PATH="/usr/local/opt/gnu-getopt/bin:$PATH"
export PATH=$PATH:/Users/shuyuej/.gem/specs/rubygems.org%443/quick/Marshal.4.8
# export HADOOP_HOME=/Users/shuyuej/Desktop/hadoop-2.9.2
# export HADOOP_MAPRED_HOME=$HADOOP_HOME
# export HADOOP_COMMON_HOME=$HADOOP_HOME
# export HADOOP_HDFS_HOME=$HADOOP_HOME

# export HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop
# export PATH=$PATH:$HADOOP_HOME/sbin:$HADOOP_HOME/bin

# export HIVE_HOME=/usr/local/apache-hive-3.1.2-bin

# export PATH="/Users/shuyuej/Desktop/hadoop-2.9.2/bin:$PATH"
# export PATH="/usr/local/apache-hive-3.1.2-bin/bin:$PATH"

# export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$HADOOP_HOME/lib/native
# export HADOOP_COMMON_LIB_NATIVE_DIR=$HADOOP_HOME/lib/native
# export HADOOP_OPTS="-Djava.library.path=$HADOOP_HOME/lib:$HADOOP_COMMON_LIB_NATIVE_DIR"

# export PATH="/usr/local/hadoop/lib/native:$PATH"
export PATH="/usr/local/opt/bzip2/bin:$PATH"
export PATH="/usr/local/Cellar/snappy/1.1.8:$PATH"
export PATH="/usr/local/Cellar/zstd/1.4.4:$PATH"
export PATH="/usr/local/Cellar/lz4/1.9.2:$PATH"
export PATH="/usr/local/Cellar/zlib/1.2.11:$PATH"
export LDFLAGS="-L/usr/local/opt/zlib/lib"
export CPPFLAGS="-I/usr/local/opt/zlib/include"
export PKG_CONFIG_PATH="/usr/local/opt/zlib/lib/pkgconfig"
export PATH="/usr/local/protobuf:$PATH"
export PATH="/usr/local/protobuf/bin:$PATH"

export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
export PATH="/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home:$PATH"
export JAVA_HOME="/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home"

# export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"
export OPENSSL_INCLUDE_DIR=/usr/local/opt/openssl@1.1/include
export OPENSSL_ROOT_DIR=/usr/local/opt/openssl@1.1
export PATH="/usr/local/opt/openssl@1.1:$PATH"

export PATH="/usr/local/Cellar/bzip2/1.0.8:$PATH"                                                                                                      
export PATH="/usr/local/Cellar/snappy/1.1.8:$PATH"
export PATH="/usr/local/opt/qt/bin:$PATH"
# export PATH="/usr/local/Cellar/opencv/4.3.0_2:$PATH"
export OPENCV_HOME=/usr/local/Cellar/opencv/4.3.0_2
export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"
export PATH="/usr/local/texlive/2020:$PATH"
export PATH="/usr/local/texlive/2020/bin/x86_64-darwin/:$PATH"
export PATH="/usr/local/opt/gnu-getopt/bin:$PATH"
export PATH="/usr/local/opt/python@3.8/bin:$PATH"
export PATH="/usr/local/opt/python@3.8/bin:$PATH"
export PATH="/usr/local/opt/sqlite/bin:$PATH"

if type brew &>/dev/null; then
  FPATH=$(brew --prefix)/share/zsh-completions:$FPATH
  autoload -Uz compinit
  compinit
fi

eval "$(perl -I$HOME/perl5/lib/perl5 -Mlocal::lib=$HOME/perl5)"
eval "$(perl -I$HOME/perl5/lib/perl5 -Mlocal::lib=$HOME/perl5)"
export PATH="/usr/local/opt/bison/bin:$PATH"
export PATH="/usr/local/opt/bison/bin:$PATH"
export PATH="/usr/local/opt/qt/bin:$PATH"
export PATH="/usr/local/opt/qt/bin:$PATH"
eval "$(perl -I$HOME/perl5/lib/perl5 -Mlocal::lib=$HOME/perl5)"
export PATH="/usr/local/opt/openjdk@11/bin:$PATH"
export PATH="/usr/local/opt/openjdk@11/bin:$PATH"
export PATH="/usr/local/opt/bison/bin:$PATH"
export PATH="/usr/local/opt/openjdk@11/bin:$PATH"
export PATH="/usr/local/opt/sqlite/bin:$PATH"
export PATH="/usr/local/opt/sqlite/bin:$PATH"
export PATH="/usr/local/opt/libpcap/bin:$PATH"
export PATH="/usr/local/opt/qt/bin:$PATH"
export PATH="/usr/local/opt/vtk@8.2/bin:$PATH"

# The next line updates PATH for the Google Cloud SDK.
if [ -f '/Users/shuyuej/google-cloud-sdk/path.zsh.inc' ]; then . '/Users/shuyuej/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '/Users/shuyuej/google-cloud-sdk/completion.zsh.inc' ]; then . '/Users/shuyuej/google-cloud-sdk/completion.zsh.inc'; fi

[ -z "$ZSH_NAME" ] && [ -f ~/.fzf.bash ] && source ~/.fzf.bash

eval "$(perl -I$HOME/perl5/lib/perl5 -Mlocal::lib=$HOME/perl5)"
export PATH="/usr/local/opt/ruby/bin:$PATH"

# fpath=(/var/root/.oh-my-zsh/plugins/zsh-completions/src $fpath)

export PATH="/usr/local/opt/ruby/bin:$PATH"

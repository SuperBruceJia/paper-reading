# added by Anaconda3 2019.03 installer
# >>> conda init >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$(CONDA_REPORT_ERRORS=false '/anaconda3/bin/conda' shell.bash hook 2> /dev/null)"
if [ $? -eq 0 ]; then
    \eval "$__conda_setup"
else
    if [ -f "/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/anaconda3/etc/profile.d/conda.sh"
        CONDA_CHANGEPS1=false conda activate base
    else
        \export PATH="/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda init <<<
#export JAVA_HOME=$(/usr/libexec/java_home)
export PATH="/usr/local/sbin:$PATH"
# added by Anaconda3 2019.07 installer
# >>> conda init >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$(CONDA_REPORT_ERRORS=false '/Users/shuyuej/anaconda3/bin/conda' shell.bash hook 2> /dev/null)"
if [ $? -eq 0 ]; then
    \eval "$__conda_setup"
else
    if [ -f "/Users/shuyuej/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/shuyuej/anaconda3/etc/profile.d/conda.sh"
        CONDA_CHANGEPS1=false conda activate base
    else
        \export PATH="/Users/shuyuej/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda init <<<
[ -f "${GHCUP_INSTALL_BASE_PREFIX:=$HOME}/.ghcup/env" ] && source "${GHCUP_INSTALL_BASE_PREFIX:=$HOME}/.ghcup/env"
export PATH="/usr/local/opt/qt/bin:$PATH"
# Added by install_latest_perl_osx.pl
[ -r /Users/shuyuej/.bashrc ] && source /Users/shuyuej/.bashrc

# export PATH="/usr/local/opt/openjdk/bin:$PATH"
# export JAVA_HOME=$(/usr/libexec/java_home)
# export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
# export JAVA_HOME="/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home"
# export PATH="/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home:$PATH"

# Java Configuration
# export JAVA_8_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
# export JAVA_HOME=$JAVA_8_HOME
# export JAVA_HOME=`/usr/libexec/java_home -d 64 -v 1.8.0_272`                                                                                                             
# export JAVA_HOME=$(/usr/libexec/java_home -d 64 -v 1.8.0_272)

export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
export PATH="/usr/local/opt/ruby/bin:$PATH"
alias vi=vim
alias vim=mvim
alias mvim='/usr/local/bin/mvim -v'
alias task='asynctask -f'

export PATH="$HOME/bin:$HOME/.local/bin:$PATH"
[ -f $HOME/bin/zsh ] && exec $HOME/bin/zsh -l

source /Users/shuyuej/Library/Preferences/org.dystroy.broot/launcher/bash/br

[ -z "$ZSH_NAME" ] && [ -f ~/.fzf.bash ] && source ~/.fzf.bash
[[ -r "/usr/local/etc/profile.d/bash_completion.sh" ]] && . "/usr/local/etc/profile.d/bash_completion.sh"

export PATH="$HOME/.cargo/bin:$PATH"

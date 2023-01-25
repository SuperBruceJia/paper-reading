# Uninstall and Install Anaconda on macOS
## Table of Contents
<ul>
    <li><a href="#Completely-Remove-Anaconda">Completely Remove Anaconda</a></li>
    <li><a href="#Install-Anaconda">Install Anaconda</a></li>
</ul>

## Completely Remove Anaconda
```shell
sudo rm -rf anaconda3 ~/anaconda3 ~/opt/anaconda3
sudo rm -rf .anaconda_backup .conda .condarc .bash_profile-anaconda3.bak
```

# Install Anaconda
<img width="800" alt="image" src="https://user-images.githubusercontent.com/31528604/214464461-6ff876aa-a59c-4541-b8b4-b6b8366e3c60.png">
<img width="800" alt="image" src="https://user-images.githubusercontent.com/31528604/214465726-94d8dbc4-f1e7-47ee-91f5-e8617ce3f8c9.png">
<img width="800" alt="image" src="https://user-images.githubusercontent.com/31528604/214465762-f269eaa3-2d7b-4178-9b13-e4f29427d2f9.png">

Note: I installed Anaconda to `User Name`, i.e., `shuyuej` Folder.

<img width="800" alt="image" src="https://user-images.githubusercontent.com/31528604/214465921-69d33b4c-bedf-414e-8add-d470c316125e.png">
<img width="800" alt="image" src="https://user-images.githubusercontent.com/31528604/214465945-5091e274-c489-4828-8dec-30159d47ddd2.png">

This code will be automatically added to your System Environment File.

```shell
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/shuyuej/opt/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/shuyuej/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/shuyuej/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/shuyuej/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

Last Update: Jan. 25th, 2023

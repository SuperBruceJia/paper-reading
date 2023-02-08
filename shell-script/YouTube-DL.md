<img width="840" alt="image" src="https://user-images.githubusercontent.com/31528604/217407284-233cd624-1e6d-4695-826e-f3119fb92b3e.png">

## Download the master branch of youtube-dl
```shell
git clone https://github.com/ytdl-org/youtube-dl.git
```

<!-- ##  Install some Python Dependency
```shell
pip install youtube_dl
``` -->

## Make from source
```shell
make
```

## Add YouTube Executable to the PATH
```shell
alias youtube="/Users/shuyuej/Desktop/Codes/youtube-dl/youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' -i"                                  
```

## Download Videos via youtube Executable
```shell
youtube "https://www.youtube.com/watch?v=C1SwwWp6mSo"
```

**Notice**: You may `clone` and `make` again if the speed is limited someday.

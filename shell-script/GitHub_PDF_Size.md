# Upload Large PDF Files

## Install Git LFS
```vim
brew update
brew install git-lfs
```

## Config GitHub
```vim
git lfs migrate import --include="*.pdf"
```

## Update New Added Files
```vim
git add .
git commit -m "Update Files"
git push
```

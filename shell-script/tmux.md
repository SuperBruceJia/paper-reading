# Learning tmux

## 系统操作

`tmux`: 打开⼀个tmux会话，并会⾃动创建⼀个窗⼝（window）和⾯板（pane）

`d`: （detach）分离当前客户端（client）

`tmux attach-session`: 恢复tmux会话

`tmux attach`: 恢复tmux会话（实践发现和上⼀条命令效果相同）

## 窗⼝操作

`c`: （create）创建⼀个新的窗⼝

`n`: （next）进入下⼀个窗⼝

`p`: （previous）进入上⼀个窗⼝

`0-9`: 进入对应编号的窗⼝

`&`: 关闭当前窗⼝

## ⾯板操作

`%`: 将当前⾯板进⾏纵向分屏

`"`: 将当前⾯板进⾏⽔平分屏

⽅向键: 进入不同⾯板

`Ctrl+⽅向键`: 调整当前⾯板⼤⼩

`x`: 关闭当前⾯板

## 其他操作

`[`: 按PgUp PgDn或使⽤鼠标进⾏翻⻚，按q退出

`t`: 显⽰系统时间

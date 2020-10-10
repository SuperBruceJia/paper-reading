# Learning vim

This repo is mainly for my personal learning of vim.

## Mode

1. normal mode `<ESC>`

2. insert mode `i`

3. command-line mode `:`

4. replace mode `r`

5. visual mode `v`

6. visual-line mode `shift-v`

7. visual-block mode `ctrl-v` 

## Useful Commands

### Close editor

`:quit` or `:q`

### Get help 

`:help` or `:help w`

### Movement

`h` : move left

`j` : move down

`k` : move up

`l` : move right

`4k` : move 4 lines up <-- `Number + h/j/k/l`

### Move Word

`w` : move one word (from **left** to **right**, each point to the **beginning** of the word)

`b` : move one word (from **right** to **left**, each point to the **beginning** of the word)

`e` : move one word (from **left** to **right**, each point to the **end** of the word)

`3w` : move 3 words <-- `Number + w/b/e`

### Line

`0` : point to the beginning of the line

`$` : point to the end of the line

`^` : point to the beginning non-empty character of a line

`H` or `gg` : point to the first line (High)

`L` or `G` : point to the last line (Low)

`M` : point to the middle of lines (Middle)

### Delete

`dw` : delete a word

`3dw` : delete 3 words <-- `Number + dw`

`de` : delete the word at the end of this line

`dd` : delete current line

`cc` : delete current line and insert a line + insert mode

`x` : delete the current character

`r` : replace current character

### Copy and Paste

`y` : copy

`p` : paste

`yy` : copy one line

`yw` : copy one word

### Undo and Redo

`u` : undo

`ctrl + R` : redo

### find in a line

`f + x` : find `x` from this line

### Global Search 

`:/xxx` : search `xxx` globally, then use `n` to go to the next match

### New Line

`o` : insert a new line + insert mode

###   Modifiers

`ci[` : delete all the words inside a `[xxxxx xxxxx xxxxxx]`

`ci'` : delete all the words inside a `'xxxx xxxx xxxx'`

## Reference

1. [Editors (Vim) Materials](https://missing.csail.mit.edu/2020/editors/)

2. [Vim Video (MIT)](https://www.youtube.com/watch?v=a6Q8Na575qc)

## License

MIT License

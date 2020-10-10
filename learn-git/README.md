# Learning Git and Version Control

This repo is mainly for my learning of Git &amp; GitHub

## Pure files without Git Initialized

1. Git Initialize

    ```
      $ git init
    ```

2. Add files

      &emsp; a. To add all the files under the folder 

      ```
        $ git add .
      ```

      &emsp; b. To add a / some files under the folder, e.g., just add README.md

      ```
        $ git add README.md
      ```

3. Commit

    ```
      $ git commit -m "Update Files"
    ```

4. Connect remote repo, for example, I connect EEG-DL repo

    ```
      $ git remote add origin https://github.com/SuperBruceJia/EEG-DL.git
    ```

5. Pull the original files from the repo

    ```
      $ git pull origin master
    ```

6. Push the new files to the repo (by force)

    ```
      $ git push origin master -f
    ```

## Cloned repo and update files

1. Add files

      &emsp; a. To add all the files under the folder 

      ```
        $ git add .
      ```

      &emsp; b. To add a / some files under the folder, e.g., just add README.md

      ```
        $ git add README.md
      ```

2. Commit

    ```
      $ git commit -m "Update Files"
    ```

3. Push the new files to the repo

    ```
      $ git push
    ```

    or 

    ```
      $ git push origin HEAD:master
    ```

    or 

    ```
      $ git push --set-upstream origin master
    ```

## Commit Logs

```
  $ git log -all -graph --decorate
```

## Commit File Difference

```
  $ git diff file_name
```

## Check

```
  $ git checkout -vv file_name
```

or

```
  $ git checkout -vv branch_name
```

## Merge Branches

```
  $ git merge branch_name
```

If Merge Conflicts happened, we can manually make difficult branches' codes right, and use

```
  $ git merge --continue
```

## Remote

```
  $ git remote add <name> <url>
```

## Reference

[Version Control (Git)](https://missing.csail.mit.edu/2020/version-control/)

## License

MIT License 

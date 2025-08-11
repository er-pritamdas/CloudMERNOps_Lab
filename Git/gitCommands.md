## 🛠️ Configuration

| Command                                              | Description                             |
| ---------------------------------------------------- | --------------------------------------- |
| `git config --global user.name "Your Name"`        | Sets the global Git username.           |
| `git config --global user.email "you@example.com"` | Sets the global Git email.              |
| `git config --list`                                | Lists all the Git configuration values. |
| `git config --global --unset code.editor`          | Unsets the globally defined editor.     |

---

## 🧱 Repository Setup & Status

| Command        | Description                                          |
| -------------- | ---------------------------------------------------- |
| `git init`   | Initializes a new Git repository.                    |
| `git status` | Shows the working directory and staging area status. |

---

## 📥 Staging & Unstaging

| Command                            | Description                                  |
| ---------------------------------- | -------------------------------------------- |
| `git add <file>`                 | Stages a specific file.                      |
| `git add --all`or `git add -A` | Stages all changes (new, modified, deleted). |
| `git restore --staged <file>`    | Unstages a file from the staging area.       |

---

## ✅ Commit

| Command                        | Description                                    |
| ------------------------------ | ---------------------------------------------- |
| `git commit -m "message"`    | Commits staged changes with a message.         |
| `git commit -a -m "message"` | Commits all tracked changes (without staging). |
| `git log`                    | Shows the commit history.                      |

---

## 🔖 Tagging

| Command                                      | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| `git tag -a v1.0 -m "Version 1.0 release"` | Creates an annotated tag with a message.                 |
| `git tag v1.1 1a2b3c4d`                    | Creates a lightweight tag pointing to a specific commit. |
| `git tag`                                  | Lists all tags.                                          |
| `git show v1.0`                            | Shows details about a specific tag.                      |
| `git push origin v1.0`                     | Pushes a specific tag to the remote.                     |
| `git push --tags`                          | Pushes all local tags to the remote.                     |
| `git tag -d v1.0`                          | Deletes a local tag.                                     |
| `git tag -f v1.0 <new-commit-hash>`        | Force-updates an existing tag to a new commit.           |
| `git push --force origin v1.0`             | Force-pushes the updated tag to the remote.              |

---

## 📦 Stashing

| Command                              | Description                                                   |
| ------------------------------------ | ------------------------------------------------------------- |
| `git stash`                        | Stashes your local changes to a stack (clean working dir).    |
| `git stash save "message"`         | Stashes changes with a custom message (older syntax).         |
| `git stash push -m "message"`      | Stashes with a message (modern syntax).                       |
| `git stash list`                   | Shows all stashes saved.                                      |
| `git stash show`                   | Shows the changes of the most recent stash.                   |
| `git stash show -p`                | Shows a detailed diff of the most recent stash.               |
| `git stash pop`                    | Applies the most recent stash and removes it from stash list. |
| `git stash apply`                  | Applies the most recent stash without deleting it.            |
| `git stash apply stash@{1}`        | Applies a specific stash by index.                            |
| `git stash drop stash@{0}`         | Deletes a specific stash entry.                               |
| `git stash clear`                  | Deletes all stashes.                                          |
| `git stash branch new-branch-name` | Creates a new branch and applies the latest stash to it.      |

---


## 📜 Viewing History & Changes

| Command               | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| `git log`           | Shows full commit history.                                    |
| `git log --oneline` | Shows each commit on one line (short hash + message).         |
| `git show <commit>` | Shows details of a specific commit.                           |
| `git diff`          | Shows differences between working directory and staging area. |
| `git diff --staged` | Shows differences between staging area and last commit.       |

---

## 🆘 Help & Documentation

| Command                  | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `git help <command>`   | Opens the manual for a specific Git command.    |
| `git <command> --help` | Shows the same help as above.                   |
| `git <command> -h`     | Shows a brief summary of options for a command. |
| `git help --all`       | Lists all available Git commands.               |
| `git help -g`          | Lists Git concept guides and tutorials.         |

---

## 🌿 Branching

| Command                             | Description                                                      |
| ----------------------------------- | ---------------------------------------------------------------- |
| `git branch`                      | Lists all local branches.                                        |
| `git branch -a`                   | Lists all local and remote branches.                             |
| `git branch <branch-name>`        | Creates a new branch.                                            |
| `git switch <branch-name>`        | Switches to another branch (recommended).                        |
| `git checkout <branch-name>`      | Legacy way to switch branches (still used).                      |
| `git checkout -b <branch-name>`   | Creates and switches to a new branch.                            |
| `git switch -c <branch-name>`     | Equivalent to the above using `switch`.                        |
| `git branch -d <branch-name>`     | Deletes a local branch (only if merged).                         |
| `git branch -D <branch-name>`     | Force-deletes a local branch.                                    |
| `git merge <branch-name>`         | Merges the given branch into the current branch.                 |
| `git merge --no-ff <branch-name>` | Merges with a commit even if fast-forward is possible.           |
| `git rebase <branch-name>`        | Applies commits from the current branch on top of the given one. |
| `git branch --merged`             | Shows branches that have been merged into the current one.       |
| `git branch --no-merged`          | Shows branches that have not been merged.                        |

---


## 🔀 Merging Branches

| Command                     | Description                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| `git merge <branch-name>` | Merges the given branch into the current branch.                     |
| `git merge --no-ff`       | Forces creation of a merge commit, even if fast-forward is possible. |
| `git merge --squash`      | Combines all changes into a single commit, but doesn’t auto-commit. |
| `git merge --abort`       | Aborts an in-progress merge and resets to pre-merge state.           |

---

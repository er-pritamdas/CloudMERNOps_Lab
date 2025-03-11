# History of Linux

Linux has a rich history that traces back to the early days of computing. It evolved from the UNIX operating system, with key contributions from researchers and developers who believed in open-source software and collaborative development.

## Early Development of Operating Systems

| Year | Event                                                                               |
| ---- | ----------------------------------------------------------------------------------- |
| 1964 | Bell Labs in New Jersey started a project to develop an OS.                         |
| 1969 | The project was withdrawn, but Dennis Ritchie and Ken Thompson restarted it.        |
| 1970 | The project was renamed **UNICS** (Uniplexed Information and Computing Service).    |
| 1975 | **UNIX V6** was released, leading to the development of various UNIX-based systems. |

### Evolution from UNIX

As UNIX gained popularity, multiple UNIX-based operating systems were developed:

- **IBM AIX**
- **Sun Solaris**
- **Mac OS**
- **UP-US**
- **Linux**

## Birth of Linux

| Year      | Event                                                                                  |
| --------- | -------------------------------------------------------------------------------------- |
| 1991      | **Linus Torvalds**, a Finnish student of Andrew Tanenbaum, started developing Linux.   |
|           | Andrew Tanenbaum had created **MINIX**, a teaching OS for students.                    |
|           | Linus Torvalds built **Linux**, a free and open-source OS kernel.                      |
| 1991-1995 | The **Free Software Movement** (GNU Movement) led by Richard Stallman gained traction. |
|           | GNU + Linux Kernel = **Complete Operating System**                                     |

### Key Contributions to Linux Development

- **Richard Stallman**: Founded the Free Software Foundation (FSF) and started the GNU project.
- **Linus Torvalds**: Developed the Linux Kernel and made it open-source under the GNU General Public License (GPL).
- **GNU Project**: Provided essential tools and utilities needed to create a fully functional OS with the Linux kernel.

## Growth and Popularity of Linux

Over the years, Linux gained significant traction in both personal and enterprise computing:

- Used in **servers, supercomputers, embedded systems, and cloud computing**.
- Powers **Android**, the most widely used mobile OS.
- Dominates cloud computing platforms, containerization, and DevOps environments.
- Used in IoT (Internet of Things) and embedded systems due to its lightweight and customizable nature.

## Popular Linux Distributions

Many companies and communities have built their own Linux-based operating systems (distros):

- **Enterprise Distributions:**
  - **RHEL (Red Hat Enterprise Linux)**
  - **SUSE Linux Enterprise Server (SLES)**
  - **Oracle Linux**
- **Community-driven Distributions:**
  - **Fedora** (Cutting-edge, sponsored by Red Hat)
  - **Debian** (Stable, widely used for servers)
  - **Arch Linux** (Rolling release, user-centric)
- **Other Popular Distros:**
  - **Ubuntu** (Most used, means "Team Work")
  - **CentOS** (Community Enterprise OS, now replaced by CentOS Stream)
  - **Amazon Linux** (Optimized for AWS cloud services)
  - **Kali Linux** (Security-focused distro for penetration testing)
  - **Alpine Linux** (Lightweight, used in containers and embedded systems)

## Key Facts About Linux

- **Linux is not an Operating System; it is a Kernel.**
- **Linux is not a UNIX derivative; it was written from scratch.**
- **A Linux distribution (distro) consists of the Linux kernel and a collection of software.**
- **Linux is highly customizable, making it suitable for a wide range of applications.**
- **It is known for its security, stability, and performance.**
- **Linux is widely used in cloud computing, DevOps, and modern infrastructure.**

## Conclusion

Linux has come a long way from its humble beginnings in 1991 to becoming a dominant force in modern computing. It powers everything from web servers and cloud platforms to mobile devices and IoT applications. Its open-source nature and strong community support continue to drive innovation and adoption worldwide.

# File System Hierarchy in Linux

Linux follows a well-defined directory structure known as the **Filesystem Hierarchy Standard (FHS)**. This structure organizes files and directories systematically for efficient management.

## Linux Directory Structure

| Directory | Purpose                                                       |
| --------- | ------------------------------------------------------------- |
| `/`       | Root directory, the starting point of the filesystem.         |
| `/bin`    | Essential binary executables (e.g., `ls`, `cp`, `mv`).        |
| `/boot`   | Contains bootloader files and kernel images.                  |
| `/dev`    | Device files representing hardware components.                |
| `/etc`    | System-wide configuration files.                              |
| `/home`   | User home directories.                                        |
| `/lib`    | Shared libraries required for binaries in `/bin` and `/sbin`. |
| `/media`  | Mount point for removable media (CDs, USB drives).            |
| `/mnt`    | Temporary mount point for filesystems.                        |
| `/opt`    | Optional software packages.                                   |
| `/proc`   | Virtual filesystem providing process and system info.         |
| `/root`   | Home directory for the root user.                             |
| `/run`    | Temporary runtime data for processes.                         |
| `/sbin`   | System binaries used by administrators.                       |
| `/srv`    | Data for services (e.g., web servers, FTP servers).           |
| `/sys`    | Virtual filesystem for system information.                    |
| `/tmp`    | Temporary files (cleared on reboot).                          |
| `/usr`    | Secondary hierarchy for user programs and libraries.          |
| `/var`    | Variable data files (logs, caches, spool data).               |

### Importance of the File System Hierarchy

- Ensures consistency across different Linux distributions.
- Helps administrators and users locate files quickly.
- Provides a structured way to manage system and user data.
- Simplifies maintenance, backups, and system recovery.

# Linux Commands

## Create a File

| Method            | Command Example                     | Description                                                  |
| ----------------- | ----------------------------------- | ------------------------------------------------------------ |
| `touch`           | `touch file.txt`                    | Creates an empty file or updates the timestamp if it exists. |
| `echo`            | `echo "Hello" > file.txt`           | Creates a file with content or overwrites an existing file.  |
| `printf`          | `printf "Hello\n" > file.txt`       | Similar to `echo`, but more formatting control.              |
| `cat`             | `cat > file.txt` then Ctrl+D        | Creates a file and allows user input.                        |
| `nano`            | `nano file.txt`                     | Opens the `nano` editor to create/edit a file.               |
| `vi`/`vim`        | `vi file.txt` or `vim file.txt`     | Opens `vi` or `vim` editor for file creation/editing.        |
| `> (redirection)` | `> file.txt`                        | Creates an empty file (or clears if it exists).              |
| `dd`              | `dd if=/dev/null of=file.txt`       | Creates an empty file with `dd` command.                     |
| `install`         | `install -m 644 /dev/null file.txt` | Creates a file with specific permissions.                    |
| `cp`              | `cp /dev/null file.txt`             | Copies an empty file to create a new one.                    |
| `truncate`        | `truncate -s 0 file.txt`            | Creates or empties a file to 0 bytes.                        |

## Edit a File

| Method               | Command Example                                                | Description                                      |
| -------------------- | -------------------------------------------------------------- | ------------------------------------------------ |
| `nano`               | `nano file.txt`                                                | Opens `nano` editor for editing.                 |
| `vi`/`vim`           | `vi file.txt` or `vim file.txt`                                | Opens `vi` or `vim` editor for advanced editing. |
| `echo`               | `echo "New Content" > file.txt`                                | Overwrites file content.                         |
| `echo (append)`      | `echo "Extra Content" >> file.txt`                             | Appends content to a file.                       |
| `printf`             | `printf "Text\n" >> file.txt`                                  | Similar to `echo`, but with formatting control.  |
| `cat`                | `cat >> file.txt` then Ctrl+D                                  | Allows appending content interactively.          |
| `sed`                | `sed -i 's/old/new/g' file.txt`                                | Replaces text in a file using `sed`.             |
| `awk`                | `awk '{sub(/old/, "new")}1' file.txt > tmp && mv tmp file.txt` | Edits file content using `awk`.                  |
| `tee`                | `echo "New Line"                                               | tee -a file.txt`                                 |
| `truncate`           | `truncate -s 0 file.txt`                                       | Empties a file without deleting it.              |
| `dd`                 | `echo "New"                                                    | dd of=file.txt seek=1 bs=0`                      |
| `ex`                 | `ex -sc '1s/old/new/g                                          | x' file.txt`                                     |
| `sed (delete lines)` | `sed -i '3d' file.txt`                                         | Deletes a specific line in a file.               |

## create a Folder

| Method     | Command Example                   | Description                                      |
| ---------- | --------------------------------- | ------------------------------------------------ |
| `mkdir`    | `mkdir myfolder`                  | Creates a new directory.                         |
| `mkdir -p` | `mkdir -p parent/child`           | Creates nested directories without errors.       |
| `install`  | `install -d myfolder`             | Creates a directory with specific permissions.   |
| `cp`       | `cp -r existing_dir new_dir`      | Copies an existing directory to a new one.       |
| `rsync`    | `rsync -a existing_dir/ new_dir/` | Copies a directory while preserving permissions. |
| `mv`       | `mv old_folder new_folder`        | Renames a directory.                             |

## Delete Directory

| Method   | Command Example                                    | Description                                         |
| -------- | -------------------------------------------------- | --------------------------------------------------- |
| `rmdir`  | `rmdir myfolder`                                   | Deletes an **empty** directory.                     |
| `rm -r`  | `rm -r myfolder`                                   | Deletes a directory and its contents recursively.   |
| `rm -rf` | `rm -rf myfolder`                                  | **Force deletes** a directory without confirmation. |
| `find`   | `find . -type d -name "myfolder" -exec rm -r {} +` | Finds and deletes a directory by name.              |
| `unlink` | `unlink myfolder`                                  | Only works for **empty** directories (rarely used). |

## Basic Commands

| Category               | Command Example                            | Description                                          |
| ---------------------- | ------------------------------------------ | ---------------------------------------------------- |
| **Navigation**         | `pwd`                                      | Prints the current working directory.                |
|                        | `ls`                                       | Lists files and directories in the current location. |
|                        | `ls -la`                                   | Lists all files (including hidden) with details.     |
|                        | `cd folder`                                | Changes the directory to `folder`.                   |
|                        | `cd ..`                                    | Moves one level up in the directory structure.       |
| **File Handling**      | `cp file1 file2`                           | Copies `file1` to `file2`.                           |
|                        | `mv file1 file2`                           | Moves or renames a file.                             |
| **Permissions**        | `chmod 755 file`                           | Changes file permissions.                            |
|                        | `chown user:group file`                    | Changes file ownership.                              |
| **Process Management** | `ps aux`                                   | Shows running processes.                             |
|                        | `top` or `htop`                            | Displays real-time system processes.                 |
|                        | `kill PID`                                 | Terminates a process by PID.                         |
|                        | `pkill process_name`                       | Kills a process by name.                             |
| **Networking**         | `ping google.com`                          | Tests network connectivity.                          |
|                        | `curl -I http://example.com`               | Fetches HTTP headers from a URL.                     |
|                        | `wget url`                                 | Downloads a file from a URL.                         |
| **System Info**        | `uname -a`                                 | Displays system information.                         |
|                        | `df -h`                                    | Shows disk space usage.                              |
|                        | `free -m`                                  | Displays memory usage.                               |
|                        | `uptime`                                   | Shows system uptime.                                 |
| **User Management**    | `whoami`                                   | Shows the current logged-in user.                    |
|                        | `who`                                      | Lists logged-in users.                               |
|                        | `id`                                       | Displays user ID and group ID.                       |
|                        | `passwd`                                   | Changes the user password.                           |
| **Package Management** | `apt update && apt upgrade` (Debian-based) | Updates and upgrades installed packages.             |
|                        | `yum update` (RHEL-based)                  | Updates packages on RHEL/CentOS.                     |
|                        | `dnf install package`                      | Installs a package on Fedora/RHEL8+.                 |
|                        | `pacman -S package` (Arch)                 | Installs a package on Arch Linux.                    |
| **Compression**        | `tar -cvf archive.tar folder/`             | Creates a `.tar` archive.                            |
|                        | `tar -xvf archive.tar`                     | Extracts a `.tar` archive.                           |
|                        | `zip -r archive.zip folder/`               | Creates a `.zip` archive.                            |
|                        | `unzip archive.zip`                        | Extracts a `.zip` file.                              |
| **Searching**          | `grep "text" file.txt`                     | Searches for "text" in `file.txt`.                   |
|                        | `find /path -name "file.txt"`              | Finds a file by name.                                |
|                        | `locate file.txt`                          | Quickly finds files using an index.                  |





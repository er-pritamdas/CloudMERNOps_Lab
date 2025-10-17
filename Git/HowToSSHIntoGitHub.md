When you use **Git with SSH**, you’re telling Git to authenticate your pushes, pulls, and fetches using your **SSH key**, instead of username/password (HTTPS).

But note — SSH doesn’t come into play *during* a `git commit`, only when you communicate with a **remote repository** (e.g., pushing your commit to GitHub, GitLab, Bitbucket, etc.).

Here’s the full flow:

---

### 🧩 Step 1: Check if you already have an SSH key

Run:

```bash
ls -al ~/.ssh
```

You should see something like:

```text
id_rsa  id_rsa.pub
```

If not, create a new SSH key.

---

### ⚙️ Step 2: Generate a new SSH key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

If your system doesn’t support `ed25519`, use:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Press Enter for defaults (recommended).

---

### 🪄 Step 3: Add SSH key to the ssh-agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

---

### 🌐 Step 4: Add your SSH key to GitHub / GitLab / Bitbucket

Copy your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Then go to your Git provider → **Settings → SSH and GPG keys → New SSH key**, and paste it.

---

### 🔗 Step 5: Configure your Git remote to use SSH

If your repo is cloned using HTTPS, change it to SSH:

```bash
git remote -v
```

You might see:

```text
origin  https://github.com/pritamdas/project.git (fetch)
origin  https://github.com/pritamdas/project.git (push)
```

Change it to SSH:

```bash
git remote set-url origin git@github.com:pritamdas/project.git
```

Now:

```text
origin  git@github.com:pritamdas/project.git (fetch)
origin  git@github.com:pritamdas/project.git (push)
```

---

### ✅ Step 6: Use Git as usual

Local commits don’t need SSH. You just commit normally:

```bash
git add .
git commit -m "your message"
```

When pushing:

```bash
git push origin main
```

SSH will automatically be used for authentication.

---

### 🧠 Bonus Tip — Test your SSH connection

Run:

```bash
ssh -T git@github.com
```

Expected output:

```text
Hi pritamdas! You've successfully authenticated, but GitHub does not provide shell access.
```

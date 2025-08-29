# 🖥️🔐 SSH — Step by Step

---

## 1️⃣ TCP Connection

* You (Client) 📱 send a **TCP SYN** to `myserver.com:22`.
* Server 🖥️ replies with  **SYN-ACK** .
* You confirm with  **ACK** .

  ✅ Now TCP is ready. SSH starts talking.

---

## 2️⃣ Protocol Version Exchange

* Client → `SSH-2.0-OpenSSH_9.7`
* Server → `SSH-2.0-OpenSSH_9.3`

  🔎 Both say: “I speak SSH version 2.0.”

  *(This ensures compatibility before moving on.)*

---

## 3️⃣ Algorithm Negotiation (KEXINIT)

* Client sends a `KEXINIT` 📄 listing its preferences:

  * Key Exchange: `curve25519-sha256`, `ecdh-sha2-nistp256`, …
  * Host Key: `ssh-ed25519`, `rsa-sha2-512`, …
  * Ciphers: `aes128-gcm@openssh.com`, `chacha20-poly1305@openssh.com`, …
  * MACs: `hmac-sha2-256`, …
  * Compression: `none`, `zlib`
* Server replies with its `KEXINIT` 📄 too.
* They **pick the first match** in each category.

  👩‍💻 Example chosen:

  * Key Exchange → `curve25519-sha256`
  * Host Key → `ssh-ed25519`
  * Cipher → `chacha20-poly1305@openssh.com`
  * MAC → (built into cipher)
  * Compression → `none`

---

## 4️⃣ Key Exchange (KEX)

* Client and Server run  **Curve25519 Diffie–Hellman** :

  * Client sends a random **public value** 🔑.
  * Server sends its **public value** + a **digital signature** ✍️ using its  **host private key** .
* Both compute the same **shared session key** 🤝 independently.

  ⚠️ Note: the session key is never sent, only derived.

---

## 5️⃣ Signature Verification

* Client checks the server’s signature using the  **server’s public host key** .

  ✅ If valid → “Yes, this is really `myserver.com`.”

  ❌ If invalid → connection is dropped (could be an attacker).

---

## 6️⃣ NEWKEYS

* Client → `NEWKEYS` 📩
* Server → `NEWKEYS` 📩

  🔒 Both sides agree: “From now on, use the shared key + cipher.”

  ➡️ From here, everything is encrypted and protected.

---

## 7️⃣ User Authentication

* Client says: “I want to log in as user `alice` 👩‍💻.”
* Server says: “Prove it!”
* Authentication methods:
  * Password 🔑 (encrypted now)
  * Public key 🔐 (client signs data with its private key; server checks with public key in `authorized_keys`)

✅ If authentication succeeds → client is logged in.

---

## 8️⃣ Secure Channels

* Client requests a **channel** 📡:
  * Example: `session` for shell access.
* Server grants the channel.
* Now encrypted communication flows:
  * Commands, output, file transfer (SCP/SFTP), port forwarding, etc.

---

# 🔑 Summary (like TCP SYN analogy)

* **Version Exchange** → “We both speak SSH v2.”
* **KEXINIT** → “Let’s agree on the algorithms.”
* **Key Exchange + Signature** → “We both get the same secret key, and I prove I’m the real server.”
* **NEWKEYS** → “Switch on encryption now.”
* **Authentication** → “Prove you’re the right user.”
* **Channels** → “Use the secure tunnel for shell, files, etc.”


# 🖥️🔐 SSH — The Whole Story, Step by Step

## 0) 🚪 TCP: open the door (3-way handshake)

* **Name:** TCP `SYN` → `SYN-ACK` → `ACK` (to port  **22** )
* **What’s sent?** TCP control flags only.
* **Why?** Create a reliable pipe for SSH to talk over.
* **Who sees it?** 👀 Anyone on the path (plaintext).
* **Keys used?** None yet.

---

## 1) 🧭 Version exchange

* **Name:** **Protocol Version Exchange**
* **What’s sent?**
  * Client: `SSH-2.0-OpenSSH_9.7`
  * Server: `SSH-2.0-OpenSSH_9.3`
* **Why?** Agree on SSH protocol **major version** (v2) and reveal software flavor.
* **Who sees it?** 👀 Plaintext.
* **Keys used?** None.

---

## 2) 🧾 KEXINIT: algorithm menu swap

* **Name:** **KEXINIT exchange** (both sides send one)
* **What’s sent?** Each side’s **ordered lists** of supported algorithms:
  * **KEX (key exchange):** e.g., `curve25519-sha256`, `ecdh-sha2-nistp256`, `diffie-hellman-group14-sha256`
  * **Host key type:** e.g., `ssh-ed25519`, `rsa-sha2-512`
  * **Ciphers (client→server & server→client):** e.g., `chacha20-poly1305@openssh.com`, `aes128-gcm@openssh.com`
  * **MACs (integrity):** e.g., `hmac-sha2-256` (or none when cipher is AEAD)
  * **Compression:** `none`, `zlib`
* **How chosen?** Take the **first common** item in each category, using the **client’s order** as preference.
* **Why?** Decide the exact cryptographic recipe to use.
* **Who sees it?** 👀 Plaintext.
* **Keys used?** None.

🧪 **Example chosen set for our session:**

* KEX: `curve25519-sha256`
* Host key: `ssh-ed25519`
* Cipher (both directions): `chacha20-poly1305@openssh.com` (AEAD → integrity built in)
* Compression: `none`

---

## 3) 🔄 Key exchange (KEX): build a shared secret

* **Name (Curve25519 path):**
  * Client → Server: `SSH_MSG_KEX_ECDH_INIT` (contains  **Q_C** , client’s ephemeral public value)
  * Server → Client: `SSH_MSG_KEX_ECDH_REPLY` (contains  **K_S** ,  **Q_S** ,  **Sig_server** )
* **What’s sent?**
  * **Q_C** : client’s ephemeral public key
  * **K_S** : server’s **host public key** (its long-term identity key)
  * **Q_S** : server’s ephemeral public key
  * **Sig_server** : server’s **digital signature** over the handshake hash **H**
* **What’s computed (both sides, privately):**
  * **Shared secret `K`** from (client private × server public) = (server private × client public)
  * **Exchange hash `H`** = hash of:

    `V_C || V_S || I_C || I_S || K_S || Q_C || Q_S || K`

    where:

    * `V_C`, `V_S` = version strings
    * `I_C`, `I_S` = the two KEXINIT packets
    * `K_S` = server host public key
    * `Q_C`, `Q_S` = ephemeral publics
    * `K` = shared secret
* **Why?**
  * `K` gives us a **fresh session secret** (not sent on the wire)
  * `Sig_server = Sign(H, host_private_key)` proves this key exchange is with the **real server**
* **Who sees it?** 👀 The messages are plaintext, but  **`K` is never sent** , only derived locally.
* **Keys used?**
  * **Ephemeral** KEX keys (just for this session)
  * **Server host private key** (to sign), **server host public key** (to verify)

⚠️ **Why sign?** Without `Sig_server`, a man-in-the-middle could swap `Q_S` and trick you into sharing a secret with them instead of the real server.

---

## 4) ✍️ Verify the server

* **Name:** **Server authentication (host key verification)**
* **Client action:**
  * Recomputes **H**
  * Verifies `Sig_server` with **K_S** (server host public key)
  * Checks **K_S** against `~/.ssh/known_hosts` (TOFU: Trust On First Use)
* **Why?** Be certain this is **the same server** you trust, not an impostor.
* **Who sees it?** Local checks only.
* **Keys used?** Server host **public** key.

🧠 **TOFU note:** First time you connect, you’re asked to approve the host key fingerprint. Next time, a mismatch triggers a scary warning (possible MITM).

---

## 5) 🔒 NEWKEYS: flip on encryption

* **Name:** `SSH_MSG_NEWKEYS` (both directions)
* **What’s sent?** A small “OK, switch now” control message each way.
* **Why?** Signal the exact moment both sides start using **symmetric** encryption/integrity.
* **Who sees it?** The message itself is plaintext, but immediately **after** both `NEWKEYS`, traffic is encrypted.
* **Keys derived from `K` & `H`:** Separate keys for:
  * client→server encryption
  * server→client encryption
  * (and IVs, and MAC keys if needed; with AEAD like ChaCha20-Poly1305, integrity is built in)
* **Keys used now?** The **session keys** (symmetric) derived from `K`/`H`.

🧩 **Derivation idea (simplified):**

Keys = `Hash(K || H || "A" || session_id)`, `"B"`, `"C"`, … (different labels per direction/purpose)

---

## 6) 👤 User authentication (inside the encrypted tunnel)

* **Name:** **ssh-userauth** service
* **Flow:**
  1. Client → Server: `SSH_MSG_SERVICE_REQUEST("ssh-userauth")`
  2. Server → Client: `SSH_MSG_SERVICE_ACCEPT`
  3. Client attempts a method:
     * **Public key (best):**
       * Client says: “I’m `alice`, here’s my public key type+key.”
       * Server checks if that public key exists in `~/.ssh/authorized_keys` for `alice`.
       * Client signs a **userauth blob** (includes the session ID and request fields) with  **client private key** .
       * Server verifies with  **client public key** . ✅
     * **Password (legacy):** client sends password (still encrypted by the tunnel).
* **Why?** Prove the human/user is allowed in.
* **Who sees it?** 🔐 Encrypted (we already flipped to symmetric crypto).
* **Keys used?**
  * **Client private/public key** (for publickey auth),
  * Session **symmetric** keys for confidentiality/integrity of the exchange.

---

## 7) 📡 Channels: do real work

* **Name:** **Connection/Channel phase**
* **What happens?**
  * Client opens a  **session channel** : `SSH_MSG_CHANNEL_OPEN("session")`
  * Server confirms: `SSH_MSG_CHANNEL_OPEN_CONFIRMATION`
  * Client may request:
    * `pty-req` (get a terminal)
    * `env` (set environment vars)
    * `shell` (interactive shell) **or** `exec` (run a single command)
    * `subsystem` (e.g., `sftp`)
  * Data flows as `SSH_MSG_CHANNEL_DATA` (and `EXTENDED_DATA` for stderr)
  * Flow control via window size and `CHANNEL_WINDOW_ADJUST`
* **Why?** Multiplex multiple logical “pipes” (shell, port forwarding, SFTP) over one SSH connection.
* **Who sees it?** 🔐 All encrypted with the session cipher (e.g., ChaCha20-Poly1305).
* **Keys used?** Session **symmetric** keys.

---

## 8) ♻️ Rekey (optional, periodic)

* **Name:** **Rekey / Key re-exchange**
* **What happens?** Repeat **KEX** (Steps 3–5) after N bytes/time to refresh keys.
* **Why?** Limit how much data any single key protects; maintain forward secrecy.
* **Who sees it?** Pre-rekey control messages are visible, but new keys are derived and then used, again encrypted after NEWKEYS.
* **Keys used?** New **ephemeral** KEX keys; same **host key** to sign; new **session** symmetric keys.

---

## 9) ✅ Clean shutdown

* **Name:** Channel close + TCP 4-way close
* **What happens?**
  * `SSH_MSG_CHANNEL_CLOSE` each way for each open channel
  * Optional `DISCONNECT`
  * TCP: `FIN` → `ACK` → `FIN` → `ACK`
* **Why?** Graceful resource cleanup.
* **Who sees it?** Control frames are encrypted until TCP teardown.
* **Keys used?** Session symmetric keys until connection ends.

---

# 🧠 What maps to which crypto?

| Purpose               | Crypto                                           | Keys                                                                                           |
| --------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Prove server identity | **Asymmetric signature**                   | Server**host private**key signs `H`; client verifies with**host public**key      |
| Create session secret | **Key exchange (DH/ECDH)**                 | Ephemeral KEX keys → both compute**shared `K`**                                       |
| Protect all traffic   | **Symmetric cipher**                       | Session keys derived from `K`&`H`                                                          |
| Prove user identity   | **Asymmetric signature**(publickey method) | Client**private**key signs userauth blob; server verifies with client**public**key |

---

# 🧷 Tiny glossary (one-liners)

* **Host key** 🪪: Server’s long-term identity key pair (e.g., ed25519).
* **KEX** 🔄: One-time math dance to derive a shared secret `K` (no secret sent).
* **`H` (exchange hash)** 🧩: Hash of all important handshake pieces; server signs this.
* **`NEWKEYS`** 🔒: “Switch on” symmetric encryption/integrity with derived keys.
* **AEAD** 🧰: Cipher mode (like ChaCha20-Poly1305) that encrypts **and** authenticates.
* **TOFU** 🍞: Trust On First Use host-key check (stored in `known_hosts`).

---

# 🧪 Mini storyline (everything tied together)

1. 🚪 TCP opens.
2. 🧭 They say “I’m SSH v2”.
3. 🧾 They swap menus (KEXINIT) and pick Curve25519 + Ed25519 + ChaCha20.
4. 🔄 They exchange ephemeral publics, compute `K`.
5. ✍️ Server signs `H` with its host **private** key; client verifies with saved **public** key.
6. 🔒 Both send `NEWKEYS` → from now on,  **encrypted** .
7. 👤 `alice` proves herself by signing a userauth blob with her **private** key; server checks `authorized_keys`.
8. 📡 They open a session channel and work securely.
9. ♻️ They might rekey later.
10. ✅ They close channels and TCP shuts down cleanly.

---

## Quick check (one question):

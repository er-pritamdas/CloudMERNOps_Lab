# 🔑 Symmetric Keys

---

## 1️⃣ What are Symmetric Keys?

* **One single key** 🗝️ used for  **both encryption and decryption** .
* Sender & receiver must both have the same key in advance.
* Example:
  * Key = `1234`
  * Encrypt(HELLO, 1234) → `X7A9`
  * Decrypt(X7A9, 1234) → `HELLO`

👉 Think of it like a  **house key** :

* Same key locks 🚪 (encrypts) and unlocks 🔓 (decrypts).

---

## 2️⃣ Strengths

* ⚡ Very fast (good for encrypting big data, e.g. video streams).
* 🔒 Strong security if key is large and kept secret.
* ✅ Simple to implement.

---

## 3️⃣ Weaknesses

* ❌ Key distribution problem: how do two people get the same secret key securely?
* ❌ If one person leaks the key → system is broken.
* ❌ Doesn’t provide identity (you don’t know who actually sent the message).

---

## 4️⃣ Famous Symmetric Algorithms

| Algorithm                                    | Type          | Notes                                                                 |
| -------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| **AES (Advanced Encryption Standard)** | Block cipher  | Most common today (128, 192, 256-bit keys). Used in HTTPS, SSH, WiFi. |
| **DES / 3DES**                         | Block cipher  | Old, weak, not used anymore.                                          |
| **ChaCha20**                           | Stream cipher | Modern, fast, great for mobile devices.                               |
| **RC4**                                | Stream cipher | Deprecated (weak).                                                    |

---

## 5️⃣ Block Cipher vs Stream Cipher

* **Block cipher** : Encrypts data in fixed-size chunks (e.g., 128 bits).
* Example: AES.
* **Stream cipher** : Encrypts data one bit/byte at a time (like XOR with keystream).
* Example: ChaCha20.

---

## 6️⃣ Modes of Operation (for block ciphers like AES)

Block ciphers need a “mode” to handle longer data:

* **ECB (Electronic Code Book)** → ❌ insecure, repeats leak patterns.
* **CBC (Cipher Block Chaining)** → better, uses IV (initialization vector).
* **GCM (Galois Counter Mode)** → modern, provides both encryption + integrity.

👉 In practice: **AES-GCM** is the gold standard today.

---

## 7️⃣ Where Symmetric Keys are Used

* Once a **shared key** is agreed (via asymmetric exchange), all communication is encrypted symmetrically.
* Examples:
  * HTTPS (TLS) → symmetric after handshake.
  * SSH → symmetric after key exchange.
  * WiFi (WPA2/WPA3) → symmetric (AES).
  * Disk encryption → symmetric (AES-XTS).

---

## 8️⃣ Simple Example

* Shared key = `42`
* Alice wants to send "HELLO":
  1. Encrypt("HELLO", 42) → "ZPQX9"
  2. Send "ZPQX9"
  3. Bob: Decrypt("ZPQX9", 42) → "HELLO"

If a hacker intercepts, without key `42`, they see only gibberish.

---

# 🎯 TL;DR

* One key for both encryption & decryption.
* Fast, strong, but key-sharing is the hard part.
* Used **after** asymmetric crypto sets up the secure channel.
* AES (block cipher) and ChaCha20 (stream cipher) are the most important today.

---

# 🔑 Shared Key Generation (Key Exchange)

---

## 1️⃣ What is a Shared Key?

* A **secret key** that **both sides** (client & server) end up with.
* Used for **symmetric encryption** afterward.
* **Nobody else** (not even someone watching the exchange) should be able to calculate it.

👉 Without a safe way to generate this shared key, symmetric encryption wouldn’t be possible across the internet.

---

## 2️⃣ Two Main Ways to Generate a Shared Key

### A) **Key Transport (RSA style)**

* One side **creates the key** → encrypts it with the other’s **public key** → sends it.
* Other side decrypts with its  **private key** .
* Example: Early TLS/SSL used this.
* ❌ Less secure now (vulnerable to attacks like RSA key factoring).

---

### B) **Key Agreement (Diffie–Hellman style)**

* Neither side sends the key directly.
* Both compute it independently using a math trick.
* Anyone watching only sees “public” info, not the secret parts.
* This is what SSH, modern TLS, Signal, etc. use.
* ✅ Provides **Perfect Forward Secrecy** (new key each session).

---

## 3️⃣ Algorithms for Key Exchange

| Category                                              | Algorithms                  | Notes                                                                                         |
| ----------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------- |
| **Classic Diffie–Hellman (DH)**                | DH over integers (mod p)    | Original method, still used but less efficient.                                               |
| **Elliptic Curve Diffie–Hellman (ECDH)**       | Curve25519, secp256r1, etc. | Faster, stronger with smaller keys. Widely used today.                                        |
| **Ephemeral versions**(perfect forward secrecy) | DHE, ECDHE                  | Each session uses new temporary key pair → past sessions safe even if private key is stolen. |
| **Key Transport (old)**                         | RSA key exchange            | Client generates shared key → encrypts with server’s public key. Rare today.                |
| **Post-Quantum (future)**                       | Kyber, NTRU                 | New algorithms being tested for quantum-safe exchanges.                                       |

---

## 4️⃣ Simple Example — Diffie–Hellman

Let’s pretend with  **tiny numbers** :

1. Publicly agreed numbers:
   * Base = `5`, Prime = `23` (everyone knows this).
2. Alice chooses secret `6`, computes:
   * `5^6 mod 23 = 8` → sends `8` to Bob.
3. Bob chooses secret `15`, computes:
   * `5^15 mod 23 = 2` → sends `2` to Alice.
4. Now:
   * Alice does: `2^6 mod 23 = 13`
   * Bob does: `8^15 mod 23 = 13`

✅ Shared secret = `13`.

👉 Hacker only saw `5`, `23`, `8`, `2` but cannot compute `13` without knowing Alice’s or Bob’s private number.

---

## 5️⃣ Why is this Secure?

* The math problem (discrete logarithm for DH, elliptic curve discrete log for ECDH) is  **super hard** .
* Even with huge computing power, solving it takes longer than the age of the universe.

---

## 6️⃣ Real-World Usage

* **TLS (HTTPS)** → uses ECDHE (e.g., ECDHE-RSA, ECDHE-ECDSA).
* **SSH** → supports DH, ECDH, Curve25519.
* **VPNs (IPSec, WireGuard)** → use ECDH / Curve25519.
* **Messaging apps (Signal, WhatsApp)** → use ECDH for session keys.

---

# 🎯 TL;DR

* Shared key = the symmetric key both sides need.
* Two approaches:
  * RSA transport (old) = send key encrypted.
  * DH/ECDH (modern) = derive key without sending it.
* Algorithms: DH, DHE, ECDH, ECDHE, Curve25519, RSA (old), Post-Quantum (future).

---

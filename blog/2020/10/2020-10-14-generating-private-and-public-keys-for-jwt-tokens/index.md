---
title: "Generating private and public keys for JWT tokens"
date: "2020-10-14"
categories: 
  - "linux"
---

```bash
openssl genrsa -out prod.publicKey.pem
openssl pkcs8 -topk8 -inform PEM -in prod.publicKey.pem -out prod.privateKey.pem -nocrypt
openssl rsa -in prod.publicKey.pem -pubout -outform PEM -out prod.publicKey.pem
```

---
title: "Solving ssh prompting for password even when using RSA pub key"
date: "2022-06-14"
categories: 
  - "arch-linux"
  - "linux"
---

Insert into your ~/.ssh/config (client side)

```config
Host *
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_rsa
  PubkeyAcceptedAlgorithms=+ssh-rsa
```

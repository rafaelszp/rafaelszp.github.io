---
title: "Bypassing AUR package installation when PGP signatures verification fails"
date: "2019-07-29"
categories: 
  - "arch-linux"
---

When I was installing PGADMIN3 in my Manjaro/Arch linux distro I got this error output

```bash
==> Verifying source file signatures with gpg...
    pgadmin3-1.22.2.tar.gz ... FAILED (unknown public key 24ADFAAF698F1519)
==> ERROR: One or more PGP signatures could not be verified!

```

To solve this problem I just ran the following command to get my problems solved:

```bash
gpg --recv-keys 24ADFAAF698F1519     
```

Issae! That worked well.

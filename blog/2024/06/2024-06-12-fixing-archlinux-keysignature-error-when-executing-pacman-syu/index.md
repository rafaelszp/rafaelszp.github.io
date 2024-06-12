---
title: "Fixing pacman corrupted signature (PGP) when executing an update"
date: "2024-06-12"
categories: 
  - "linux"
  - "archlinux"
---
When an error like following occurs...
```
File /var/cache/pacman/pkg/rhash-1.4.4-1-x86_64.pkg.tar.zst is corrupted (invalid or corrupted package (PGP signature)).
```

Just execute the following command
```bash
sudo pacman -S archlinux-keyring
```

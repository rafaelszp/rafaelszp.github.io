---
title: "Reset pacman mirror pool"
date: "2022-03-21"
categories: 
  - "arch-linux"
---

```
sudo rm /var/lib/pacman/sync/*.sig
sudo pacman-mirrors -c all
sudo pacman -Syy
```

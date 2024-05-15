---
title: "Resizing linux /tmp  partition on the fly"
date: "2019-05-30"
categories: 
  - "linux"
---

```bash
sudo mount -o remount,size=<NEW_SIZE> tmpfs /tmp

#example:
mount -o remount,size=10G tmpfs /tmp
```

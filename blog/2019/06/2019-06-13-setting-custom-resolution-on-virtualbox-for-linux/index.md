---
title: "Setting Custom resolution on Virtualbox for linux"
date: "2019-06-13"
categories: 
  - "linux"
tags: 
  - "virtualbox"
---

```bash
export VM_NAME="MY_VM_NAME"
export VM_RES="1366x768x32"
export VM_W=1366
export VM_H=768
VBoxManage setextradata global GUI/MaxGuestResolution any
VBoxManage setextradata "$VM_NAME" "CustomVideoMode1" "$VM_RES"
VBoxManage controlvm "$VM NAME" setvideomodehint $VM_W $VM_H 32
```

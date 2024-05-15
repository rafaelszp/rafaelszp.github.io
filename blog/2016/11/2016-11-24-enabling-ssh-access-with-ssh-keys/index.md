---
title: "Enabling SSH access with SSH KEYS"
date: "2016-11-24"
categories: 
  - "linux"
---

## Info

This approach is useful when you don't want to send your login/passwd everytime you need to acess a remote host.

## On the client host

Type:

```
    ssh-keygen -t rsa -f [KEY_PATH]/id_rsa
```

## Send key to your server

```
    cd
    ssh-copy-id user@123.45.56.78
```

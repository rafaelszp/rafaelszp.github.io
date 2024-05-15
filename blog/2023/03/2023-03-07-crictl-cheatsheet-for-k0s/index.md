---
title: "crictl cheatsheet for k0s"
date: "2023-03-07"
categories: 
  - "kubernetes"
---

`/etc/crictl.yaml` config file:

```yaml
runtime-endpoint: unix:///run/k0s/containerd.sock
image-endpoint: unix:///run/k0s/containerd.sock
timeout: 10
debug: false
```

#### Useful commands

```shell
#Pruning images
crictl rmi --prune

#listing pods by namespace 'mynamespace'
crictl  pods --namespace mynamespace


#listing containers by label
crictl ps --label=mylabel=labelvalue

#Execute a command in a running container with hash 1f73f2d81bf98
crictl exec -i -t 1f73f2d81bf98 ls
```

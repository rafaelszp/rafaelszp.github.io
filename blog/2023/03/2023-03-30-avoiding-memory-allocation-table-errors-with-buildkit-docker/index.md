---
title: "Avoiding memory allocation table errors with Buildkit (docker)"
date: "2023-03-30"
categories: 
  - "docker"
  - "linux"
---

```shell
#example
docker build -t "backend_$(basename $PWD)_$(date +%s)" . -f devspace/backend/Dockerfile -m 3g --ulimit nofile=128888:128888
```

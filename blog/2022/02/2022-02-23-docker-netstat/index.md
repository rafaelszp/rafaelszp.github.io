---
title: "Docker netstat"
date: "2022-02-23"
categories: 
  - "docker"
  - "linux"
---

```bash
PID=`docker inspect -f '{{.State.Pid}}' <CONTAINER SHA|ID>`

nsenter -t $PID -n netstat -plant
```

inline:

```
nsenter -t $(docker inspect -f '{{.State.Pid}}' <CONTAINER SHA|ID>) -n netstat -plant
```

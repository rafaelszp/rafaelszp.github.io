---
title: "Docker basics"
date: "2016-11-22"
categories: 
  - "docker"
---

## Run Docker image

```
Syntax: docker run  
```

Ex.: docker run -it jboss/wildfly

Where.: \* -i = interactive mode \* -t = pseudo tty redirected to current tty

## List Running docker instances

```
docker ps
```

## List all docker instances

```
docker ps -a
```

## Access docker shell

```
docker exec -ti --user user_id bash
```

Ex.:

```
docker exec -ti --user root 43c bash 
```

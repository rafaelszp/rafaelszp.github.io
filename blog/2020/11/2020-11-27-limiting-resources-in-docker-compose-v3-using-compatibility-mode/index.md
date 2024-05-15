---
title: "Limiting resources in docker-compose v3 using compatibility mode"
date: "2020-11-27"
categories: 
  - "docker"
  - "linux"
---

For example:

```yaml
version: '3.2'
services:
  my-nginx:
    image: nginx:stable-alpine
    ports:
      - "8000:80"
    deploy:
      resources:
        limits:
          cpus: '0.1'
          memory: 50M 
```

Then run it with the following:

```bash
docker-compose -f nginx-limited.yml --compatibility up
```

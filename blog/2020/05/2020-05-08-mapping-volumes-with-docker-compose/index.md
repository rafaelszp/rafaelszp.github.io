---
title: "Mapping volumes with docker compose"
date: "2020-05-08"
categories: 
  - "docker"
  - "linux"
---

```yaml
volumes:
  log_folder:
    driver: local
    driver_opts:
      type: none
      device: /tmp/log_dev
      o: bind,size=300m
```

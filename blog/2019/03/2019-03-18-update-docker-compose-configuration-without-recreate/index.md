---
title: "Update docker compose configuration with restart and recreate"
date: "2019-03-18"
categories: 
  - "docker"
---

Just run this one-liner code:

```
docker-compose up -d --no-deps --build <service_name>
```

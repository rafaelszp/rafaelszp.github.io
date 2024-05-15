---
title: "Enabling SSL on NGINX"
date: "2016-11-24"
categories: 
  - "linux"
  - "nginx"
---

**Generating self signed cert**

```
openssl req -x509 -nodes -days 365000 -newkey rsa:2048 -keyout testes.key -out testes.crt

```

**Edit config file**

```
       server{
            listen 443 ssl;
            ssl_certificate /etc/nginx/ssl/testes.crt;
            ssl_certificate_key /etc/nginx/ssl/testes.key;
        }

```

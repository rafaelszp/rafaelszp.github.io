---
title: "Generating a self signed certificate with openssl"
date: "2021-02-25"
categories: 
  - "linux"
---

```bash
openssl req -x509 -nodes -days 36500 -newkey rsa:4096 -keyout private.key -out cert.crt

```

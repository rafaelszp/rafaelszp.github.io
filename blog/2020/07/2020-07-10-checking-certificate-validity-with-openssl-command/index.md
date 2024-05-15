---
title: "Checking certificate validity with openssl command"
date: "2020-07-10"
categories: 
  - "linux"
---

```bash
openssl s_client -showcerts -servername <domain> -connect <domain>:443 </dev/null 
```

Example:

```
openssl s_client -showcerts -servername google.com -connect google.com:443 </dev/null 
```

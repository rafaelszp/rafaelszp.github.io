---
title: "Using tcpdump to track packages on specific port and interface"
date: "2016-11-24"
categories: 
  - "linux"
---

Run the following command:

```
    tcpdump -n -S -s 0 -A 'tcp dst port 8080' -i ens32 | grep -B3  -A15 "POST /jasperserver"
```

This will track last 15 lines of traffic on 8080 port using ens32 interface with the sentence "POST /jasperserver".

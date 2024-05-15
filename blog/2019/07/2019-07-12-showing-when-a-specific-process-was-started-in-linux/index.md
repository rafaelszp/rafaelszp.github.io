---
title: "Showing when a specific process was started in Linux"
date: "2019-07-12"
categories: 
  - "javaee"
  - "linux"
---

To see an uptime of an specific process along with the timestamp it was started execute the following command:

```bash
ps -eo pid,comm,lstart,etime,args |grep java
```

In this example I've filtered all running java processes, but you can filter any process you want to.

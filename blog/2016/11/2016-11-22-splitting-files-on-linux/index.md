---
title: "Splitting files on Linux"
date: "2016-11-22"
categories: 
  - "docker"
  - "linux"
---

Use the split command, like following:

```

 split --bytes=5m catalina.out catalina.out. -d


```

In this example, the catalina.out file wil be split in small pieces of 5mb

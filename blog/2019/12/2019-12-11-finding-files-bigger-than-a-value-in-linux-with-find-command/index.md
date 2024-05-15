---
title: "Finding files bigger than a value in Linux with find command"
date: "2019-12-11"
categories: 
  - "linux"
---

Example: You want to find files bigger than 100Mb in your current directory, so just type in shell:

```bash
find . -type f -size +100M -exec ls -lh {} \; 
```

> reference: https://www.baeldung.com/linux/monitor-disk-usage

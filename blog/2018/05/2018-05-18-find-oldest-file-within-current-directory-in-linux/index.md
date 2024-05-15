---
title: "Find oldest file within current directory in Linux"
date: "2018-05-18"
categories: 
  - "linux"
---

```
find -type f -printf '%T+ %p\n' | sort | head -n 1

```

Reference: [https://superuser.com/questions/552600/how-can-i-find-the-oldest-file-in-a-directory-tree](https://superuser.com/questions/552600/how-can-i-find-the-oldest-file-in-a-directory-tree)

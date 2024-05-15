---
title: "Listing Windows processes with command line arguments"
date: "2021-08-23"
---

```shell
WMIC path win32_process get Caption,Processid,Commandline
```

If using powershell you can use with `|grep` like this example:

```shell
WMIC path win32_process get Caption,Processid,Commandline | grep googledrive
```

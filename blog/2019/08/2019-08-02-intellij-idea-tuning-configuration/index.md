---
title: "IntelliJ IDEA tuning configuration"
date: "2019-08-02"
categories: 
  - "javaee"
---

In my workstation I use an i5(7thGen) with 16GB RAM. So I tuned my idea.vmoptions in order to get better IntelliJ IDEA performance.

That is:

```
-Xms881m
-Xmx2048m
-XX:ReservedCodeCacheSize=512m
-XX:+PerfDisableSharedMem
-XX:+UseG1GC
-XX:MaxGCPauseMillis=100
```

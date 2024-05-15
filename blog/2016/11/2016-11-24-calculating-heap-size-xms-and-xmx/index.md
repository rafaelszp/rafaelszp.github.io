---
title: "Calculating Heap Size  - Xms and Xmx"
date: "2016-11-24"
categories: 
  - "javaee"
---

## Xmx

_Formula_: 1.43x Maximum heap size used by your application. _Example_: If your application allocated 4000Mb(max) of heap. So

```
1.43 x 4000 = 5720
```

So your Xmx flag should be: -Xmx=5720

## Xms

_Formula_: 0.40x Maximum head available(Xmx) _Example_: if your Xmx=5720,

```
0.40 x 5720 = 2288
```

So your Xms flag should be: -Xms=2288

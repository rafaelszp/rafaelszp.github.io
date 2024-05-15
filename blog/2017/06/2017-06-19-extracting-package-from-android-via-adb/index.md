---
title: "Extracting package from Android via adb"
date: "2017-06-19"
categories: 
  - "android"
---

First of all, list packages

```
adb shell pm list packages |grep appname

```

Then find out where it is placed the required apk

```
adb shell pm path the.package.name

```

Finally pull the desired apk

```
adb pull /data/app/path-to-apk/apk-name.apk ~/tmp/

```

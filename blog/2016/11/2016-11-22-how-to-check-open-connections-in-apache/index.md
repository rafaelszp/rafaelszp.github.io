---
title: "How to check open connections in apache"
date: "2016-11-22"
categories: 
  - "apache-httpd"
---

## Checking currently established connections

```
    netstat -na | grep 'ESTA' | wc -l 
    #or
    netstat -an | grep :80 | grep -i EST | wc -l
```

## Checking currently TIME\_WAIT connections

```
    netstat -nat | grep TIME_WAIT | wc -l
```

## Checking total httpd processes

```
    ps -aux | grep httpd | wc -l
```

## Number of IP connections and IPs connected to port 80, use the following command.

```
    netstat -plan|grep :80|awk {'print $5'}|cut -d: -f 1|sort|uniq -c|sort -nk 1
```

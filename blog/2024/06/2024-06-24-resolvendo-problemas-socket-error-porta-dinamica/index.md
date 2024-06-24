---
title: "Fixing Windows Socket errors when starting programs like LocalSend"
date: "2024-06-24"
categories: 
  - "windows"
---

Fix:
```
net stop winnat
netsh int ipv4 set dynamic tcp start=60000 num=5535
netsh int ipv6 set dynamic tcp start=60000 num=5535
```


## References
1. https://github.com/localsend/localsend/issues/125#issuecomment-2005606625
1. https://github.com/localsend/localsend/issues/125#issuecomment-2022864028
---
title: "Fixing DNS Erros in WSL"
date: "2024-06-24"
categories: 
  - "windows"
  - "wsl"
---

Create a `%USERPROFILE%\.wslconfig` file with the following contents:

```ini
[experimental]
autoMemoryReclaim=gradual
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true
``` 


## Reference
1. https://askubuntu.com/a/1512056
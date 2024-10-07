---
title: "Preventing Browser IP Address Leakage even throught VPN"
date: "2024-10-06"
categories: 
  - "windows"
---

```bat
netsh int ipv6 isatap set state disabled
netsh int teredo set state disabled 
netsh interface ipv6 6to4 set state state=disabled undoonstop=disabled 
reg add "HKLM\System\CurrentControlSet\Services\Tcpip6\Parameters" /v "DisabledComponents" /t REG_DWORD /d "255" /f
```


### Reference:
1. https://www.reddit.com/r/techsupport/comments/p0gb1u/cant_figure_out_how_my_ip_address_is_leaking_only/?rdt=48061
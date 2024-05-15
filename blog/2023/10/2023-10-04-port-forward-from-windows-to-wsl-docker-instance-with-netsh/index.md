---
title: "Port-forward from windows to wsl docker instance with netsh"
date: "2023-10-04"
categories: 
  - "docker"
  - "windows"
  - "wsl2"
---

If you want, for example, enable port 3000 served by your docker instance, follow these steps:

1. On windows host open command prompt as administrator
2. Type the following commands:

```shell
netsh advfirewall firewall add rule name= "Open Port 3000" dir=in action=allow protocol=TCP localport=3000

netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=3000 connectaddress=localhost connectport=3000
```

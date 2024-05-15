---
title: "Find out which application is grabbing a linux shortcut"
date: "2023-01-30"
categories: 
  - "arch-linux"
  - "linux"
---

#### Step 1 - Find key modifier names

```shell
xmodmap -pm
```

#### Step 2 - Execute in a terminal

```shell
xdotool keydown "Control_L+Shift_L+P"; xdotool key "XF86LogGrabInfo"; xdotool keyup "P"; sleep 1; xdotool keyup "Shift_L"; xdotool keyup "Control_L"; tail /var/log/Xorg.0.log
```

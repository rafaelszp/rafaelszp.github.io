---
title: "Focus mode on linux with 'at' and 'dunst'"
date: "2023-03-14"
categories: 
  - "arch-linux"
  - "linux"
---

Create this shell script on you ~/.local/bin/focusmode path with the following content:

```shell
#!/bin/sh

SIGNAL=$1

if [ -z $SIGNAL ]; then
  echo "Signal must be provided: on|off"
  exit -127
fi

if [ $SIGNAL == "on" ]; then
  atrm $(atq -qf | cut -f1) 2> /dev/null || echo $status
  notify-send --urgency=low --expire-time=1000 --category=FOCUS "Focus mode on" "Focus mode Started"
  sleep 1
  killall -SIGUSR1 dunst 
  echo "killall -SIGUSR2 dunst" | at -q f now +50 minutes
else 
  killall -SIGUSR2 dunst
  atrm $(atq -qf | cut -f1) 2>/dev/null || echo $status
  notify-send --urgency=low --expire-time=3000 --category=FOCUS "Focus mode off" "Focus mode ended"
fi
atq
```

Then run `chmod +x ~/.local/bin/focusmode`

_Usage_

1. `focusmode on` - Will disable dunst for 50 minutes
2. `focusmode off` - Will enable dunst

_Requirements_

1. `at` package properly installed
2. `atd` daemon enabled and running
3. `dunst` acting as your notification daemon

_See also:_

1. https://wiki.archlinux.org/title/Dunst#Disable\_dunst\_temporarily

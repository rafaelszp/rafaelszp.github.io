---
title: "Inhibit SSH from closing /crashing when using remote desktop (vnc)"
date: "2021-11-17"
categories: 
  - "arch-linux"
---

1. Put the following script in `/usr/bin/inhibit-sleep-for-ssh` and make it executable

```shell
#!/bin/bash
sudo systemd-inhibit --what sleep --why "Do not sleep while $SSH_TTY session is active" sleep infinity &
INHIBIT_PID=$!

if [ -z "$SSH_ORIGINAL_COMMAND" ]; then
  $SHELL
else
  $SSH_ORIGINAL_COMMAND
fi
sudo kill $INHIBIT_PID
```

2. Edit the file `/etc/ssh/sshd_config` and insert the following line

```ini
ForceCommand /usr/bin/inhibit-sleep-for-ssh
```

---
title: "Fixing autoswitch profile to wrong one with pulseaudio in Arch/Manjaro"
date: "2020-12-02"
categories: 
  - "arch-linux"
  - "linux"
---

First of all, close all windows, players, pavucontrol and any application that uses audio, then change to the profile you want with the following command:

```bash
#get the profile you selected in pulseaudio volume control
pacmd list-cards | grep 'active profile'
```

Then get the card you want:

```bash
pacmd list-cards | grep 'active profile'
```

Then `sudo vim /etc/pulse/default.pa` and add the following line

```bash
# set-card-profile  
# example:
set-card-profile alsa_card.pci-0000_00_1f.3 output:analog-stereo+input:analog-stereo
```

Finally comment the problematic line:

```bash
#load-module module-switch-on-port-available
```

Save the file and restart pulse audio with

```bash
systemctl --user restart pulseaudio
```

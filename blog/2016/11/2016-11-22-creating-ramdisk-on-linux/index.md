---
title: "Creating RAMDISK on Linux"
date: "2016-11-22"
categories: 
  - "linux"
---

Follow this example:

\[gist https://gist.github.com/rafaelszp/4e4de21e464330cb5da98d81cb8df4cc\]

Where 256M is amount of RAM you wish to allocate for ramdisk. It's clear that this value should be less than amount of free memory (use "free -m"). BTW, if you specify too many MBs for ramdisk Linux will try to allocate it from RAM and then from swap so resulting performance would be very poor.

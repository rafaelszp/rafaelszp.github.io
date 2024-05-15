---
title: "Improving ArchLinux fonts"
date: "2017-12-15"
categories: 
  - "arch-linux"
---

I got this tutorial from reddit: [https://www.reddit.com/r/archlinux/comments/5r5ep8/make\_your\_arch\_fonts\_beautiful\_easily/](https://www.reddit.com/r/archlinux/comments/5r5ep8/make_your_arch_fonts_beautiful_easily/)

Install some fonts, for example:

```
sudo pacman -S ttf-dejavu ttf-liberation noto-fonts

```

Enable font presets by creating symbolic links:

```
sudo ln -s /etc/fonts/conf.avail/70-no-bitmaps.conf /etc/fonts/conf.d
sudo ln -s /etc/fonts/conf.avail/10-sub-pixel-rgb.conf /etc/fonts/conf.d
sudo ln -s /etc/fonts/conf.avail/11-lcdfilter-default.conf /etc/fonts/conf.d

```

Enable FreeType subpixel hinting mode by editing:

**_/etc/profile.d/freetype2.sh_** Uncomment the desired mode at the end:

```
export FREETYPE_PROPERTIES="truetype:interpreter-version=40"

```

Create **/etc/fonts/local.conf** with following:

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
 <match>
 <edit mode="prepend" name="family"><string>Noto Sans</string></edit>
 </match>
 <match target="pattern">
 <test qual="any" name="family"><string>serif</string></test>
 <edit name="family" mode="assign" binding="same"><string>Noto Serif</string></edit>
 </match>
 <match target="pattern">
 <test qual="any" name="family"><string>sans-serif</string></test>
 <edit name="family" mode="assign" binding="same"><string>Noto Sans</string></edit>
 </match>
 <match target="pattern">
 <test qual="any" name="family"><string>monospace</string></test>
 <edit name="family" mode="assign" binding="same"><string>Noto Mono</string></edit>
 </match>
</fontconfig>


```

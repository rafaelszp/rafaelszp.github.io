---
title: "Fixing missing EFI partition after pacman upgrade"
date: "2017-12-15"
categories: 
  - "arch-linux"
  - "linux"
---

Sometimes when we do

```
pacman -Syyu
```

The installation will crash complaining about missing EFI partition. In order to fix, follow this steps:

1. Boot with flash USB or DVD
2. Setup keys and network
    
    ```
    loadkeys br-abnt2
    #example 10.11.21.134/16
    ip addr del CURR_IP/CURR_MASK dev DEVICE 
    ip addr add NEWIP/NEW_MASK dev DEVICE
    ip route add default NEW_IP via DEVICE
    echo "nameserver 8.8.8.8" >> /etc/resolv.conf
    
    ```
    
3. Setup / and /boot (assuming / = /dev/sda2 and /boot = /dev/sda1)
    
    ```
    mount /dev/sda2 /mnt
    mount /dev/sda1 /boot
    
    ```
    
4. Setup initramfs
    
    ```
    arch-chroot /mnt
    pacman -S filesystem linux --noconfirm
    mkinitcpio -p linux
    
    ```
    
5. Setup loader.conf
    
    ```
    cat <<EOF > /boot/loader/loader.conf
    timeout 2
    default arch
    EOF
    
    ```
    
    Setup arch.conf
    
    ```
    cat <<EOF > /boot/loader/entries/arch.conf
    title Arch Linux
    linux /vmlinuz-linux
    initrd /initramfs-linux.img
    options root=/dev/sda2 rw
    EOF
    
    ```
    
6. Setup grub
    
    ```
    #if using custom install
    grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=grub --recheck
    grub-mkconfig -o /boot/grub/grub.cfg
    exit 
    
    ```
    
7. Rebooting
    
    ```
    umount /mnt/boot
    umount /mnt
    reboot
    
    ```
    

#### Bonus

In case you have formatted boot partition you need to reinstall base and base-dev like following(Outside arch-chroot):

```
pacstrap -i base base-devel

```

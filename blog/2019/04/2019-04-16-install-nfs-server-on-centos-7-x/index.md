---
title: "Install NFS server on Centos 7.x"
date: "2019-04-16"
categories: 
  - "linux"
---

## **Server**

Execute following commands

```bash
yum install nfs-utils -y
```

```bash
mkdir <DIRECTORY_TO_SHARE>
```

```bash
chmod -R 755 <DIRECTORY_TO_SHARE>
chown nfsnobody:nfsnobody  <DIRECTORY_TO_SHARE>
```

```
systemctl enable rpcbind
systemctl enable nfs-server
systemctl enable nfs-lock
systemctl enable nfs-idmap
systemctl start rpcbind
systemctl start nfs-server
systemctl start nfs-lock
systemctl start nfs-idmap
```

```
vi /etc/exports
```

Inside /etc/exports file:  

```bash
#assuming you want to whare with all IPs within range 192.168.1.1-255
<DIRECTORY_TO_SHARE> 192.168.1.*(rw,sync,no_root_squash,no_all_squash)
```

```bash
systemctl restart nfs-server
```

## Client

```
mkdir <SHARED_FOLDER_MOUNTPOINT>
yum install -y nfs-utils
```

```bash
#show list of available shared folders from server
showmount -e <SERVER_IP>
```

```
vi /etc/fstab
```

```bash
#add the following line
<SERVER_IP>:<SERVER_SHARED_FOLDER>    <SHARED_FOLDER_MOUNTPOINT>   nfs defaults 0 0

```

Alternatively you can mount your server shared folder with mount command like this:

```bash
#Caution: mountpoint will reset after client restart
mount -t nfs <SERVER_IP>:<SERVER_SHARED_FOLDER> <SHARED_FOLDER_MOUNTPOINT>
```

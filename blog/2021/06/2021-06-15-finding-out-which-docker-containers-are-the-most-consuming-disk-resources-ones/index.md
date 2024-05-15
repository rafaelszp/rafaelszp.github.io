---
title: "Finding out which docker containers are the most consuming disk resources ones"
date: "2021-06-15"
categories: 
  - "docker"
  - "linux"
---

## Step 1 - Install ncdu

```bash
# Centos
sudo yum install -y ncdu
# Arch/Manjaro
sudo pacman -S ncdu
# Debian/Ubuntu
sudo apt install ncdu
```

## Step 2 - Gererate report

Use the ncdu to generate a zipped report, by limiting to the same file system of the desired folder with a single line output feedback:

```bash
ncdu -1xo - / | gzip >root_fs_report.gz
```

## Final step- Read the report

Read the zipped report with ncdu and make the proper analysis

```
zcat root_fs_report.gz | ncdu -f-
```

## Extra mile step

If the resource high consuming is caused by logging(big log file), you will find out that a specific container log file is the real culprit. You can confirm this by executing the following command

```
# Get the log file dir of your container 
docker inspect --format='{{.LogPath}}' 
```

So you can compare the above command output the report given by ncdu. I'll want to clear the log file if it's the culprit with the following command:

```
 echo "" > $(docker inspect --format='{{.LogPath}}' )
```

References:

[https://sempreupdate.com.br/ncdu-verifica-o-uso-do-espaco-em-disco-no-linux-unix](https://sempreupdate.com.br/ncdu-verifica-o-uso-do-espaco-em-disco-no-linux-unix)

---
title: "3 useful commands to backup and restore an  MySQL database"
date: "2021-11-29"
categories: 
  - "linux"
---

```shell
#dump
mysqldump -u root -p root > /var/lib/mysql/bkp/dump.sql

#restore after creating empty database
mysql -u root -p db < /var/lib/mysql/bkp/dump.sql 

#Grant privileges to user
GRANT ALL ON db.* TO 'root@%' IDENTIFIED BY 'dbpassword';

```

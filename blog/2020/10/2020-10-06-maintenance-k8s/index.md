---
title: "maintenance k8s"
date: "2020-10-06"
categories: 
  - "kubernetes"
---

```bash

#Take a backup of the ETCD if it's hosting the ETCD. You can use the in-built command to backup the data like

ETCDCTL_API=3 etcdctl --endpoints=https://[127.0.0.1]:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt \
     --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key \
     snapshot save /tmp/snapshot-pre-boot.db

#Now drain the node using

kubectl drain <master01>

#Do the System update | patches and reboot.

#Now uncordon the node back to the cluster

kubectl uncordon <master01>


```

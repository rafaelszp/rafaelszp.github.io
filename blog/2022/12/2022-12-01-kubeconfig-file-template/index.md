---
title: "kubeconfig file template"
date: "2022-12-01"
categories: 
  - "kubernetes"
---

```yaml
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: <ca.crt>
    server: https://<ip>:<port>
  name: <cluster name>
contexts:
- context:
    cluster:  <cluster name>
    user:  <sa name>
    namespace: <default namespace>
  name:  <cluster name>
current-context:  <cluster name>
kind: Config
preferences: {}
users:
- name:  <sa user name>
  user:
    token: <sa secret token>

```

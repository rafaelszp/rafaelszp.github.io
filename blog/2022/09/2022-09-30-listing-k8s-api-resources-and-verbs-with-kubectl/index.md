---
title: "Listing K8s API resources and verbs with kubectl"
date: "2022-09-30"
categories: 
  - "kubernetes"
---

#### Listing resources

```
kubectl api-resources --sort-by name -o wide 
```

#### Listing verbs

```
$ kubectl api-resources --no-headers --sort-by name -o wide | sed 's/.*\[//g' | tr -d "]" | tr " " "\n" | sort | uniq
```

Reference: https://stackoverflow.com/questions/57661494/list-of-kubernetes-rbac-rule-verbs

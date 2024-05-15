---
title: "Removing dangling namespace from Kubernetes (Status: Terminating)"
date: "2023-11-29"
categories: 
  - "kubernetes"
---

Credits are not mine. Please follow this post in StackOverflow: https://stackoverflow.com/a/53661717

Author: https://stackoverflow.com/users/86967/brent-bradburn

**requirements**:

- kubectl
- jq

```shell
(
NAMESPACE=my-dangling-ns
kubectl proxy &
kubectl get namespace $NAMESPACE -o json |jq '.spec = {"finalizers":[]}' >temp.json
curl -k -H "Content-Type: application/json" -X PUT --data-binary @temp.json 127.0.0.1:8001/api/v1/namespaces/$NAMESPACE/finalize
)
```

---
title: "Listing Available Resource/Sub-resource Name for RBAC k8s Configuration"
date: "2020-07-03"
categories: 
  - "kubernetes"
  - "linux"
---

```bash
_list=($(kubectl get --raw / |grep "^    \"/api"|sed 's/[",]//g')); for _api in ${_list[@]}; do _aruyo=$(kubectl get --raw ${_api} | jq .resources); if [ "x${_aruyo}" != "xnull" ]; then echo; echo "===${_api}==="; kubectl get --raw ${_api} | jq -r ".resources[].name"; fi; done > resources.txt
```

Please look for the original article here [Tannhäuser Ruan](https://medium.com/@tannhauser.sphinx/bash-kubernetes-script-to-list-all-available-resources-subresources-c65a5c2c1173). **Don't use this blog entry,** this is just for further reference.

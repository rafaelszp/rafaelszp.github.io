---
title: "Fixing linkerd AccessDenied error that denies linkerd-proxy container to start"
date: "2021-02-16"
categories: 
  - "kubernetes"
  - "linux"
---

Sometimes linkerd get some errors of AccessDenied in linkerd-proxy container inside a kubernetes injected pod. In order to fix this, run the following script:

```bash
for deploy1 in $(kubectl get deploy -n linkerd -oname); do
  echo ${deploy1}
  kubectl rollout restart ${deploy1} -n linkerd
done
```

Thanks to [kr3cj](https://github.com/kr3cj) to send his life saver troubleshoot in [this issue](https://github.com/linkerd/linkerd2/discussions/4685#discussioncomment-109577)

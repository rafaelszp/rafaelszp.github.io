---
title: "Computing X-Forwarded-For header in nginx-controller"
date: "2023-03-29"
categories: 
  - "kubernetes"
---

#### Step 1 (optional)

Edit ingress-nginx-controller service:

```shell
kubectl edit -n ingress-nginx svc/ingress-nginx-controller
```

Change the following spec as below and save the service config:

```yaml
spec: 
   externalTrafficPolicy: Local

```

`externalTrafficPolicy: Local`: _If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.)_

E.g.: With this configuration, you will need to take care of the balancing properly. This step may be skipped, so you'd rather try the next step before changing this configuration.

#### Step 2

Edit the ingress-nginx-controller data with the following command:

```shell
kubectl edit -n ingress-nginx cm/ingress-nginx-controller
```

The data section must be edited like the following:

```yaml
data:
  compute-full-forwarded-for: "false"
  use-forwarded-headers: "true"
```

Save the config map and restart the deployment/daemonset regarding ingress-nginx

---
title: "Pushing custom images to your private docker registry"
date: "2017-05-03"
categories: 
  - "docker"
---

**Creating the registry**

```
docker-machine create registry
docker-machine ssh registry
docker run -d -p 5000:5000 --restart=always --name registry registry:2

```

**Enabling push to "insecure" docker registry**

```
sudo vim /etc/docker/daemon.json

```

**Restarting docker**

```
sudo systemctl restart docker.service

```

**Assuming you docker-machine IP is 192.168.99.100, insert this line:**

```
{ "insecure-registries":["192.168.99.100:5000"] }

```

**Building an image with tag**

```
docker build --tag my-image -f src/main/docker/Dockerfile .
```

**Tagging your custom image to point to your local registry:**

```
 docker tag my-image 192.168.99.100:5000/my-image

```

**Pushing your custom image:**

```
 docker push 192.168.99.100:5000/my-image

```

Reference: [Deploying a registry server](https://docs.docker.com/registry/deploying/)

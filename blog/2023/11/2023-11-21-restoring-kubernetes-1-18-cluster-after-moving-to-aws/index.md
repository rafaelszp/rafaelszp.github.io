---
title: "Restoring Kubernetes 1.18 cluster after moving to aws"
date: "2023-11-21"
categories: 
  - "kubernetes"
  - "linux"
---

```shell
export K8S_NODE_IP=
systemctl disable docker kubelet
systemctl stop docker kubelet

mv /etc/kubernetes /etc/kubernetes-backup
mv /var/lib/kubelet /var/lib/kubelet-backup

mkdir /etc/kubernetes/kubeadm -p
cp -r /etc/kubernetes-backup/pki /etc/kubernetes
rm -f /etc/kubernetes/pki/{apiserver.*,etcd/peer.*}
cp /etc/kubernetes-backup/kubeadm/kubeadm-config.yaml /etc/kubernetes/kubeadm/
rm -f ~/.kube/config

systemctl start docker

echo "KUBELET_EXTRA_ARGS=\"--node-ip=$K8S_NODE_IP\"" > /etc/sysconfig/kubelet

kubeadm init --config /etc/kubernetes/kubeadm/kubeadm-config.yaml --ignore-preflight-errors=DirAvailable--var-lib-etcd

cp /etc/kubernetes/admin.conf ~/.kube/config

kubectl cluster-info

kubectl get nodes --sort-by=.metadata.creationTimestamp
kubectl delete node $(kubectl get node |awk '/NotReady/ {print $1}')




systemctl enable docker kubelet


#Depois de resetar worker
kubeadm token create --print-join-command



### Worker
yes | kubeadm reset
export K8S_NODE_IP=
echo "KUBELET_EXTRA_ARGS=\"--node-ip=$K8S_NODE_IP\"" > /etc/sysconfig/kubelet
```

Reference: https://devopstales.github.io/kubernetes/k8s-change-ip/

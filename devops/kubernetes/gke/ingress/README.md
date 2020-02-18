# Configurations

## Set Role - RBAC(Role Based Access Control)

- [AWS Helm RBAC Docs](https://awskrug.github.io/eks-workshop/helm_root/helm_intro/install/)

1. Create Auth

```bash
kubectl create serviceaccount --namespace kube-system tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
```

2. Init helm by serviceaccount

> Based on Helm V3

```bash
helm repo add stable https://kubernetes-charts.storage.googleapis.com/
```

3. Create Ingress Nginx with Helm

```bash
helm install ingress-nginx stable/nginx-ingress --set rbac.create=true
```

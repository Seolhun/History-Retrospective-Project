# Configurations

## Set Role - RBAC(Role Based Access Control)

- [AWS Helm RBAC Docs](https://awskrug.github.io/eks-workshop/helm_root/helm_intro/install/)

1. Create Auth

```bash
$ kubectl create serviceaccount --namespace kube-system tiller
$ kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
```

2. Init helm by serviceaccount

> Based on Helm V3

```bash
$ helm repo add stable https://kubernetes-charts.storage.googleapis.com/
```

3. Create Ingress Nginx with Helm

```bash
$ helm install micro-ingress-nginx stable/nginx-ingress --set rbac.create=true
```

## Set Https with Cert Manager

[Cert-Manager - Docs](https://cert-manager.io/docs/installation/kubernetes/)

1. Apply the yaml config file

```bash
kubectl apply --validate=false -f https://raw.githubusercontent.com/jetstack/cert-manager/release-0.12/deploy/manifests/00-crds.yaml
```

2. Create the namespace for cert-manager

```bash
kubectl create namespace cert-manager
```

3. Add the Jetstack Helm repository

```bash
helm repo add jetstack https://charts.jetstack.io
```

4. Update your local Helm chart repository cache

```bash
helm repo update
```

5. Install the cert-manager Helm chart

> important thing is Helm V3

```bash
helm install cert-manager --namespace cert-manager --version v0.12.0 jetstack/cert-manager
```

## Refs
- [RBAC - Ingress Nginx](https://kubernetes.github.io/ingress-nginx/deploy/rbac/)
- [Cert manager Documentation](httpshttps://cert-manager.io/docs/)

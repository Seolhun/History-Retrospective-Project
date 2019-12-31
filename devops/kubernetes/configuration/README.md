# Configurations

## Set Role - RBAC(Role Based Access Control)

1. Create Auth

```bash
$ kubectl create serviceaccount --namespace kube-system tiller
$ kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
```

2. Create Ingress Nginx with Helm

```bash
$ helm install stable/nginx-ingress --name my-nginx --set rbac.create=true
```

## Set Https

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

```bash
helm install \
  --name cert-manager \
  --namespace cert-manager \
  --version v0.12.0 \
  jetstack/cert-manager
```

## Refs
- [RBAC - Ingress Nginx](https://kubernetes.github.io/ingress-nginx/deploy/rbac/)
- [Cert manager Documentation](httpshttps://cert-manager.io/docs/)

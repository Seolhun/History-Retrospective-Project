## Change metadata
```yaml
annotations:
    kubernetes.io/ingress.class: alb
```

## Set Auth Cluster

```bash
eksctl utils associate-iam-oidc-provider --cluster=battledog-web --approve
```

> eksctl utils associate-iam-oidc-provider --region $REGIEON --cluster $CLUSTER_NAME --approve

## Set IAM Role

`ALBIngressControllerIAMPolicy` 권한이 필요하다. 없으면 ARN이라도 요청하자.

```bash
aws iam create-policy \
    --policy-name ALBIngressControllerIAMPolicy \
    --policy-document https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/v1.1.4/docs/examples/iam-policy.json
```

## Applying rbac-role

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/v1.1.4/docs/examples/rbac-role.yaml
```

## Create Service Account

```bash
eksctl create iamserviceaccount \
	--cluster=battledog-web \
	--namespace=kube-system \
	--name=alb-ingress-controller \
	--attach-policy-arn=$PolicyARN \
	--override-existing-serviceaccounts \
	--approve
```

> eksctl create iamserviceaccount \
    --name alb-ingress-controller \
    --namespace kube-system \
    --cluster battledog-web \
    --attach-policy-arn arn:aws:iam::215559030652:policy/ALBIngressControllerIAMPolicy \
    --override-existing-serviceaccounts \
    --approve

## Applying ingress-controller

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/v1.1.4/docs/examples/alb-ingress-controller.yaml
````

## refs

- [alb-ingress Official docs](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html)
- [kubernetes-ingress-aws-alb-ingress-controller](https://aws.amazon.com/blogs/opensource/kubernetes-ingress-aws-alb-ingress-controller/)
- [Ingress ALB](https://kubernetes-sigs.github.io/aws-alb-ingress-controller/guide/controller/setup/)
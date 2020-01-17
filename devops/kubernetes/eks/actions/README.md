# EKS Actions

## Create ELB

[EKS Workshop - 서비스(SERVICE) 주소 찾기](https://awskrug.github.io/eks-workshop/deploy/viewservices/)

```bash
ELB=$(kubectl get service bd-fe-tournaments-service -n dev -o json | jq -r '.status.loadBalancer.ingress[].hostname')
curl -m3 -v $ELB
```

## Refs
- [EKS Workshop - 서비스(SERVICE) 주소 찾기](https://awskrug.github.io/eks-workshop/deploy/viewservices/)
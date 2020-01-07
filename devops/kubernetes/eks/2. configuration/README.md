# EKS Configuration

## Init Configration

### Change `kube-config`

#### To EKS

만약에 gcloud를 이용하여 google kubectl을 사용하고 있다면, kube-system내에 context 설정을 변경해주어야 한다.
그럴 떄, AWS는 `aws eks --region $Region update-kubeconfig --name $ClusterName`을 입력해주어야 한다.

- [About kube-config changing](https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/create-kubeconfig.html)
- [About "error: You must be logged in to the server (Unauthorized)" - 1](https://aws.amazon.com/ko/premiumsupport/knowledge-center/amazon-eks-cluster-access/)
- [About "error: You must be logged in to the server (Unauthorized)" - 2](https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/troubleshooting.html)

#### To GKE

```bash
$ curl https://sdk.cloud.google.com | bash
$ exec -l $SHELL
$ gcloud init
```

```bash
$ curl https://sdk.cloud.google.com | bash > /dev/null;
$ source $HOME/google-cloud-sdk/path.bash.inc
$ gcloud components update kubectl
$ gcloud auth activate-service-account --key-file service-account.json
$ gcloud config set project hicord-263305
$ gcloud config set compute/zone asia-northeast1-a
$ gcloud container clusters get-credentials hicord-cluster
```

> /Users/hunseol/.bash_profile

- [Links](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl?hl=ko)


## Refs
- [EKS Docs](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
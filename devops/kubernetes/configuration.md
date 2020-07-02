# Configuration

## Change `kube-config`

### Change kube context using kube-config

가장 먼저 보아야 할 파일은 $HOME 디렉토리에 있는 kube config 파일이다.

```bash
$ less -FX ~/.kube/config
```

```bash
# https://kubernetes.io/ko/docs/reference/kubectl/cheatsheet/
kubectl config view -o jsonpath='{.users[].name}'    # 첫 번째 사용자 출력
kubectl config view -o jsonpath='{.users[*].name}'    # 사용자 리스트 조회
kubectl config get-contexts                          # 컨텍스트 리스트 출력
kubectl config current-context              # 현재 컨텍스트 출력
kubectl config use-context my-cluster-name  # my-cluster-name를 기본 컨텍스트로 설정
```

해당 파일에 이미 설정이 되어 있다면

```bash
$ kubectl config --kubeconfig=$ConfigFile use-context $ContextName
```

```bash
$ kubectl config use-context arn:aws:eks:ap-northeast-2:215559030652:cluster/battledog-web
$ kubectl config use-context arn:aws:eks:ap-northeast-2:215559030652:cluster/btdgg-web
$ kubectl config use-context gke_hicord-263305_asia-northeast1-a_hicord-cluster
```

> 만약, --kubeconfig 설정이 되어있지 않다면, 기본적으로 `~/.kube/config`를 참조하게 됩니다.

위 설정파일에 관련 정보가 없으면 각 ClouseProvider의 문서를 따르던지, 각각의 config 파일을 직접 입력해서 추가해야 합니다.

- [다중 클러스터 접근 구성](https://kubernetes.io/ko/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)을 참조해주시기 바랍니다.

### Add kube config

#### To EKS

만약에 gcloud를 이용하여 google kubectl을 사용하고 있다면, kube-system내에 context 설정을 변경해주어야 한다.
그럴 때, AWS는 `aws eks --region $Region update-kubeconfig --name $CLUSTER_NAME`을 입력해주어야 한다.

##### Example
```bash
$ aws eks list-clusters
$ aws eks --region ap-northeast-2 update-kubeconfig --name $CLUSTER_NAME
```
```bash
$ aws eks --region ap-northeast-2 update-kubeconfig --name btdgg-web
$ aws eks --region ap-northeast-2 update-kubeconfig --name battledog-web
```

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

## Refs

- [다중 클러스터 접근 구성](https://kubernetes.io/ko/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)을 참조해주시기 바랍니다.

# AWS EKS Kubernates Practice

- 2019.12.03
- GS Tower 14F

## Time Table
- 09:30 – 11:00
	- Docker, 컨테이너 오케스트레이션 소개
	- 쿠버네티스, EKS 소개
	- Amazon EKS 클러스터 생성

- 11:00 – 11:15
	- 쉬는 시간

- 11:15 – 12:30
	- EKS 실습 : EKS 클러스터 생성

- 12:30 – 13:30
	- 점심 시간

- 13:30 – 14:20
	- EKS 실습: 마이크로 서비스 배포

- 14:20 – 15:10
	- EKS 실습: 헬름을 이용한 배포

- 15:10 – 16:00
	- EKS 실습: EFK를 활용한 로깅

- 16:00 – 16:45
	- EKS 실습: 프로메테우스를 사용한 모니터링

- 16:45 – 17:00
	- 맺음말

---

## Docker Container

- Containerize
	- Kernel을 공유
	- 운영 측면에서 강점 (VM은 격리환경이 OS에서 발생되기에 보안측면이 강함)

## Orchestrator

#### Service Management 

#### Scheduling
-	Placement
- Scaling
- Upgrades
- Rollback

#### Resource Management 
- Memory
- CPU
- Ports

- Spec 기반의 설정을 통해 Container를 조절

## Kubernetes

#### Control Plane
- Etcd
- API Server
- Scheduler
- Controller Manager

#### Kubernetes Node (Data Plane)
- kubelet (Agent from API Server)
- kube-proxy (Routing Table controller)
- cAdvisor

- kubectl
	- `~/.kube/config` 확인

#### Pods (!important)
- `A group of one or more containers`
- `Shared`
	- Data volumnes
	- cgroup
	- Namespace - network, IPC, ETC

#### ReplicaSet

#### Deployment
- Rolling Update
- Blue Green Update
- Canary Update

#### Lables
- Key/Value Pairs
- Used to query specific resources within your cluster

#### Services : ClusterIP
- Exposes the service on a cluster-internal-IP
- Only reachable from within the cluster
- Access possible via kube-proxy

#### Services : LoadBalancer
- Exposes the service externally using a cloud provider's load balancer
- NodePort and ClusterIP services (to which LB will route) automatically created
- !Warning
	- Delayed time to create LB instance

#### Services : NodePort
-	Exposes the service on each Node's IP at a static port
- Routes to ClusterUP service, which is automatically created

#### Services : Ingress
-	L7 Switch
- exposes HTTP/HTTPS routes to services within the cluster

#### Storage
- Lifecycle of a storage volume
	- Provisioning
		- Dynamic
			- Pdos에 요청에 의해 만들어지는 경우
		- Static
			- Pods에 요청 전에 만들어져있는 경우
	- Binding - Persistent Volume binding for Spec in Kubernetes claiming class)
		- PVC (Persistent Volume Claim)
		- PV (Persistent Volume)
	- Using
		- Cluster mounts volume based on PVC
	- Reclaming
		- Retain
		- Delete

#### StatefulSet
- Network identifiers
- Persistent Storage
- Ordered graceful deployerment and scailing
- Ordered graceful termination
- Ordered rolling updates
- ..., use Deployment or Replicaset

#### Jobs

####  ConfigMap/SecretMap
- Config
	- Set indipendent Configuration map to build product
	- Set configurations with Labels
- Secret (default `base64`)
	- Set secret configuration required security

---

## EKS

- Master node 3개(Default)는 EC2, VCP 모두 AWS 내에서 관리된다.
	- 즉, EC2, VPC Dahsboard에서 확인 불가능
- 인증은 IAM, 권한은 K8s Role(Rback) 사용
	- EKS 생성자는 기본적으로 RBack에 system:master로 등록되어있음
	- 수정을 원하면 `aws-auth configmap`
		- mapUsers
- EKS AMI Build Scripts
- EKS Optimized AMI with GPU Support
- Worker node Setup - Bootstrapping

#### [Docs Link](https://aws.amazon.com/ko/eks/)

---

## Helm

The package manager for Kubernetes
> Charts help you define, install, and upgrade even the most complex Kubernetes application.

- Chart.yaml
	- requirements.yaml
	- values.yaml

- Kubernates에 필요한 Deployments와 Service 등에 필요한 설정 값을 함께 Managing 할 수 있음.
	- Chart.yaml : set Package Name and versions
	- values.yaml : set variables

#### Helm Files
- NOTES.txt: The “help text” for your chart. This will be displayed to your users when they run helm install.
- deployment.yaml: A basic manifest for creating a Kubernetes deployment
- service.yaml: A basic manifest for creating a service endpoint for your deployment
- _helpers.tpl: A place to put template helpers that you can re-use throughout the chart
- ingress.yaml: A basic manifest for creating a Kubernetes ingress object for your service
- tests/: A folder which contains tests for chart

## Prometheus
- Mornitoring to alert
- Time series Database standalone

#### Functions
- Exporter
	- Getting Data from exporter
- PromQL (Grafa recommended)
	- Query on the UI

## Grafana
- Metic analytics
- Metic visualization for time series

---

## Keywords
- Sidecar Pattern
	- [Uber Blog](https://eng.uber.com/distributed-tracing/)
- Log Aggregator
	- [Fluentd - high-availability](https://docs.fluentd.org/deployment/high-availability)
 

---

## Pricing
- CloudFormation
- EKS (each EKS Cluster per hours : 0.2 USD)
	- Cluster
- EC2 
	- 3 Node(Default) instance
	- default m5.large size (0.096 USD per hours)
		- 0.096 * 24 * 30 * 3 nodes
			- 207.36 $
- VCP (each ENI per hours : 0.015 USD)
	- Ingress network

---

## Refs

#### EKS
- [EKS Workshop](https://eksworkshop.com/010_introduction/)
- [EKS vs ECS](https://cloudonaut.io/eks-vs-ecs-orchestrating-containers-on-aws/)

#### Helm
- [Helm](https://helm.sh/)
- [Helm Hub](https://hub.helm.sh/)
- [Docs Link](https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/helm.html)

#### EFK (ElasticSearch, Fluentd, Kiabana)
- [EFK - Logging](https://eksworkshop.com/intermediate/230_logging/)
- [EKS Stream with Cloud-watch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_ES_Stream.html)

#### Mornitoring
- [Prometheus](https://prometheus.io/)
- [Grafaba](https://grafana.com/)

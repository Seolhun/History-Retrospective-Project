# Kubernetes

## Component - [Link](https://kubernetes.io/ko/docs/concepts/overview/components/)

쿠버네티스를 배포하면 `클러스터`를 얻는다.

클러스터는 쿠버네티스에서 관리하는 `컨테이너화된 애플리케이션을 실행하는 노드`라고 하는 기계의 집합. 클러스터는 최소 1개의 워커 노드와 최소 1개의 마스터 노드를 가진다.

**워커 노드는 애플리케이션의 구성요소인 파드를 호스트**한다. 마스터 노드는 워커 노드와 클러스터 내 파드를 관리한다. 다수의 마스터 노드는 장애극복(failover)과 고가용성의 클러스터에서 사용한다.

---

## Object

## Service, Load Balancing, Networking

### Ingress - [Link](https://kubernetes.io/ko/docs/concepts/services-networking/ingress/)

---

## Network

#### ClusterIP

**Exposes the service on a cluster-internal IP.**

Choosing this value makes the service only reachable from within the cluster. This is the default ServiceType

- spec.clusterIp:spec.ports[*].port

> You can only access this service while inside the cluster. It is accessible from its spec.clusterIp port. If a spec.ports[*].targetPort is set it will route from the port to the targetPort. The CLUSTER-IP you get when calling kubectl get services is the IP assigned to this service within the cluster internally.

#### NodePort

**Exposes the service on each Node’s IP at a static port (the NodePort).**

A ClusterIP service, to which the NodePort service will route, is automatically created. You’ll be able to contact the NodePort service, from outside the cluster, by requesting <NodeIP>:<NodePort>.

- <NodeIP>:spec.ports[*].nodePort
- spec.clusterIp:spec.ports[*].port

> If you access this service on a nodePort from the node's external IP, it will route the request to spec.clusterIp:spec.ports[*].port, which will in turn route it to your spec.ports[*].targetPort, if set. This service can also be accessed in the same way as ClusterIP

#### LoadBalancer

**Exposes the service externally using a cloud provider’s load balancer.**

NodePort and ClusterIP services, to which the external load balancer will route, are automatically created.

- spec.loadBalancerIp:spec.ports[*].port
- <NodeIP>:spec.ports[*].nodePort
- spec.clusterIp:spec.ports[*].port

> You can access this service from your load balancer's IP address, which routes your request to a nodePort, which in turn routes the request to the clusterIP port. You can access this service as you would a NodePort or a ClusterIP service as well.

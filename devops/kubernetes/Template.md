## Kubernates
- Deployment
```yaml
{
  "kind": "Deployment",
  "apiVersion": "extensions/v1beta1",
  "metadata": {
    "name": "web-test-dev",
    "namespace": "development",
    "labels": {
      "app": "web-test",
      "env": "dev"
    }
  },
  "spec": {
    "replicas": 2,
    "selector": {
      "matchLabels": {
        "app": "web-test",
        "env": "dev"
      }
    },
    "template": {
      "metadata": {
        "creationTimestamp": null,
        "labels": {
          "app": "web-test",
          "env": "dev"
        }
      },
      "spec": {
        "volumes": [
          {
            "name": "nginx-conf",
            "configMap": {
              "name": "web-test-nginx-dev",
              "defaultMode": 420
            }
          }
        ],
        "containers": [
          {
            "name": "nginx",
            "image": "seolhun/nginx:1.15.9",
            "resources": {
              "limits": {
                "cpu": "100m",
                "memory": "100Mi"
              }
            },
            "volumeMounts": [
              {
                "name": "nginx-conf",
                "mountPath": "/etc/nginx/conf.d"
              }
            ],
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "imagePullPolicy": "IfNotPresent"
          },
          {
            "name": "web-test",
            "image": "seolhun/web-test:develop-1b5ee0e4fad4094797d65088ae3607eb5feff2e6",
            "ports": [
              {
                "containerPort": 8080,
                "protocol": "TCP"
              }
            ],
            "resources": {
              "limits": {
                "cpu": "500m",
                "memory": "5000Mi"
              },
              "requests": {
                "cpu": "300m",
                "memory": "200Mi"
              }
            },
            "livenessProbe": {
              "httpGet": {
                "path": "/ping",
                "port": 80,
                "scheme": "HTTP"
              },
              "initialDelaySeconds": 20,
              "timeoutSeconds": 2,
              "periodSeconds": 10,
              "successThreshold": 1,
              "failureThreshold": 3
            },
            "readinessProbe": {
              "httpGet": {
                "path": "/ping",
                "port": 80,
                "scheme": "HTTP"
              },
              "initialDelaySeconds": 20,
              "timeoutSeconds": 2,
              "periodSeconds": 10,
              "successThreshold": 1,
              "failureThreshold": 3
            },
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "imagePullPolicy": "Always"
          }
        ],
        "restartPolicy": "Always",
        "terminationGracePeriodSeconds": 30,
        "dnsPolicy": "ClusterFirst",
        "securityContext": {},
        "imagePullSecrets": [
          {
            "name": "regsecret"
          }
        ],
        "schedulerName": "default-scheduler"
      }
    },
    "strategy": {
      "type": "RollingUpdate",
      "rollingUpdate": {
        "maxUnavailable": 1,
        "maxSurge": 1
      }
    },
    "revisionHistoryLimit": 10,
    "progressDeadlineSeconds": 600
  }
}
```

- Service
```yaml
{
  "kind": "Service",
  "apiVersion": "v1",
  "metadata": {
    "name": "web-test-dev",
    "namespace": "development",
    "labels": {
      "app": "web-test",
      "env": "dev"
    }
  },
  "spec": {
    "ports": [
      {
        "name": "http",
        "protocol": "TCP",
        "port": 80,
        "targetPort": 80
      }
    ],
    "selector": {
      "app": "web-test",
      "env": "dev"
    },
    "type": "ClusterIP",
    "sessionAffinity": "None"
  }
}
```

- ConfigMap
```yaml
{
  "kind": "ConfigMap",
  "apiVersion": "v1",
  "metadata": {
    "name": "web-test-nginx-dev",
    "namespace": "development"
  },
  "data": {
    "default.conf": "upstream app {\n    server 127.0.0.1:3060;\n}\n\nserver {\n    gzip on;\n    gzip_disable \"msie6\";\n    gzip_vary on;\n    gzip_proxied any;\n    gzip_comp_level 6;\n    gzip_buffers 16 8k;\n    gzip_http_version 1.1;\n    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;\n\n    listen 80;\n    charset utf-8;\n    proxy_buffer_size 128k;\n    proxy_buffers 4 256k;\n    proxy_busy_buffers_size 256k;\n    client_max_body_size 20M;\n\n    location / {\n        proxy_pass http://app;\n        }\n}\n"
  }
}
```

## Deploy

- Devops/Issues Repo
- DNS Name setting
- Kubernates
  - MSA
  - Route 53, EC2
    - Ingress rule


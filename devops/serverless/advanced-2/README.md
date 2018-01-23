# Advanced Serverless Framework Guide 3
- Author : [Seolhun](https//github.com/seolhun)
- [https://serverless.com/](https://serverless.com/)

## 1. Permissions
- 모든 AWS Lambda 함수는 계정 내의 다른 AWS 인프라 리소스와 상호 작용할 수있는 권한이 필요합니다. 이러한 권한은 AWS IAM 역할을 통해 설정됩니다. provider.iamRoleStatements 속성을 통해이 역할 내에서 권한 정책 문을 설정할 수 있습니다.

1. Permission example - 1
```yml
# serverless.yml
service: myService

provider:
  name: aws
  runtime: nodejs6.10
  iamRoleStatements: # permissions for all of your functions can be set here
    - Effect: Allow
      Action: # Gives permission to DynamoDB tables in a specific region
        - dynamodb:DescribeTable
        - dynamodb:Query
        - dynamodb:Scan
        - dynamodb:GetItem
        - dynamodb:PutItem
        - dynamodb:UpdateItem
        - dynamodb:DeleteItem
      Resource: "arn:aws:dynamodb:us-east-1:*:*"

functions:
  functionOne:
    handler: handler.functionOne
    memorySize: 512
```

2. Permission example - 2
```yml
# serverless.yml
service: myService
provider:
  name: aws
  iamRoleStatements:
      -  Effect: "Allow"
         Action:
           - "s3:ListBucket"
         # You can put CloudFormation syntax in here.  No one will judge you.
         # Remember, this all gets translated to CloudFormation.
         Resource: { "Fn::Join" : ["", ["arn:aws:s3:::", { "Ref" : "ServerlessDeploymentBucket"} ] ] }
      -  Effect: "Allow"
         Action:
           - "s3:PutObject"
         Resource:
           Fn::Join:
             - ""
             - - "arn:aws:s3:::"
               - "Ref" : "ServerlessDeploymentBucket"
               - "/*"

functions:
  functionOne:
    handler: handler.functionOne
    memorySize: 512
```

3. IAM - Permission example - 3
- 역할 속성에 IAM 역할 ARN을 추가하여 기존 IAM 역할을 사용할 수도 있습니다.
```yml
# serverless.yml
service: new-service
provider:
  name: aws
  role: arn:aws:iam::YourAccountNumber:role/YourIamRole
```

## VPC Configuration
- 함수 구성에 vpc 객체 속성을 추가하여 `serverless.yml`의 특정 함수에 VPC 구성을 추가 할 수 있습니다. 이 객체에는이 함수에 대한 VPC를 구성하는 데 필요한 `securityGroupIds` 및 `subnetIds` 배열 속성이 포함되어야합니다.
```yml
# serverless.yml
service: service-name
provider: aws

functions:
  hello:
    handler: handler.hello
    vpc:
      securityGroupIds:
        - securityGroupId1
        - securityGroupId2
      subnetIds:
        - subnetId1
        - subnetId2
```

- 또는 서비스의 모든 기능에 VPC 구성을 적용하려면 상위 수준 공급자 개체에 구성을 추가하고 기능 수준에서 이러한 서비스 수준 구성을 덮어 쓸 수 있습니다.
```yml
# serverless.yml
service: service-name
provider:
  name: aws
  vpc:
    securityGroupIds:
      - securityGroupId1
      - securityGroupId2
    subnetIds:
      - subnetId1
      - subnetId2

functions:
  hello: # this function will overwrite the service level vpc config above
    handler: handler.hello
    vpc:
      securityGroupIds:
        - securityGroupId1
        - securityGroupId2
      subnetIds:
        - subnetId1
        - subnetId2
  users: # this function will inherit the service level vpc config above
    handler: handler.users
```
- 그런 다음 서버가없는 배포를 실행하면 VPC 구성이 람다 함수와 함께 배포됩니다.

- VPC IAM 권한
  - 람다 함수 실행 역할은 ENI (Elastic Network Interfaces)를 작성, 설명 및 삭제할 수있는 권한이 있어야합니다. VPC 구성이 제공되면 기본 AWS AWSLambdaVPCAccessExecutionRole이 람다 실행 역할과 연결됩니다. 사용자 지정 역할이 제공되는 경우 적절한 ManagedPolicyArns를 포함해야합니다. 자세한 내용은 Amazon VPC 액세스 용 Lambda 기능 구성을 확인하십시오.

- VPC 람다 인터넷 액세스
  - 기본적으로 VPC 내부에서 람다 함수가 실행되면 인터넷 액세스가 끊어지고 AWS 내부의 일부 리소스를 사용할 수 없게됩니다. VPC 내부에서 실행중인 람다 기능에 S3 리소스와 DynamoDB 리소스를 사용할 수있게하려면 VPC 끝점을 만들어야합니다. 자세한 내용은 Amazon S3의 VPC Endpoint를 확인하십시오. Kinesis 스트림과 같은 다른 서비스를 사용하려면 람다를 실행하는 데 사용되는 VPC에 대해 람다를 실행하는 데 사용되는 서브넷 내부에 NAT 게이트웨이를 구성해야합니다. 자세한 내용은 VPC 내 발신 인터넷 액세스 사용을 선택하십시오.
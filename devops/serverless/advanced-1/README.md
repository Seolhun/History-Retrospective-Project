# Advanced Serverless Framework Guide 2
- Author : [Seolhun](https//github.com/seolhun)
- [https://serverless.com/](https://serverless.com/)

## 1. Create a new service.
- Template 종류
  - aws-nodejs
  - aws-nodejs-typescript
  - aws-nodejs-ecma-script
  - aws-python
  - aws-python3
  - aws-kotlin-jvm-maven
  - aws-kotlin-nodejs-gradle
  - aws-groovy-gradle
  - aws-java-gradle
  - aws-java-maven
  - aws-scala-sbt
  - aws-csharp
  - aws-fsharp
```Bash
serverless create --template aws-nodejs-typescript --path users
cd users
npm install
```

## 2. Build a Service
- Contains 4 functions that do Users CRUD operations and the Users database
- users/
	- serverless.yml 

- Contains 4 functions that do Posts CRUD operations and the Posts database
- posts/
	- serverless.yml 

- Contains 4 functions that do Comments CRUD operations and the Comments database
- comments/
	- serverless.yml 

- **주의** : 현재 모든 서비스는 AWS API 게이트웨이에 별도의 REST API를 만듭니다. AWS API 게이트웨이의 제한으로 인해 하나의 REST API 당 맞춤 도메인 만 가질 수 있습니다. 대규모 REST API를 만들려는 경우이 제한 사항을 기록해 두십시오. 또한 수정 프로그램이 작동 중이며 최우선 순위입니다.

## 3. Build a Contents
- 각 서비스 구성은 `serverless.yml` 파일에서 관리됩니다. 이 파일의 주된 책임은 다음과 같습니다.
   - Serverless 서비스 선언
   - 서비스에 하나 이상의 기능 정의
   - 서비스가 배포 될 공급자를 정의하십시오 (제공되는 경우 런타임).
   - 사용 할 맞춤 플러그인 정의
   - 실행할 각 기능을 트리거하는 이벤트 정의 (예 : HTTP 요청)
   - 이 서비스의 기능에 필요한 자원 세트 (예 : 1 DynamoDB 테이블) 정의
   - 이벤트 섹션에 나열된 이벤트가 배포시 이벤트에 필요한 리소스를 자동으로 만들도록 허용합니다.
   - Serverless 변수를 사용하여 유연한 구성 허용
```yml
service: users

custom:
  defaultStage: dev
  profiles:
    dev: hunseol-dev
    prod: hunseol

provider:
  name: aws
  runtime: nodejs6.10
  region: ap-northeast-2
  stage: ${opt:stage, self:custom.defaultStage}
  profile: ${self:custom.profiles.${self:provider.stage}}
  memorySize: 512 # Overwrite the default memory size. Default is 1024
  deploymentBucket:
    name: com.serverless.${self:provider.region}.deploys # Overwrite the default deployment bucket
    serverSideEncryption: AES256 # when using server-side encryption
  versionFunctions: false # Optional function versioning
  stackTags: # Optional CF stack tags
    key: value
  stackPolicy: # Optional CF stack policy. The example below allows updates to all resources except deleting/replacing EC2 instances (use with caution!)
    - Effect: Allow
      Principal: "*"
      Action: "Update:*"
      Resource: "*"
    - Effect: Deny
      Principal: "*"
      Action:
        - Update:Replace
        - Update:Delete
      Condition:
        StringEquals:
          ResourceType:
            - AWS::EC2::Instance

functions:
  usersCreate: # A Function
    handler: users.create
    events: # The Events that trigger this Function
      - http: post users/create
  usersDelete: # A Function
    handler: users.delete
    events:  # The Events that trigger this Function
      - http: delete users/delete

# The "Resources" your "Functions" use. Raw AWS CloudFormation goes in here.
resources:
  Resources:
    usersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: UsersTable
        AttributeDefinitions:
          - AttributeName: email
            AttributeType: S
        KeySchema:
          - AttributeName: email
            KeyType: HASH
        ProvisionedThroughput:
          ReadCapacityUnits: 1
          WriteCapacityUnits: 1
```

## 4. Deployment 
1. 서비스를 배포하면 serverless.yml의 모든 함수, 이벤트 및 리소스가 AWS CloudFormation 템플릿으로 변환되고, 단일 CloudFormation 스택으로 배포됩니다. 서비스를 배포하려면 먼저 관련 서비스 디렉토리로 이동하십시오.
```bash
cd users
```
2. 그런 다음 deploy 명령을 사용하십시오.
```bash
serverless deploy
```
3. 사용자가 AWS에서 dev stage와 us-east-1 영역을 기본값으로 지정하거나 다른 위치에 지정하지 않은 경우에는 옵션을 다음과 같이 추가하십시오.
- 현재 저희는 `serverless.yml`에 정의하였기 때문에 상관없습니다.
```bash
serverless deploy --stage prod --region ap-northeast-2
```

## 5. Installing Serverless in an existing service
- 기존 서비스에 Serverless 설치/서비스가 있으면, package.json을 사용하여 프레임 워크 버전을 잠그고 자한다면 다음과 같이 Serverless를 설치할 수 있습니다.
```bash
# from within a service
npm install serverless --save-dev
```
# Serverless Framework Guide 1
- Author : [Seolhun](https//github.com/seolhun)
- [https://serverless.com/](https://serverless.com/)

## [Simple Serverless Quick Start](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)

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
serverless create --template aws-nodejs-typescript --path my-service
cd my-service
```

## 2. Update a `serverless.yml`
```yml
provider:
  name: aws
  runtime: nodejs6.10
  region: ap-northeast-2
  stage: ${opt:stage, self:custom.defaultStage}
  profile: ${self:custom.profiles.${self:provider.stage}}

custom:
  defaultStage: dev
  profiles:
    dev: hunseol-dev
    prod: hunseol
```

## 3. Write a aws-profiles
```bash
vim ~/.aws/credentials

[default]
aws_access_key_id = <access-key>
aws_secret_access_key = <access-secret-key>

[hunseol]
aws_access_key_id = <access-key>
aws_secret_access_key = <access-secret-key>

[hunseol-dev]
aws_access_key_id = <access-key>
aws_secret_access_key = <access-secret-key>

serverless deploy --aws-profile seolhun
```

## 4. Build a Function
- Deploy the Function
	- 신속하게 기능 코드를 업로드하고 덮어 쓰면 더 빨리 개발할 수 있습니다.
```bash
serverless deploy function -f hello
```
- Invoke the Function
	- 함수를 호출하고 로그를 반환합니다.
```bash
serverless invoke -f hello -l
```
- Fetch the Function Logs
	- 콘솔에서 별도의 탭을 열고이 명령을 사용하여 특정 기능에 대한 모든 로그를 스트리밍합니다.
```bash
serverless logs -f hello -t
```
- Cleanup
- 언제든지 서비스가 더 이상 필요하지 않은 경우 다음 명령을 실행하여 작성된 함수, 이벤트 및 리소스를 제거하고 예상치 못한 비용이 발생하지 않도록 할 수 있습니다.
```bash
serverless remove
```
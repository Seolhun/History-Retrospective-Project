# Serverless Framework Guide
- Author : [Seolhun](https//github.com/seolhun)
- [https://serverless.com/](https://serverless.com/)


## [Simple Serverless Quick Start](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)
1. Create a new service.
```Bash
serverless create --template aws-nodejs --path my-service
cd my-service
```

2. Update a `serverless.yml`
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

3. Write a aws-profiles
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

4. Build a Function
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

5. Build a Service
#### Contains 4 functions that do Users CRUD operations and the Users database
- users/
	- serverless.yml 
#### Contains 4 functions that do Posts CRUD operations and the Posts database
- posts/
	- serverless.yml 
#### Contains 4 functions that do Comments CRUD operations and the Comments database
- comments/
	- serverless.yml 

- 현재 모든 서비스는 AWS API 게이트웨이에 별도의 REST API를 만듭니다. AWS API 게이트웨이의 제한으로 인해 하나의 REST API 당 맞춤 도메인 만 가질 수 있습니다. 대규모 REST API를 만들려는 경우이 제한 사항을 기록해 두십시오. 또한 수정 프로그램이 작동 중이며 최우선 순위입니다.


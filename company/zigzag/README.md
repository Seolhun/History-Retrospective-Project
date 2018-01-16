## ZIGZAG 배포 순서

1. 라이브서버로 실행하기 - 데이터는 리얼이므로 select 동작만 할 것
`npm run start:real`
2. 리얼데이터로 문제가 없을 시, github에서 pull request -> merge 할 것.
3. local에서 master로 checkout 후, pull 로 최신 소스 가져옴 (merge 된 소스 포함)
`git checkout master`
`git pull`
4. 변경된 프로젝트 배포하기  - ex) apps/management/client에서
`npm run deploy`

## 프로젝트 구현 순서
- Thrift, Services, Server, Client

## Interface generate 방법
1. 인터페이스 디렉토리로 이동.
`cd services/interface`
2. 수정된 thrift 파일 다시 만들기.
`cake generate`

## Npm test 방법
1. services/** 해당 서비스에 해당하는 폴더 이동
`cd services/**`
2. services/interface에 정의된 메소드 테스트 케이스를 작성
3. 테스트 실행 방법 
`npm test`
4. 해당 메소드만 실행하는 방법 
`npm test  -- -- grep 메소드 이름`
- 해당 파일 메소드에 Describe.only( 로 변경하기

## **Git Rebase 방법** - 상당히 중요
[https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase%ED%95%98%EA%B8%B0](https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase%ED%95%98%EA%B8%B0)
1. git merge와 결과는 같지만 commit history를 다르게 만든다는 것이 중요하다.

2. 작업 순서
`git checkout <work branch> - ex) git checkout notices`
`git rebase <rebase branch> - ex) git rebase master`
`git push --force `
- 깃은 작업이 같지만 이를 모르기 때문에 pull을 권유한다. pull하지말고 git push --force한다.
`git push -f`

## **Git Rabase하여 `해당 커밋 제거`하기 **
1. git log를 확인한다.
`git log`
2. 불러올 커밋이력까지의 커밋번호를 적는다(ex - 373ddc4c66f2a4f8677a207e6244228cfd89a464)
`git rebase -i 373ddc4c66f2a4f8677a207e6244228cfd89a464`
3. 해당 커밋마다 종류를 선택한다.
`drop, pick 등 각 커밋마다 진행될 옵션을 선택한다.`

## 현재 프로세스로 테스트하는 방법
- pre_reqirement
	- [https://stedolan.github.io/jq/](https://stedolan.github.io/jq/)
	`brew install jq`
	- [https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html)
	`brew install awscli`

`aws —version`
`aws configure`

- 배포 순서
	1. `git rebase origin/master`로 최신 소스 기반으로 소스를 이동한다
	2. services/shop 을 배포한다. `services/shop> npm run deploy`(추가된 메소드만 있기 때문에 문제가 있어도 다른 코드에 영향을 주지 않음)
	3. client에서 `npm run start:real` 로 management 동작 확인
	4. Pull Request를 master에 머지
	5. `git checkout master`, `git pull`로 작업한 소스가 반영된 최신 소스 가져오기
	6. shop은 이미 배포했기때문에 배포하지 않아도 되지만, 혹시나 싶으면 shop 서비스 다시 배포
	7. management 배포 `management/server> npm run deploy`, `management/client> npm run deploy`

## 실제 데이터를 가져와서 내 로컬 DB에 넣는 법 (예)
- 해당 데이터 Model이 정의된 /zigzag/services/{해당 앱이름} 에서 실행.
`npm run console:real`
`list = Shop.where()`
`fs.writeFileSync('data.json', JSON.stringify(list))`

`npm run console`
`list = JSON.parse(fs.readFileSync('data.json', 'utf-8'))`

- 라이브 서버와 로컬 테스트 서버를 구분하기 위한 방법
`list.forEach (shop) -> shop.name = '@@' + shop.name`

- 날짜 타입이 스트링이라 date에 들어가지 못할 때
`list.forEach (shop) -> shop.created_at = new Date(shop.created_at);`

- Live인지 Local인지 확실히 확인하고 입력할 것
`Shop.createBulk(list)`
`list.forEach (li) -> Shop.create(li)`




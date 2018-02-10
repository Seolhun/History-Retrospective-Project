# [Git] How to Use Git Flow & Teach our Team
- Author : [SeolHun](https://github.com/Seolhun/)
- OS : macOS Sierra 10.12.5

## Git Flow
1. How to Install
- Homebrew
	```bash
	$ brew install git-flow-avh
	```
- Linux(Ubuntu)
	```bash
	$ apt-get install git-flow
	```

2. Getting Started
	1. Git flow init
		```bash
		$ git flow init
		```
몇몇 질문에 대답해서 브랜치의 명명규칙을 정합니다. 기본 값을 사용하기를 권장합니다.

3. Getting Started Features
	1. What are 'Features'
		- 다가오는 배포(release)를 위한 새 기능(feature)을 개발합니다.
		- 일반적으로 개발자의 저장소에만 존재합니다.
	2. Git flow feature start
		```bash
		$ git flow feature start [MYFEATURE]
		```
		- ex) $ git flow feature start shooney
	3. Git flow feature finish
		```bash
		$ git flow feature finish [MYFEATURE]
		```
		- ex) $ git flow feature finish shooney
	4. Git flow feature publish
		```bash
		$ git flow feature publish [MYFEATURE]
		```
		- ex) $ git flow feature publish shooney
	5. Git flow feature track
		```bash
		$ git flow feature track MYFEATURE
		$ git flow feature track shooney
		```

4. Getting Started Release
	1. What is 'Release'
		- 새로운 제품 출시 준비를 지원합니다.
		- 출시를 위한 사소한 버그 수정이나 메타 데이터 준비를 허용합니다.
	2. Start Release
		1. 릴리스를 시작하려면 git flow의 release 명령을 사용합니다.
		2. 'develop' 브랜치로부터 'release' 브랜치를 생성합니다.
		```bash
		$ git flow release start RELEASE [BASE]
		```
			- 릴리스를 시작할 [BASE] commit sha-1 해시를 선택적으로 줄 수도 있습니다. 그 commit은 반드시 'develop' 브랜치에 있어야합니다.
			- 릴리스 브랜치를 생성한 후에는 다른 개발자들의 릴리스 commit을 허용하기위해 게시(publish)하는 것이 현명합니다. 기능 게시와 비슷한 방법으로합니다: 
		```bash
		$ git flow release publish RELEASE
		```
		- 원격 'release' 브랜치의 변경 추적은 다음과 같이 합니다
			- git flow release track RELEASE
	3. Finish Release
		- 릴리스 완료는 git 브랜치하기에서 가장 큰 단계입니다. 몇몇 작업을 수행합니다:
		    - 'release' 브랜치를 'master' 브랜치에 병합(merge)
		    - 릴리스를 릴리스 이름으로 태그(tag)
		    - 릴리스를 'develop' 브랜치로 재병합(back-merge)
		    - 'release' 브랜치 삭제
		```bash		    
		$ git flow release finish RELEASE
		```
		- git push --tags를 사용해 태그들을 push하는 것을 잊지마세요.

5. Getting Started Hotfixes
	1. What are 'Hotfixes'
		- 핫픽스는 현재 출시된 제품에 문제가 생겨서 즉각 대응해야하는 상황에서 필요합니다.
		- 'master' 브랜치의 현재 출시된 버전으로 표기(mark)된 태그(tag)로부터 브랜치를 땁니다.
	2. Start Hotfixes
		- 여타 git flow 명령과 비슷한 방법으로 시작합니다.
		```bash
		$ git flow hotfix start VERSION [BASENAME]
		```
	- 여기서 버전 인수는 핫픽스 릴리스 이름을 지정합니다. 선택적으로 basename으로 시작점을 지정할 수도 있습니다.
	3. Finish Hotfixes
		- 핫픽스를 종료하면 핫픽스는 'develop' 및 'master' 브랜치로 병합(merge)됩니다. 추가적으로 'master'의 병합분분은 핫픽스 버전으로 태그됩니다.
		```bash
		$ git flow hotfix finish VERSION
		```

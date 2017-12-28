# ZIGZAG Setting Getting Started Information
- Author : <a href="https://github.com/croquiscom" target="_blank">Croquis - Development Team</a>
- Date : 2017.12.20
---
## Pre-Requirement - CTO님에게 권한 받기 
1. Google email (g-suite)
2. TaskWorld 
3. Slack (각각의 채널 가입)
4. Management, Seller Admin
5. **Github**

## Setting Process
1. 맥 패키지 관리 Homebrew - <a href="" target="_blank">설치하러 가기</a> 
	1. Homebrew 설치하기
		- brew install `package명`
			- wget 
			- mysql
			- redis
			- mongodb
			- git
			- node@8(8.9.3 - 버전은 계속 바귈 수 있으나 현재 이 버전)

		> ```bash
		> $ brew install wget
		> $ brew install mysql
		> $ brew install redis
		> $ brew install mongodb
		> $ brew install git
		> $ brew install node@8
		> ```

		- nvm으로 NodeJS 설치하는 방법
			- [Node Version Manager(nvm)](https://github.com/creationix/nvm)을 통해 설치하는 방법을 설명합니다.
				> ```bash
				> $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
				> $ nvm install 8.9.3
				> ```
			- nvm을 통해 특정 버전을 명명하여야 할 떄
				> ```bash
				> $ nvm install 8.9.3
				> $ nvm ls
				> $ nvm alias default v8.9.3
				> ```

		- **node version 꼭 확인하기**
			> ```bash
			> $ node -v 
			> ```
	2. Mac 패키지 실행, 재실행, 정지
		- brew services [start, restart, stop] `package명`
			- ** mysql **
			- mongodb
			- redis
		> ```bash
		> $ brew service start mysql
		> $ brew service start mongodb
		> $ brew service start redis
		> ```

2. Visual Studio Code - <a href="https://code.visualstudio.com/" target="_blank">설치하러 가기</a> 
	- TypeScript와 호환을 위해 Visual Studio Code를 사용하고 있습니다.
	1. Editor 옵션 설정하기
		1. 해당 이미지의 모양을 찾습니다.
			- <img src="editorConfig.png"/>
		2. editorconfig, tslint 2개를 설치합니다.
		3. 현재 Repository Root에 해당 설정이 들어가있으므로 설치하면 하면 자동 잊식됩니다.

3. Github 설정 및 프로젝트 가져오기
	1. git config 설정
		- Git 작업을 위해 email, username을 설정합니다.
		> ```bash
		> $ git config --global user.name "SeolHun"
		> $ git config --global user.email shun10114@gmail.com
		> ```
	2. git directory
		> ```bash
		> $ mkdir ~/git
		> $ cd ~/git
		> ```
	3. git clone - <a href="https://github.com/croquiscom/zigzag" target="_blank">Repository로 가기</a> 
		- zigzag
		> ```bash
		> $ git clone 'github repositroy url'
		> ```

4. Project install, setting and dev run
	1. mysql user 생성 및 권한 부여
		- mysql 접속 (처음 root 비밀번호는 없으므로 그냥 `enter`누르기)
		> ```bash
		> mysql -uroot -p
		> ```
		- mysql user 생성 및 권한부여
		> ```sql
		> create user
		> 
		> 
		> 
		> ```
	2. default npm install 
	> ```bash
	>
	> ```
	3. create Account using console
	> ```bash
	>
	> ```
	4. run project test
	> ```bash
	> $ cd app/services/management/client
	> $ npm run start
	> ```
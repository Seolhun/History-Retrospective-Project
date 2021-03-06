# Continuous Integration with Jenkins and Github

## Intro
> Continuous Integration doesn’t get rid of bugs, but it does make them dramatically easier to find and remove. - Martin Fowler

CI 툴을 이용한다는 것은 위 인용한 글 처럼, **손 쉽게 버그를 찾고 제거하기 위함일 것입니다.** 현재 지그재그는 Jenkins를 이용하여 CI를 운영하고 있으며, 최근에는 Storybook으로 UI를 테스트할 수 있는 시스템을 추가하였습니다. 앞으로도 지그재그는 자동화 CI 시스템을 지속적으로 확대할 예정입니다. 이와 관련하여 포스트를 작성하고자 합니다.

## 주제
Jenkins와 Github 연결하는 방법을 알아보고 Freestyle과 Pipeline 방식으로 간단히 테스트하는 예제를 다룰 예정입니다.

#### 목록
1. [CI란 무엇인가?](#1-ci란-무엇인가)
2. [Jenkins란?](#2-jenkins란)
3. [Jenkins 설치하기](#3-jenkins-설치하기)
4. [Jenkins 기본 설정](#4-jenkins-기본-설정)
5. [Jenkins, Github 서비스에 등록/인증하기](#5-jenkins-github-서비스에-등록인증하기)
6. [Jenkins에서 새로운 Item(Job) 만들기](#6-jenkins에서--새로운-itemjob-만들기---freestyle-pipeline)
	 - [Freestyle](#1-freestyle-project란)
	 - [Pipeline](#1-pipeline이란)
7. [기타 및 추가사항](#7-기타-및-추가사항)

## 필요사항
- Ubuntu 16.04
	- 다른 운영체제도 상관없지만 이번 포스트 내용은 Ubuntu 16.04를 기준으로 작성되었습니다.
- Java 8
- Git
- Jenkins

## 내용
<sub>
	<img src="./img/Github-Jenkins.jpg" alt="Jenkins - Github">
	<p> 이미지 출처 : http://cicd.life/u3-p4-configuring-jenkins-github-groovy/</p>
</sub>

## 1. CI란 무엇인가?
- Continuous Integrate, Continuous Delivery, Continuous Deploy
<sub>
	<img src="./img/CICD.jpg" alt="CI(Continuouse Integration) vs CD(Continuouse Delivery) vs CD(Continuouse Deploy)">
	<p> 이미지 출처 : http://skillslane.com/continuous-integration-delivery-deployment/</p>
</sub>

CI와 CD의 차이는 Process 단계의 정도로 나누어짐을 볼 수 있습니다. 해당 단계의 차이마다 조금씩의 차이가 있는 것이죠. 해당 과정을 예전에는 수동으로 했기때문에 조금만 변경되어도 많은 어려움이 있었습니다. 하지만, CI 툴이 생긴이후로 대부분의 작업들이 자동화되었습니다.

그렇다면, CI 툴이 위의 모든 단계의 모든 기능을 제공하는걸까요? 반은 맞고 반은 틀리다고 할 수 있습니다. CI 툴이 순수하게 모든 기능을 다 제공하지는 않습니다. 다만, 다양한 플러그인(라이브러리) 등으로 인터페이스를 제공하고 기능을 통합하여 제공하는 것이죠.

Jenkins와 Git(Github)을 연결하는 예제를 선택한 이유도 이와 같습니다. Jenkins가 Git(Github)이란 SCM(Source Code Management)을 통해 코드를 관리하고 통합(`Code`, `Integrate`)하는 기능을 제공하기 때문입니다. 엄밀히 보면 `Build`, `Test`, `Release`, `Deploy` 과정이 Jenkins가 담당하는(할 수 있는) 부분인 것이죠. 

즉, 이번과정에서 Jenkins와 Git(Github)를 연결하는 방법을 통해 `Code`, `Build`, `Integrate` 과정을 설명하기 위함입니다. 지금부터 알아보도록 할까요?

## 2. Jenkins란?
- Jenkins는 2004년에 썬 마이크로시스템즈에서 시작된 소프트웨어이며, 지속적인 통합과 테스트를 위해 Kawaguchi Kohsuke에 의해 만들어졌습니다. 처음 이름은 Hudson이지만, 이후 분기되어 현재는 Jenkins라는 이름으로 관리되고 있습니다.
- Jenkins는 개발 작업을 자동화 할뿐 아니라, 파이프라인(Pipeline)을 사용해 거의 모든 언어와 소스코드에 대해 지속적인 통합(CI)과 전달(CD) 환경을 구축하는 간단한 방법을 제공합니다.
- Jenkins가 각각의 단계에 대한 스크립트 작성의 필요성을 없애주지는 않지만, 사용자가 쉽게 구축할 수 있는 것보다 더 빠르고 더 강력하게 빌드(Build), 테스트(Test), 그리고 배포(Deployment) 등 체인 전체를 통합할 수 있는 방법을 제공해 줍니다.

- 핵심 키워드
	- Item(Job)
 	- Executor
 	- Node(Distributed System)
 		- Master - Slave
 	- SCM(Source Code Management)
 		- Git, SVN, etc...
 	- Build Tool
 		- Maven, Gradle, Ant, make, Npm, etc...
 	- Test Tool
 		- JUnit, Mocha, Jest, etc...

## 3. Jenkins 설치하기
#### 1. Java 설치
- Jenkins는 자바로 구현되어 Java(Servlet container)가 필요합니다. 
- Java는 8버전을 설치하도록 합니다. Java 9 버전을 아직 Jenkins가 100% 지원하지 않아([Which tool support Java 9](https://www.infoworld.com/article/3234470/java/which-developer-tools-support-javas-new-modularity-features.html)) 몇가지 에러가 발생합니다. Plugin설치로 해결이 가능할 것으로 보이지만 몇가지 이슈가 제기된 것으로 보입니다. 안정적인 Jenkins 사용을 위해 Java 8 버전을 설치하겠습니다.
	- [How to Install Multiple Java on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04#managing-java)

#### 2. Git 설치
- Jenkins가 SCM(Source Code Management)으로 사용 할 Git이 필요합니다.
```bash
sudo apt-get install git
```

#### 3. Jenkins 설치
- Jenkins를 구동시키기 위해서는 Jenkins가 설치되어있는 서버가 필요합니다. Jenkins 설치와 관련한 내용은 잘 정리되어 있는 글이 많기에 추가적으로 작성하지는 않았습니다. 설치가 필요하신 분들은 아래 링크를 통해 Jenkins를 설치하시기 바랍니다.
	- [How to Install Jenkins on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-16-04)
- **주의사항**
	- `ufw enalbe`
		- 방화벽을 활성화시켜줍니다. 미적용 시 `/github-web-hook/` 설정에서 방화벽에 차단되는 문제가 발생합니다.
	- 추가적으로 Jenkins를 설치한 서버에 추가적인 가상 방화벽으로 차단해 둔 경우 Github Webhook의 요청이 방화벽에 차단되어 `Timeout error`가 발생합니다.

3가지 모두 설치를 완료하고 첫 계정을 생성하면 아래와 같은 그림을 볼 수 있습니다.
<img src="./img/1-firstJenkins.jpg" alt="Init Jenkins">

## 4. Jenkins 기본 설정
`Jenkins 관리`에 들어가면 많은 항목을 볼 수 있습니다. 그 중 지금 필요한 것은 3가지 설정입니다.

#### 1. Global Tool Configuration
- Jenkins가 실행될 때 필요한 기본 Build Tool들의 경로를 설정하는 곳입니다. 
- 현재 Jenkins는 Build Tool로 JDK, Git, Gradle, Ant, Maven, Docker 총 6개를 기본적으로 지원하고 있습니다.

<p>JDK와 Git을 아래와 같이 설정해줍니다.</p>
<img src="./img/2-globalToolConfig.jpg" alt="Jenkins Git Plugins">

#### 2. 시스템 설정
- 서버관련 환경, 플러그인, 스크립트, 알림 등 다양한 Jenkins 관련 시스템 설정을 할 수 있는 곳입니다.

<p>시스템 설정에서는 Git config에 기본적으로 필요한 name과 email을 기본적으로 설정해줍니다.</p>
<img src="./img/3-systemGitPlugin.jpg" alt="Jenkins Git Plugins">

#### 3. 플러그인 관리
- 말 그대로 플러그인 설치/업데이트/삭제 등 플러그인을 관리할 수 있는 곳입니다.

<p>기본 설치시 설치되는 Git Plugins는 아래 그림으로 확인할 수 있습니다.</p>
<img src="./img/4-defaultGitPlugins.jpg" alt="Jenkins Git Plugins">

## 5. Jenkins, Github 서비스에 등록/인증하기
#### Jenkins, Github Webhook 서비스로 등록하기
- Github 연결 할 Repositroy > Settings에서 `Integrations & Services`로 Jenkins를 등록하면, 해당 Url에 맞게 `Webhooks`에 Integrations & Services 설정 값이 자동으로 저장됩니다. 
- Services 적용 후 요청 테스트에서 Success Check이 완료되면, Integrations & Services에 있던 설정이 삭제되며, Webhooks에 맞게 저장됩니다.

- **이전과의 변경사항**
	- 이전에는 Username/Password 혹은 Token 값 설정만으로도 Webhooks가 지원되었지만, 이제는 CI 서버와 Github Repository를 명시적으로 연결하여야지만 정상작동됩니다. 아래와 같은 방법으로 해당 Repsitory에 Jenkins 서비스를 등록하여줍니다.

##### 1. 아래와 같은 방식으로 Repositroy > Settings 찾아주시기 바랍니다.
<img src="./img/7-gitServiceJenkins2.jpg" alt="Webhooks1">

##### 2. Jenkins가 설치된 서버의 IP와 Port를 입력해주시기 바랍니다.
- 아래와 같이 설정하면 **Public Repository**에서 추가 인증 없이 Jenkins와 Repository가 연동되어 Build Trigger가 정상작동됩니다.
<img src="./img/7-gitServiceJenkins3.jpg" alt="Webhooks2">

- 주의사항
	1. Jenkins 서버 URL이 적합하지 않으면 정상작동되지 않습니다.
	2. URL 마지막에 `/github-webhook/`을 붙여주지 않아도 정상작동되지 않습니다.

## 6. Jenkins에서  새로운 Item(Job) 만들기 - (Freestyle, Pipeline)
- Item(Job)을 정의하는 곳입니다. 
- 일련의 CI 과정을 정의하는 Item(Job)을 만드는 곳이라고 생각할 수 있습니다.
- Item(Job) 별로 다양하며, 기본적으로 Freestyle, Pipeline 등이 있습니다.

#### 이전과의 변경사항
- Jenkins와 Github를 연결하기 위해서는 [JENKINS/GitHub+Plugin](https://wiki.jenkins.io/display/JENKINS/GitHub+Plugin)이 사용됩니다. 이전과 달라진 점은 Github Plugin은 업데이트(v1.25.1부터 - 현재 v1.29.0)되면서 Jenkins와 Github가 Trigger되는 이름이 바뀌었으며, 설정하는 방법도 조금 바뀌었습니다.
	- 이름 
		- Old
			- ~~Previously named as "Build when a change is pushed to GitHub"~~
		- New
			- GitHub hook trigger for GITScm polling
	- 방법
		- Old
			- ~~이전에는 push가 되면 자동으로 Repository 소스를 pull하여 Build trigger가 작동되었습니다.~~ 하지만, 깃허브의 보안정책으로 인해 추가작업이 필요해졌습니다.
				- [관련 깃허브 보안사항 - About Two-Factor Authentication](https://help.github.com/articles/about-two-factor-authentication/)
		- New
			- 새로운 방법에는 Jenkins를 해당 Github Repository 서비스로 등록해야 합니다.

#### 1. Freestyle project란?
- GUI를 통해 Jenkins의 기본적인 Job을 설정할 수 있습니다. 

#### 2. Freestyle project 설정하기
##### 1. Freestyle project를 만듭니다.
<img src="./img/5-freestyleJob.jpg" alt="FreeStyle Item">

##### 2. Git Repository를 연결합니다.
<img src="./img/6-jenkinsGitConfig1.jpg" alt="Git Repository">	

##### 3. Build Trigger를 Github hook trigger로 설정합니다. 여기에 체크하는 것이 Github에 Services에 등록한 것과 연결이 됩니다.
<img src="./img/6-jenkinsGitConfig2.jpg" alt="Build Trigger">

##### 4. Build에서 Shell에 해당 Git 정보를 확인하는 Script를 작성합니다.
<img src="./img/freestyleResult1.jpg" alt="Build Trigger">

##### 5. Github에 해당 Branch에 새롭게 푸쉬를 해봅니다.
##### 6. Github에 Push되면, Jenkins에 `/web-hook/`가 전송되어 Jenkins의 Item(Job)이 Trigger되어 해당 Item(Job)을 수행합니다.
- Build에 정의한 Shell Script가 수행되어 아래와 같은 결과를 얻을 수 있습니다.
- 관련한 [Environment Variable](https://wiki.jenkins.io/display/JENKINS/Git+Plugin#GitPlugin-Configuration)을 보고싶으시면 해당 사이트에서 더 볼 수 있습니다.
```bash
+ echo GIT_COMMIT 5ea853076a700e3387970eb69c1c6d567d7193de
GIT_COMMIT 5ea853076a700e3387970eb69c1c6d567d7193de
+ echo GIT_PREVIOUS_COMMIT 20fb1ef9046c39ff6cff8e2df698360876428d92
GIT_PREVIOUS_COMMIT 20fb1ef9046c39ff6cff8e2df698360876428d92
+ echo GIT_PREVIOUS_SUCCESSFUL_COMMIT 20fb1ef9046c39ff6cff8e2df698360876428d92
GIT_PREVIOUS_SUCCESSFUL_COMMIT 20fb1ef9046c39ff6cff8e2df698360876428d92
+ echo GIT_BRANCH origin/master
GIT_BRANCH origin/master
+ echo GIT_LOCAL_BRANCH
GIT_LOCAL_BRANCH
+ echo GIT_URL https://github.com/Seolhun/test-jenkins/
GIT_URL https://github.com/Seolhun/test-jenkins/
+ echo GIT_COMMITTER_NAME testJenkins
GIT_COMMITTER_NAME testJenkins
+ echo GIT_AUTHOR_NAME testJenkins
GIT_AUTHOR_NAME testJenkins
+ echo GIT_COMMITTER_EMAIL testJenkins@testJenkins.com
GIT_COMMITTER_EMAIL testJenkins@testJenkins.com
+ echo GIT_AUTHOR_EMAIL testJenkins@testJenkins.com
GIT_AUTHOR_EMAIL testJenkins@testJenkins.com
```

---
#### 1. [Pipeline](https://jenkins.io/doc/book/pipeline/)이란?
- 여러 빌드 Slave에 걸쳐있을 수있는 장기 실행 활동을 구성합니다. Pipeline(이전에는 워크 플로우라고 함)을 구축하거나 자유 작업 유형에 쉽게 들어 가지 않는 복잡한 활동을 구성하는 데 적합합니다.
- Pipeline은 Jenkins 2.0부터 시작되었습니다. Pipeline은 스크립트를 통해 Pipeline의 흐름을 정의하는 기능입니다. Pipeline은 [Groovy](http://groovy-lang.org/)로 쉽게 정의할 수 있으며 Pipeline DSL을 통해 전달 파이프라인을 작성할 수 있습니다.

- 핵심 키워드
	- Pipeline
		- Pipeline(스크립트)은 Pipeline(프로세스)을 사용자가 직접 정의할 수 있는 Pipeline입니다.
	- Node
		- Node는 Jenkins 환경의 일부로 Pipeline을 실행시키는 시스템이라고 할 수 있습니다.
	- Stage
		- Stage block은 Pipeline의 상태/진행상태 등을 시각화하는 작업의 단계를 정의합니다.
	- Step
		- Step은 젠킨스가 특정 시점에서 해야 할 일을 정의합니다.
	- Declarative Pipeline fundamentals
		- Declarative Pipeline 구문에서 파이프 라인 블록은 전체 파이프 라인에서 수행 된 모든 작업을 정의합니다.
	- Scripted Pipeline fundamentals
		- 파이프라인의 핵심작업을 정의합니다..
		- **Pipeline의 작업을 노드 블록 내부로 한정하는 2가지 경우에 사용됩니다.**
			- 작업 큐에 항목을 추가/예약하여 Node에서 Executor가 사용 가능 해지자 마자 실행됩니다.
 			- SCM에서 Checkout 한 파일에서 작업을 수행 할 수있는 작업 영역을 만듭니다.

#### 2. Pipeline project로 설정하기
##### 1. Pipeline Project 만들기
<sub>
	<img src="./img/10-pipelineConfig1.jpg" alt="Build Trigger">
</sub>

##### 2. Build Trigger를 Github hook trigger로 설정합니다. 여기에 체크하는 것이 Github에 Services에 등록한 것과 연결이 됩니다.
<sub>
	<img src="./img/6-jenkinsGitConfig2.jpg" alt="Build Trigger">
</sub>

##### 3. Github에서 Pipeline Trigger
- [Pipeline SCM Step](https://jenkins.io/doc/pipeline/steps/workflow-scm-step/)은 여기서 더 알아볼 수 있습니다.
<sub>
	<img src="./img/10-pipelineConfig2.jpg" alt="Build Trigger">
</sub>
- Script Path에 Jenkinsfile로 Script를 정의했다고 알려주면, 해당 branch에 Jenkinsfile을 읽어 Script를 수행합니다.

##### 4. Jenkinsfile
- Jenkinsfile은 Pipeline을 정의하기 위한 Jenkinsfile 형식입니다. Jenkinsfile은 Declaretive, Scripted 모두 지원하며 지속적으로 Pipelines들을 전달하여 손쉽게 CI환경을 구축할 수 있습니다.
```groovy
node {
	// 1번 Stage
	stage('1. Clone sources with Git Plugin') {
		def gitValues = git credentialsId: 'JenkinsGithubUser', url:'https://github.com/Seolhun/test-jenkins.git'
		echo "GIT_COMMIT : ${gitValues.GIT_COMMIT}"
		echo "GIT_PREVIOUS_COMMIT : ${gitValues.GIT_PREVIOUS_COMMIT}"
		echo "GIT_PREVIOUS_SUCCESSFUL_COMMIT : ${gitValues.GIT_PREVIOUS_SUCCESSFUL_COMMIT}"
		echo "GIT_BRANCH : ${gitValues.GIT_BRANCH}"
		echo "GIT_LOCAL_BRANCH : ${gitValues.GIT_LOCAL_BRANCH}"
		echo "GIT_COGIT_URLMMIT : ${gitValues.GIT_URL}"
		echo "GIT_COMMITTER_NAME : ${gitValues.GIT_COMMITTER_NAME}"
		echo "GIT_AUTHOR_NAME : ${gitValues.GIT_AUTHOR_NAME}"
		echo "GIT_COMMITTER_EMAIL : ${gitValues.GIT_COMMITTER_EMAIL}"
		echo "GIT_AUTHOR_EMAIL : ${gitValues.GIT_AUTHOR_EMAIL}"
	}
	// 2번 Stage
	stage('2. Clone sources with SCM Step Plugin') {
		def gitValues = checkout scm
		echo "GIT_COMMIT : ${gitValues.GIT_COMMIT}"
		echo "GIT_PREVIOUS_COMMIT : ${gitValues.GIT_PREVIOUS_COMMIT}"
		echo "GIT_PREVIOUS_SUCCESSFUL_COMMIT : ${gitValues.GIT_PREVIOUS_SUCCESSFUL_COMMIT}"
		echo "GIT_BRANCH : ${gitValues.GIT_BRANCH}"
		echo "GIT_LOCAL_BRANCH : ${gitValues.GIT_LOCAL_BRANCH}"
		echo "GIT_COGIT_URLMMIT : ${gitValues.GIT_URL}"
		echo "GIT_COMMITTER_NAME : ${gitValues.GIT_COMMITTER_NAME}"
		echo "GIT_AUTHOR_NAME : ${gitValues.GIT_AUTHOR_NAME}"
		echo "GIT_COMMITTER_EMAIL : ${gitValues.GIT_COMMITTER_EMAIL}"
		echo "GIT_AUTHOR_EMAIL : ${gitValues.GIT_AUTHOR_EMAIL}"
	}
	// 3번 Stage
	stage('Build') {
		echo 'Building...'
	}
	// 4번 Stage
	stage('Test') {
		echo 'Testing...'
	}
	// 5번 Stage
	stage('Deploy') {
		echo 'Deploying...'
	}
}
```
- Jenkinsfile 분석
	- 참고사항 
		- [Jenkins Pipeline Git](https://jenkins.io/doc/pipeline/steps/git/) 
			- [Jenkins Git Plugin](https://plugins.jenkins.io/git)
		- [Jenkins Pipeline SCM step](https://jenkins.io/doc/pipeline/steps/workflow-scm-step/) 
			- [Jenkins Pipeline:SCM Step Plugin](https://plugins.jenkins.io/workflow-scm-step)
	1. 1번 Stage
		- Git Plugin을 사용하여 Github에 접근합니다. **해당 Job에 credentials를 정의하고 credentialId 변수를 줌으로써 정상작동합니다.**
	2. 2번 Stage
		- Pipeline:SCM Step Plugin을 사용하여 Github에 접근합니다. **해당 Job에 credentials 정의하고 선택해야 기능이 정상작동합니다.**
	3. 나머지 스테이지는 각 기능 별로 필요한 기능을 정의하여 사용할 수 있습니다.
		- [Jenkins Global Variables](https://qa.nuxeo.org/jenkins/pipeline-syntax/globals)
			- WORKSPACE 등 다양한 Jenkins 전역 변수를 통해 Artifact 등에 접근하여 Test 및 Deploy를 실행할 수 있습니다.

- 해당 Jenkins 파일을 실행하면 아래와 같은 결과가 나옵니다.
```bash
GIT_COMMIT : 6be818a0007ce1b07bec3426d610314e89e1c52b
GIT_PREVIOUS_COMMIT : 0ffbbe45b353aa46a048df4aaabd1257c00d79ba
GIT_PREVIOUS_SUCCESSFUL_COMMIT : 0ffbbe45b353aa46a048df4aaabd1257c00d79ba
GIT_BRANCH : origin/master
GIT_LOCAL_BRANCH : null
GIT_COGIT_URLMMIT : https://github.com/Seolhun/test-jenkins
GIT_COMMITTER_NAME : testJenkins
GIT_AUTHOR_NAME : testJenkins
GIT_COMMITTER_EMAIL : testJenkins@testJenkins.com
GIT_AUTHOR_EMAIL : testJenkins@testJenkins.com
```

## 7. 기타 및 추가사항
#### [1. Jenkins Blue Ocean](https://jenkins.io/projects/blueocean/)
- Jenkins의 Pipeline을 다양하게 보고 조작할 수 있는 UI/UX를 최신으로 제공해줍니다.
<img src="./img/7-etc-blueOcean.jpg">

#### 2. Credentials를 이용하기 전 주의 사항
- 참고자료
	- [Jenkins Git Plugin Credential Issue1](https://issues.jenkins-ci.org/browse/JENKINS-32417)
	- [Jenkins Git Plugin Credential Issue2](https://groups.google.com/forum/#!msg/jenkinsci-users/MkSJvvNFQCk/DAYdcIKaCAAJ)

- 결론
	- User Credential이 System이 운영하는 Job 구성에 나타나서는 안되기 때문에 Job에서 Credentials가 모두 보이지 않는 것은 결함이 아닌 것으로 보는게 맞습니다.
	- User Credential을 매개 변수화하면 User Credentials을 올바르게 표시할 수 있습니다. 작업을 빌드 할 때 사용자에게 속한 자격 증명을 성공적으로 선택할 수 있습니다.

#### 3. Credential을 이용하여 Github 인증하기(Private Repository)
- Jenkins는 Github Service에 등록하여 Webhooks와는 잘 연결이 되었습니다. 하지만, 추가적으로 Private Repository에 접근하기 위해서는 인증과정이 필요합니다.

##### 1. Username with Password
- Github 계정 아이디(Eamil/Name)와 비밀번호로 인증합니다.
- Jenkins Item(Job)에 credentials에 설정하면 해당 Github Repository와의 연결을 인증할 수 있습니다.

<p> - Credentials를 생성할 때 보이는 ID가 credeintalsId에 입력되는 값입니다.</p>
<img src="./img/selectCredential.jpg" alt="Build Trigger">
- 위처럼 정의한 credentials에 ID는 아래 Pipeline Script 정의에서 `credentialsId`로 작동됩니다.
	- Private Repository의 경우 사용됩니다.

##### 2. Secret Text : Oauth2 Token 받기
1. Oauth2 Token 생성하러 가기
	- Settings > Developer settings > Personal access tokens
	<img src="./img/8-oauth2Token1.jpg" alt="Oauth2 Token1">
2. Oauth2 Token 생성하기
	<img src="./img/8-oauth2Token2.jpg" alt="Oauth2 Token2">
3. Oauth2 Token 권한 설정
	<img src="./img/8-oauth2Token3.jpg" alt="Oauth2 Token3">
4. Oauth2 Token 값 받기
	- 해당 값을 credentials로 생성시, `Secret Text`에 입력하여줍니다.
	<img src="./img/8-oauth2Token4.jpg" alt="Oauth2 Token3">

##### 3. Credentials를 Binding하여 Pipeline에서 이용하기
- 참고사항
	- [Credentials Binding Plugin](https://jenkins.io/doc/pipeline/steps/credentials-binding/)
```groovy
node {
	stage('1. Clone sources with Git Plugin') {
		def gitValues = git credentialsId: 'JenkinsGithubUser', url:'https://github.com/Seolhun/test-jenkins.git'
		echo "GIT_COMMIT : ${gitValues.GIT_COMMIT}"
	}
	stage('2. Clone sources with SCM Step Plugin') {
		def gitValues = checkout scm
		echo "GIT_COMMIT : ${gitValues.GIT_COMMIT}"
	}
	stage('Binding Credentials') {
		// credentials block with Github Username/Password
		withCredentials([usernamePassword(credentialsId: 'JenkinsGithubUser', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
			echo "$GIT_USERNAME"
			echo "$GIT_PASSWORD"
	}

		// credentials block with GithubToken
		withCredentials([string(credentialsId: 'JenkinsGithubToken', variable: 'TOKEN')]) {
			echo "$TOKEN"
		}
	}
	stage('Build') {
		echo 'Building...'
	}
	stage('Test') {
		echo 'Testing...'
	}
	stage('Deploy') {
		echo 'Deploying...'
	}
}
```
- withCredentials를 통해 해당 블록에서 추가적인 Credentials를 적용할 수 있습니다.
	- 해당 값들은 ****로 출력될뿐 정상값으로 사용됩니다.

## 결론
Jenkins 설치부터 Github 연결, 그리고 Pipeline까지 다양하게 알아봤습니다. 특히, Jenkins와 Git(Github)를 연결하여 `Code > Build`가 일어나는 과정을 알아보았습니다. `Build Trigger`가 되어 해당 코드들이 Build/Test가 되는 과정은 생략되었습니다만, 해당 Script 혹은 Item 별로 각 Stage에 적절한 Pipeline을 구현해준다면 Build/Test까지도 구현가능 할 수 있습니다.

이번 과정을 통해 Jenkins와 Git(Github)를 통해 끊임없이 코드가 빌드/테스트/통합 등 일련의 과정을 머리 속에 그리실 수 있었을 것이라고 생각합니다. 또한, FreeStyle과 Pipeline의 변화를 보며, Jenkins 2.0부터 큰 변화라고 느끼실 수 있었을 것입니다. 이전의 방식(Freestyle)으로는 코드가 없어 재사용이 전혀 없고 추가/수정 마다 큰 어려움 있었습니다. 하지만, Pipeline을 통해서는 해당 흐름을 모두 코드로 정의할 수 있게 되어 재사용성 및 가독성 모두가 좋아졌습니다. 거기다가 BlueOcean이라는 뛰어난 UI/UX 플러그인을 통해 대부분의 기능들을 쉽게 적용시킬 수 있습니다. 이 외에도 Jenkins에서 Docker를 사용하여 Build/Test System의 환경을 자동화할 수 있는 부분이 더 많아습니다. 또한, 이를 통해 Node 별 분산 시스템 구현도 예전보다 쉬워졌으리라 판단합니다.

마지막으로, 지그재그 팀은 Jenkins를 이용해 자동화 CI 과정을 확대하려고 노력하고 있습니다. 개발 과정 속에서 Test의 중요성은 매번 강조해도 부족하다고 생각합니다. CI 시스템을 통해 놓치기 쉬운 부분들을 빨리 Catch해서 큰 문제로 귀결되는 것을 방지하기 위한 지그재그의 노력을 개발팀 블로그를 통해 지속적으로 공유하도록 노력하겠습니다. 해당 포스트가 도움이 되기를 바랍니다. 감사합니다.

## References
- [Jenkins](https://jenkins.io/)
- [Jenkins Blue Ocean](https://jenkins.io/projects/blueocean/)
- [Jenkins with Github](https://jenkins.io/solutions/github/)
- [Meet Jenkins Wiki](https://wiki.jenkins.io/display/JENKINS/Meet+Jenkins)
- [What is Jenkins from InfoWorld](https://www.infoworld.com/article/3239666/devops/what-is-jenkins-the-ci-server-explained.html)
- [Continuouse Integration vs Continuouse Delivery](https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd)
- [Thoughtworks - CI](https://www.thoughtworks.com/continuous-integration)

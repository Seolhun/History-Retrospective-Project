
# Continuouse Integration with Jenkins and Github
- Author : [SeolHun](https://github.com/Seolhun/)

## Intro
> Continuous Integration doesn’t get rid of bugs, but it does make them dramatically easier to find and remove. — Martin Fowler, Chief Scientist, ThoughtWorks

CI 툴을 이용한다는 것은 위 인용한 글 처럼, `손 쉽게 버그를 찾고 제거하기 위함`일 것입니다. 현재 지그재그도 Jenkins를 이용하여 CI를 운영하고 있으며, 최근에는 Storybook으로 UI를 테스트할 수 있는 시스템을 추가하였습니다. 앞으로도 지그재그는 자동화 CI 시스템을 확대할 예정입니다. 이번 포스트를 시작으로 CI 관련한 내용을 지속적으로 공유하고자 합니다.

## 목표
이번 포스트에서는 Jenkins와 Github 연결하는 방법을 알아보고 간단히 테스트하는 예제를 다룰 예정입니다. 

#### - 3가지 목표
1. CI와 CD의 차이점을 이해한다.
2. Jenkins와 Git(Github)를 연결해야하는 이유를 이해한다.
3. 그리고, 어떻게 설정하는지 이해한다.

#### - 목록
1. CI란 무엇인가?
2. Jenkins란?
3. Jenkins 설치
4. Jenkins 기본 설정
5. 새로운 Item(Job) 만들기
6. Jenkins와 Github 연결하기
7. Jenkins, Github에 인증하기
8. 기타 및 추가사항

## Pre-Requirement
- Ubuntu 16.04
	- 다른 운영체제도 상관없지만 이번 포스트 내용은 Ubuntu 16.04를 기준으로 작성되었습니다.
- Java 8
- Git
- Jenkins

## Contents
<img src="../img/Github-Jenkins.jpg" width="970" height="400" alt="Jenkins - Github">

## 1. CI란 무엇인가?(Continuous Integrate)
- Continuous Integrate, Continuous Delivery, Continuous Deploy
<sub>
	CI(Integrate)와 CD(Delivery), CD(Deploy)의 차이점이 헷갈리신다면 아래 그림을 통해 쉽게 이해할 수 있습니다.
	<img src="../img/CICD.jpg" width="970" height="400" alt="CI(Continuouse Integration) vs CD(Continuouse Delivery) vs CD(Continuouse Deploy)">
</sub>

위 그림을 통해 이번 포스트와 가장 연관된 부분은 `Code`와 `Build`, `Integrate` 부분입니다. 요즘 대부분이 Git(Github)을 통해 코드 버전관리를 하고 있으며, 이 부분이 `Code`, `Integrate`에 해당되는 내용입니다. 엄밀히 보면 `Build`, `Test`, `Delivery`, `Deploy` 과정이 Jenkins가 담당하는 부분입니다.

즉, Jenkins와 Git(Github)를 연결하는 방법에 대해 설명한다는 것은 `Code`, `Build`, `Test`, `Integrate` 과정을 설명하는 것과 같다고 할 수 있습니다. 이것이 Jenkins로 CI 구축하기 첫 주제로 선정한 이유입니다.

## 2. Jenkins란?
- Jenkins는 2004년에 썬 마이크로시스템즈에서 시작된 소프트웨어이며, 지속적인 통합과 테스트를 위해 Kawaguchi Kohsuke에 의해 만들어졌습니다.
- Jenkins는 개발 작업을 자동화할 뿐 아니라, 파이프라인(Pipeline)을 사용해 거의 모든 언어와 소스코드 Repositroy에 대해 지속적인 통합(CI)과 전달(CD) 환경을 구축하기 위한 간단한 방법을 제공합니다.
- Jenkins가 각각의 단계에 대한 스크립트 작성의 필요성을 없애주지는 않지만, 사용자가 쉽게 구축할 수 있는 것보다 더 빠르고 더 강력하게 빌드(Build), 테스트(Test), 그리고 배포(deployment) 등 체인 전체를 통합할 수 있는 방법을 제공해 줍니다.

- 특징 및 기능
    - 쉬운 설치
    	- `java -jar jenkins.war`, `brew`, `apt-get`, `yum` 등 다양한 운영체제에서 손쉽게 설치 할 수 있으며 추가적인 데이터베이스 설치도 필요없습니다.
    - 쉬운 설정
    	- GUI 및 Pipeline을 통한 Script 작성을 통해 손 쉬운 설정을 할 수 있습니다.
    - 풍부한 플러그인/확장성
    	- Jenkins는 다양한 플러그인을 여러가지 기능을 사용 할 수 있으며 확장할 수 있습니다. - [Jenkins plugins](https://wiki.jenkins.io/display/JENKINS/Plugins)
    - 분산 빌드 시스템
    	- Jenkins는 운영체제 상관없이 빌드/테스트 서버를 여러대로 나누어 운영할 수 있습니다.(Master - Slave)
    - 테스트 보고서 생성
    - 실행 결과 통보
    	- Email 및 다양한 plugin을 통해 Slack 등과 통합할 수 있습니다.
    - 산출물 저장소에 산출결과 저장/보관
    	- Code와 Artifact 등을 모두 보관하며, 유지기간 등을 설정할 수 있습니다.

 - 핵심 키워드
 	- Item(Job)
 	- Executor
 	- Stage - Node
 		- Master - Slave
 	- SCM(Source Code Management)
 		- Git, SVN, etc...
 	- Build Tool
 		- Maven, Gradle, Ant, make, Npm, etc...
 	- Test Tool
 		- JUnit, Mocha, Jest, etc...

## 3. Jenkins 설치를 위한 3가지
#### Java 설치
- Jenkins는 자바로 구현되어 Java가 필요(Servlet container)합니다. Java는 8버전을 설치하도록 합니다. 
- Java 9 버전을 아직 100% 지원하지 않아 몇 가지 에러가 발생합니다. Plugin설치로 해결이 가능할 것으로 보이지만 몇가지 이슈가 제기된 것으로 보입니다. 안정적인 Jenkins 사용을 위해 Java 8 버전을 설치하겠습니다.
	- [Which tool support Java 9](https://www.infoworld.com/article/3234470/java/which-developer-tools-support-javas-new-modularity-features.html)
	- [How to Install Multiple Java on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04#managing-java)

```bash
$ java -version
openjdk version "1.8.0_151"
OpenJDK Runtime Environment (build 1.8.0_151-8u151-b12-0ubuntu0.16.04.2-b12)
OpenJDK 64-Bit Server VM (build 25.151-b12, mixed mode)
```

#### Git 설치
- Jenkins가 SCM(Source Code Management)로 사용 할 Git이 필요합니다.
```bash
sudo apt-get install git
```

#### Jenkins 설치
- Jenkins를 구동시키기 위해서는 Jenkins가 설치되어있는 서버가 필요합니다. Jenkins 설치와 관련한 내용은 잘 정리되어 있는 글이 많기에 추가적으로 작성하지는 않았습니다. 설치가 필요하신 분들은 아래 링크를 통해 Jenkins를 설치하시기 바랍니다.
	- [How to Install Jenkins on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-16-04)

3가지 모두 설치를 완료하고 Admin 첫 계정을 생성하면 아래와 같은 그림을 볼 수 있습니다.
<sub>
	Jenkins에 오신 것을 환영합니다.
	<img src="../img/1-firstJenkins.jpg" width="970" height="500" alt="Init Jenkins">
</sub>

## 4. Jenkins 기본 설정
Jenkins 관리에 들어가면 많은 항목을 볼 수 있습니다. 그 중 지금 저희에게 필요한 것은 3가지 입니다.

#### 1. Global Tool Configuration
- Jenkins가 실행될 때 필요한 기본 Tool들을 설정하는 곳입니다. 
- 현재 JDK, Git, Gradle, Ant, Maven, Docker 총 6개가 있습니다. Build에 필요한 package들을 설치하여 경로를 설정해주는 곳입니다.
<sub>
	우리는 JDK와 Git을 아래와 같이 설정해줍니다.
	<img src="../img/2-globalToolConfig.jpg" width="970" height="500" alt="Jenkins Git Plugins">
</sub>

#### 2. 시스템 설정
- 서버관련 환경, 플러그인, 스크립트, 알림 등 다양한 Jenkins 관련 시스템 설정을 할 수 있는 곳입니다.
<sub>
	Git config에 기본적으로 필요한 name과 email을 기본적으로 설정해줍니다.
	<img src="../img/3-systemGitPlugin.jpg" width="970" height="100" alt="Jenkins Git Plugins">
</sub>

#### 3. 플러그인 관리
- 말 그대로 플러그인 설치/삭제/업데이트 등 플러그인을 관리할 수 있는 곳입니다.
<sub>
	참고로 Jenkins에서 기본적으로 제안하는 설치를 하면 Git Plugin이 자동으로 설치됩니다. 기본적으로 설치되는 Git Plugins는 아래 그림으로 확인할 수 있습니다.
	<img src="../img/4-defaultGitPlugins.jpg" width="970" height="250" alt="Jenkins Git Plugins">
</sub>

## 5. 새로운 Item(Job) 만들기
Jenkins로 해당 Item(Job)을 정의하는 곳입니다. 개인적으로 Jenkins의 Item(Job)을 쉽게 정의할 수 있는 방법은 크게 2가지입니다.
1. GUI로 설정하기 (Freestyle)
2. Script로 설정하기 (Pipeline)
- 즉, 가장 간단하게 이용할 수 있는 것은 `Freestyle project`와 `Pipeline`이라고 할 수 있습니다.

#### 1. Freestyle project
- 어느 빌드 시스템과 어떠한 SCM(형상관리)로 묶인 프로젝트를 빌드할 수 있습니다.
- GUI 시스템을 통해 대부분의 설정을 할 수 있습니다. 
- Freestyle을 이용하는 가장 좋은 방법은 하나의 프로젝트를 기본적인 설정을 구성하기 위해 사용하는 것입니다. 구성 후 Github와 Pipeline(Jenkinsfile)으로 Pipeline을 정의하여 프로젝트에 맞게 CI를 사용하는 것입니다.

#### 2. Pipeline
- 여러 빌드 Slave에 걸쳐있을 수있는 장기 실행 활동을 구성합니다. 파이프 라인(이전에는 워크 플로우라고 함)을 구축하거나 자유 작업 유형에 쉽게 들어 가지 않는 복잡한 활동을 구성하는 데 적합합니다.
- Pipeline은 Jenkins 2.0부터 시작되었습니다. Pipeline은 스크립트를 통해 파이프라인의 흐름을 정의하는 기능입니다. Pipeline은 Groovy로 Script를 쉽게 정의할 수 있으며 Pipeline DSL을 통해 전달 파이프라인을 작성할 수 있습니다.

- Pipeline 장점
	1. 코드로 작성되기 떄문에 어디에서든 재사용이 가능하고
	2. 추가/수정이 수월하고,
	3. 개발자 간 의사소통을 수월하게 만들어줍니다.

Pipleline의 장점에도 불구하고 이번 포스트에서는 Freestyle만을 이용하여 설명합니다. 다음에 Pipeline을 주제로 예제와 함께 글을 작성하도록 하겠습니다. 추가적으로 Pipleline 관련한 사항을 더 보고싶으면 여기를 눌러주세요. [Jenkins - Pipeline](https://jenkins.io/doc/book/pipeline/)

#### Freestyle project로 이름을 설정하여 만들어줍니다.
<sub>
	Freestyle은 GUI로 간편하게 이용 할 수 있으며, 다양한 플러그인도 쉽게 적용됩니다.
	<img src="../img/5-freestyleJob.jpg" width="970" height="500" alt="FreeStyle Item">
</sub>

## 6. Jenkins와 Github 연결하기
위에서 만들었던 Freestyle project로 들어가 Github 설정을 아래와 같이 해줍니다.

#### Git Repository를 연결합니다.
<sub>
	Item(Job)에 Git Repository 설정
	<img src="../img/6-jenkinsGitConfig1.jpg" width="970" height="400" alt="Git Repository">
</sub>

#### Build Trigger를 Github로 설정합니다.
<sub>
	Item(Job)에 Build Trigger 설정
	<img src="../img/6-jenkinsGitConfig2.jpg" width="970" height="200" alt="Build Trigger">
</sub>

- Jenkins와 Github를 연결하기 위해서는 [JENKINS/GitHub+Plugin](https://wiki.jenkins.io/display/JENKINS/GitHub+Plugin)이 사용됩니다. Github Plugin은 Upgrade되면서 Jenkins와 Github가 Trigger되는 이름이 바뀌었으며, 설정하는 방법도 조금 바뀌었습니다.
	- 이름 
		- Old name
			- ~~Previously named as "Build when a change is pushed to GitHub"~~
		- New name
			- GitHub hook trigger for GITScm polling
	- 방법
		- Old
			- ~~이전에는 push가 되면 자동으로 Repository 소스를 pull하여 Build trigger가 작동되었습니다.~~ 하지만, 깃허브의 보안정책으로 인해 추가작업이 필요해졌습니다.
				- [관련 깃허브 보안사항 - About Two-Factor Authentication](https://help.github.com/articles/about-two-factor-authentication/)
		- New
			- 새로운 방법에는 Jenkins를 해당 Github Repository 서비스로 등록해야 합니다.

## 7. Jenkins, Github에 등록/인증하기
#### Jenkins, Github Webhook 서비스로 등록하기
- `Integrations & Services`에 Jenkins를 등록하면 해당 Url에 맞게 `Webhooks`에 Integrations & Services 설정 값이 자동으로 저장됩니다. Webhooks에 저장이되면 Integrations & Services에 있던 설정은 삭제됩니다.
- 이전에는 Token 값 혹은 Username과 Password로만 Webhooks가 지원되었지만, 이제는 CI 서버와 Github Repository를 명시적으로 연결하여야지만 정상작동됩니다.

아래와 같은 방법으로 해당 Repsitory에 Jenkins 서비스를 등록하여줍니다.

<sub>
	1. Jenkins와 연동 할 Repository Setting
	<img src="../img/7-gitServiceJenkins1.jpg" width="970" height="300" alt="Build Trigger">
</sub>

<sub>
	2. Jenkins와 연동 할 Repository에 Webhooks 서비스 등록하기
	<img src="../img/7-gitServiceJenkins2.jpg" width="970" height="300" alt="Build Trigger">
</sub>

<sub>
	3. Jenkins와 연동 할 Repository에 Webhooks 서비스 등록하기2
	<img src="../img/7-gitServiceJenkins3.jpg" width="970" height="600" alt="Build Trigger">
</sub>

- 위와 같이 Webhooks를 설정하면, **Public Repository는 추가적인 인증 없이 Jenkins와 Repository가 연동되어 Build Trigger가 정상작동됩니다.**
- 주의사항
	1. Jenkins 서버 URL이 적합하지 않으면 정상작동되지 않습니다.
	2. URL 마지막에 `/github-webhook/`을 붙여주지 않아도 정상작동되지 않습니다.
	
#### Credential을 이용하여 Github 인증하기 - Private Repository에 대한 접근이 필요한 경우
<sub>
	Credential 등록
	<img src="../img/8-credential.jpg" width="970" height="400" alt="Build Trigger">
</sub>

- Jenkins를 Github Service에 등록하여 Webhooks는 잘 연결이 되었습니다. 하지만, 추가적으로 Private Repository에 접근하기 위해서는 인증과정이 필요합니다. 인증방법에는 쉽게 이용할 수 있는 3가지 방법이 있습니다.

1. Username with Password
**Username with Password** : Github 계정 아이디와와 비밀번호로 인증한다.
- Username과 Password는 가장 최후의 방법이라고 할 수 있습니다. 노출 시 바로 보안문제와 연결되기 떄문입니다.
- Jenkins Item(Job)에 설정하면 해당 Repository와의 연결을 인증할 수 있습니다.

2. Secret Text : Oauth2 Token
**Secret Text** : Oauth2 Token 값으로 인증한다.
<sub>
	Oauth2 Token 값 받기1
	<img src="../img/8-oauth2Token1.jpg" width="970" height="300" alt="Build Trigger">
</sub>

<sub>
	Oauth2 Token 값 받기2
	
	<img src="../img/8-oauth2Token2.jpg" width="970" height="300" alt="Build Trigger">
</sub>

<sub>
	Oauth2 Token 값 받기3
	<img src="../img/8-oauth2Token3.jpg" width="970" height="500" alt="Build Trigger">
</sub>

3. Jenkins 서버 Github에 공개키로 만들기
[Jenkins 서버 Github에 공개키](https://git-scm.com/book/ko/v1/Git-%EC%84%9C%EB%B2%84-SSH-%EA%B3%B5%EA%B0%9C%ED%82%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0) 만드는 방법
```bash
$ sudo passwd jenkins
$ su jenkins
$ ssh-keygen
$ cd /var/lib/jenkins/.ssh/
$ cat id_rsa.pub 
```
- 위와 같은 명령어로 Jenkins가 설치되어있는 서버에 jenkins ssh-key를 발급하여 아래 Github dpeloy key 값에 등록하여 줍니다.
<sub>
	SSH-Key 등록하는 곳
	<img src="../img/9-publicKey.jpg" width="970" height="500" alt="Build Trigger">
</sub>

## 8. 기타 및 추가사항
1. Github Plugins
2. Pipeline
3. Jenkins Blue Ocean

## Outro
현재 지그재그는 CI(Continuouse Integration) 툴로 Jenkins를 사용하고 있습니다. Jenkins를 통해 Android, iOS, Server, Client 별 빌드/테스트를 통해 소프트웨어 품질 및 안정성을 높이기 위해 노력하고 있습니다.
지그재그 개발팀은 DevOps를 추구하고 있지만, 코드리뷰와 UI 테스트 등 직접 개발자가 리뷰/테스트 해야하는 과정을 거친 후 배포를 하기 때문에 CI 툴을 통한 100% 자동화 CD(Continuouse Delivery/Deploy)까지는 사용하지 않고 있습니다. 
배포는 코드리뷰와 UI테스트(UI 수정 시)가 문제가 없다면 각자 개발자들이 직접 배포할 수 있는 환경을 구축하였습니다. 앞으로 지그재그 개발팀은 테스트 자동화 과정을 지속하여 확대하려고 노력하고 있습니다. 이와 관련된 내용은 개발팀 블로그를 통해 지속적으로 공유하도록 노력하겠습니다. 감사합니다.

## References
- [Jenkins](https://jenkins.io/)
- [Jenkins Blue Ocean](https://jenkins.io/projects/blueocean/)
- [Jenkins with Github](https://jenkins.io/solutions/github/)
- [Meet Jenkins Wiki](https://wiki.jenkins.io/display/JENKINS/Meet+Jenkins)
- [What is Jenkins from InfoWorld](https://www.infoworld.com/article/3239666/devops/what-is-jenkins-the-ci-server-explained.html)
- [Continuouse Integration vs Continuouse Delivery](https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd)
- [Thoughtworks - CI](https://www.thoughtworks.com/continuous-integration)

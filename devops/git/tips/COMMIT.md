# How to PR with Commit
- speaker : [송태웅](https://github.com/namhyung/uftrace)
- at : 5th SOSCON(Hands on Workshop)

## 오픈소스란 무엇인가?

1. Git이 필요한가 
  - Need vs Wants
  - 오픈세상에서는 Git이 Need
2. Commit 단위는 어느정도가 적당하고 좋은가?
  - git blame $fileName 같은 blame을 사용하였을 경우에 보여지는 로그에 대해서 생각해보아야 한다.
3. Issue/Discussion이 없으면 오픈소스라고 할 수 없다
  - ex) 리누스 토발즈가 Merge, Push 권한이 있다고 새로운 기능을 함부로 개발하지 않는다. - 오픈소스 문화를 퇴색시킬 수 있기 때문에...
4. How to make a bug rpoert
  - Environments
  - Error message
  - When, Why hapeen?


## 오픈소스 협업구조

- Fork의 필요성
  - local과 remote의 확실한 이해가 필요하다
- Commit Message는 어떻게 작성할것인가?
  1. 발생 배경
  2. **발생 이유 (80%)** : How에 대한 배경인데, 이는 코드에서 보이지 않기 때문에 글로 자세히 표현되어야 한다.
  3. 해결 방법 (20%) : Why에 대한 해결방법은, 이미 코드에 존재하고 있기 때문에, 간략하게 적어준다.
    - Best Practice는 코드에 대한 변화사항을 이미지 혹은 코드(결과) 비교로 보여주는 것이 제일 좋다.
  4. 1,2 번을 Body에 3번을 Description에 넣는다.
  5. Git과 관련된 Issue가 있다면 Issue 번호 혹은 Commit Hash id를 적어준다.
    - ex) Fixed #100
    - ex) It is related to the commit 5367er32 ("fs ext4: Add the B featur...")
  6. 관련 정보와 부가정보를 함께 기록한다.
    - CC: Email
    - Reviewed-By(Approved-By): Email 혹은 Name
    - ...
    - CLA(Contributor License Agreement) 등록(라이센스 관련)
- Rebase 잘 사용하기
- Force Push 조심하기, Revert를 잘 활용하기

## 실습하기
다른 세션을 위해 생략

## PS
uftrace 오픈소스를 기반으로 설명하였기에 해당 오픈소스 커밋터이신 `송태웅`님께서 발표하였습니다.

---

# Behind the OpenSource
- speaker : [박재성](https://github.com/netil) - Naver Frontend
- at : 5th SOSCON(Hands on Workshop)

## 스피커의 오픈소스란?
물 위에서 헤엄치는 오리와 같다. 끊임없이 움직여야 한다.

## 오픈소스의 시작
Stallman과 Netscape의 오픈소스화를 위해 시작

1. 기업에서 외부로
2. 새로운 비지니스의 시작
3. 개인 또는 그룹으로부터

## 지속성의 유지
1. 3개월마다 정기 릴리스
2. 커밋 또는 activity는 매일 발생하기 위해 노력
3. 이슈에 대한 빠른 답변

## 지속성의 어려움
1. 코드 외적인 단순 대응 질문이 생각보다 많다
2. 단순 질문에 대한 기준정립이 어렵다 - ex) 이정도는 알 것 같은데...
3. 재정적인 어려움
4. 오픈소스에 대한 사용자들에 잘못된 사고(Issue에 대한 욕설 등등)
5. Maintainer를 제외한 적은 참여율

## 의존성의 문제
`left-pad`의 문제, 11줄의 코드로 의존성을 가진 몇천개의 프로젝트를 마비시켰다.

## How to monetize?
- 비용과 멀어질 수 없다는 것을 인정하고, 이를 생각해야 한다.
- 기업에 소속되어 개발
  - 비지니스에 도움되는 프로젝트 메인터너 고용 혹은 그렇게 운영
  - 80% 리눅스 개발자는 회사에 소속되어 개발한다.
- Sponsor and Investment
  - KICKStarter : 크라우드펀딩
  - PATREON : 창작자를 후원
  - open collective : 모금된 돈의 사용성을 투명하게 공개
  - TIDELIFT : 메인터넌스 지속을 위한 서브스크립션 모델
- 추가적인 비지니스 운영
  - 클라우딩 서비스 등(CDN, SaaS, ...등) 

## Outro
- Consumer가 아닌 Contributor의 시각으로 전환이 필요하다.
- 쉬운 것부터, 버그 리포팅으로 Contributor를 시작.
- 문제를 해결할 수 있는 PR로 시작.


# W1

Date: Sep 09, 2019 → Sep 14, 2019
Tags: W1

## Learning Notes

---

## **Hoon**

### - #1 Using Prototypes to Explore Project Ideas

#### Moments

- **Start by understanding the needs behind the project**
- **Use wireframes to set expectations about functionality**
  - The point of rapid prototyping is to reduce distance between everyone involved in a project: both between developer and client, and between client and customer.
- **Set up a live test system as soon as you start coding**
  - You aren’t gonna need it (YAGNI) — A design principle that says functionality should not be added until it’s truly necessary to do so.
  - you remember two important points: `none of those details matter right now, and it’s time to get some lunch!`
- **Check your assumptions early and often**
- **Limit the scope of your work as much as possible**

#### Inspired

- 프로젝트의 목적을 정확히 이해하고, 문제를 해결하기 위한 올바른 정의가 중요하다.
- wireframe을 사용하는 것은, 가시적인 디자인을 통해 목적에 대한 공유와 얼라인이 쉽게 얘기할 수 있기 때문이며, 이러한 공유를 통해 건설적인 토론을 할 수 있기 때문이다.
- 이미 외국에서는, 설계나 고민없이 코딩하는 사람들을 기피하는 문화가 있다고 한다. 즉, 우리에게 정말 필요한 것인지, 그 기능이 도움이 되는지 목적에 부합한지를 파악하고 코딩하는 것이 얼마나 중요한지를 알 수 있다.
- 공유의 중요성은, 추측하는 부분을 줄일 수 있으며, 우리의 목적에 맞게 부합될 수 있는지를 토론할 수 있기 때문이다. 그렇기에 자주 피드백과 열려있는 결과를 체크하라고 한다.
- 정의를 올바르게 하고, 제한된 리소스안에서 한계를 인지하고 집중해야 한다. 핵심에 집중해야 한다.

#### Applying

- 현재 진행하는 프로젝트의 wireframe을 공유하며, 중요한 것에 집중하여 문제를 해결해보자.
- 프론트엔드는 디자인과 같이 개발을 하다보면, 작은 것에 매몰되는 경우가 많다. 구글 사이트도 디자인보다는 기능에 중점을 두고있다. `YAGNI`를 자주 떠올려보자.
- Issue를 만들어서 쉽게 공유하고 토론해보자. 토론과 공유로 인해 PR과 feature 출시가 늦어지는 것이 아니라면, 프로세스를 더 생각해보자.
- 그러한 Issue가 개선되면, 우리의 목적을 달성할 수 있는지 체크리스트를 만들어보자.

### - #2 Spotting Hidden Dependencies in Incremental Changes

- **Avoid non-essential real-time data synchronization**

#### Inspired

- 불필요한 동기화는 서로의 리소스를 많이 낭비하기도하며, Context의 혼동을 만들기도 한다. 비동기적으로 공유하고 의견을 나눌 수 있는 프로세스가 필요하다.

#### Applying

- 매주 요일을 정해서 필요한 논제에 대해서 정리하고, 작은 것들은 Task management 툴을 통해서 비동기적으로 의사소통해보자. 글을 작성하는 것이 길어진다면, 글의 포맷을 줄여보자.

#### Applying

- 현재 진행하는 프로젝트의 wireframe을 공유하며, 중요한 것에 집중하여 문제를 해결해보자.
- 프론트엔드는 디자인과 같이 개발을 하다보면, 작은 것에 매몰되는 경우가 많다. 구글 사이트도 디자인보다는 기능에 중점을 두고있다. `YAGNI`를 자주 떠올려보자.
- Issue를 만들어서 쉽게 공유하고 토론해보자. 토론과 공유로 인해 PR과 feature 출시가 늦어지는 것이 아니라면, 프로세스를 더 생각해보자.
- 그러한 Issue가 개선되면, 우리의 목적을 달성할 수 있는지 체크리스트를 만들어보자.

#### Moments

#### Inspired

- **HS**
  - #1
    - Moments
      - 프로젝트 설계 시 와이어프레임 활용
    - Inspired
      - 예전에 앱서비스에 추천 페이지를 만들 때 각각 모든 상황에 대한 페이지 화면 기획을 받았고 회의를 여러번 거쳐 각각의 세부사항에 대해 서로 의견을 공유한 후에 개발을 시작했는데도 불구하고 나중에 결과물이 나올 때 기획자가 의도한 결과와 제가 이해한 시나리오 결과가 달라 추가 공수가 많이 들어간 기억이 떠올랐습니다. 와이어프레임을 이용해 각각의 시나리오를 바로바로 알아볼 수 있게 가시적으로 정리가 되었다면 그러한 공수의 손실을 최소화시킬 수 있었다고 생각하게 되었습니다.
  - #2
    - Moments
      - "가장 유명한 글"을 사이드바에 넣기 위한 데이터 로직의 실시간 동기화를 위해 헤비하게 로직을 돌릴 필요는 없다 ⇒ 적절한 수준에서의 타협
    - Inspired
      - 물론 항상 정확성이 높은게 중요한 역할이긴 하지만 퍼포먼스와 코드품질과 타협해야할 때가 있다. 유저가 거의 알아차리지도 못하는 data sync를 위해 다른 중요한 문제들도 있는데 무리하게 실시간으로 맞추려다 보면 더 많은 에러를 동반한 퍼포먼스 등 문제도 발생할 수 있다고 생각합니다. 예전 군 시뮬레이션 장비에도 초당 수천번의 데이터 수신을 그대로 받아 전시를 했었는데 퍼포먼스에 너무 무리가 와서 유저가 판단할 수 있을 정도로 수신 및 변경횟수를 줄여 프로그램의 퍼포먼스를 개선한 적이 있었던 기억이 있습니다.
    - Applying
- **Tim**
  - #1 : 챕터별 소제목의 순서를 한눈에 본다면 **Using prototypes to explore project ideas** 챕터에 대한 분명한 이해를 할 수 있을 것으로 보여집니다.
    - Moments :
      - **Start by understanding the needs behind the project**
      - **Use wireframes to set expectation about functionality**
      - **Set up a live test system as soon as you start coding**
      - **Discuss all defects, but be pragmatic about repairs**
      - **Check your assumptions early and often**
      - **Limit the scope of your work as much as possible**
      - **Remember that prototypes are not production systems**
      - **Design features that make collecting feedback easy**
    - Inspired
      - 프로토타이핑의 구성에 있어서의 전체 프로시져를 살펴보면,
        - 프로젝트의 이면에 있는 요구사항에 대한 명확한 이해로 부터 출발 : `명확한 정의`
        - 와이어프레임을 이용한 기대하는 기능성들에 대한 설정 및 확인 : `손에 잡히는 기능`
        - 코딩하면서부터 실제 테스트 시스템의 구성 : `코딩 초기부터 테스트`
        - 모든 버그들에 대해 논의하되, 실용주의적으로 수정해 나가기 : `버그 확인 및 리스팅은 확실하게`, 그러나 `수정은 점진적으로 계획성` 있게!
        - 기존의 가정들이 맞는지에 대해 빠르게, 자주 확인 하기 : `빠른 주기의 애자일?`
        - 가능한 많이 작업 스코프에 대해 한계를 정하기 : `Task는 잘게 쪼개기`, `Task의 정의는 명확하게`
        - 프로토타입은 실제 프로덕션 시스템이 아님을 숙지하기 : 프로토타입은 프로토타입일 뿐
        - 피드백의 수집이 쉬운 피쳐들로 디자인 하기 : `사용자 피드백 및 Tracking툴 적용을 고려한 디자인`
      - 프로젝트의 이면에 있는 요구사항에 대한 명확한 이해에서 개발을 시작해야 하는 것은 제가 평소에 하는 용어로는 `'명확한 정의'`에 해당하는데, 이것이 프로토타이핑의 시작임을 확인할때, **문제에 대한 보다 명확한 정의가 있을 때만이 문제를 구체화하고, 그것을 풀어낼 때도 더 깊은 단계까지 발라내서**, 궁극적으로 **문제 해결에 더 쉽게 다가간다**고 생각합니다.

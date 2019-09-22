# W1

Date: Sep 15, 2019 → Sep 22, 2019
Tags: W1

## Learning Notes

---

- **Hoon**

## Identifying the Pain Points of Service Integrations

- #1
  - Moments
    -  It’s important to add regression tests for all discovered defects, no matter how small they seem.
	- It’s worth looking into using a better exception reporter that rolls up similar fail‐ ures rather than sending out an alert for each one.
  - Inspired
    - 아마 외부 서비스로 인해 문제를 겪었던 것은, React의 버전업 때문이었습니다. React가 새로운 혁신적인 기능을 내놓았고, 이로인해 과거에 사용되던 함수가 Deprecated되었습니다. 지원 버전은 16.8까지였는데, 차후에 서비스 성장을 위해서도 해당 함수를 전부 변경해야했습니다. 이 작업을 하면서 조금씩 함수형 프로그래밍에 장점을 알게되었고, 테스트코드가 이전보다 아주 조금은 올라갔던 기억이 있습니다.
    - 다른 경험으로는 이전 회사에서 Authentication페이지를 새로 개편할 때, 테스트 코드를 같이 작성하였습니다. 기존에 있었던 문제를 해결하기 위함이 가장 컸고, 에러가 많이 발생되었기 때문에, 이를 테스트 하기 위함이었습니다.
    - E2E 테스트를 작성하였는데, E2E 테스트 작성은 새로운 서비스를 만드는 것에 4~70% 만큼의 작업이 요구됩니다. 즉 쉬운 작업은 아닙니다. 하지만, 해당 작업을 완료하였을 때, 간단한 함수 수정에서 오류가 생겼음에도 불구하고 에러를 쉽게 방지 할 수 있었습니다. 이 외에도 많은 방어법이 있지만, 테스트 코드를 통해서 도움을 많이 받을 수 있었습니다.
  - Applying
    - 가끔씩 얘기하지만, 오픈소스를 사용하는 것을 한번 더 Wrapping하자는 제안을 했던 적이 있습니다. 모든 오픈소스를 Wrapping 할 수는 없겠지만 그 이유는, 해당 챕터와 관련된 이유였습니다. 에러를 컨트롤 하려면 외부 라이브러리도 우리 코드처럼 한번 더 감싸여서 작성될 필요가 있기 때문이라고 판단하기 때문입니다.
    - 최근에는 Green Keeper나 깃허브 유로모델에 위험을 알려주는 서비스들이 많은 도움이 되고 있습니다. 이러한 기능들을 잘 확인해보는 것도 좋을 것 같습니다.
    - 각 오픈소스들은 구독도 가능하고, 대부분 유명한 프로젝트는 오픈 채널들이 많이 열려있습니다. 해당 채널을 통해 이야기를 나누어보는 것도 좋을 것 같습니다.

## Developing a Rigorous Approach Toward Problem Solving

- #2
	- Moments
  	- Work part of the problem by hand before writing code
  	- Validate your input data before attempting to process it
	- Inspired
  	- 코드를 작성하기 전에 손으로 직접 작성한다는 것은 대단한 가치를 지니고 있습니다. 특히 UI를 먼저 그려보고 어떻게 작업할지를 생각해보면 Component단위에서는 많은 도움이 됩니다. 그리고, 각각의 페이지의 구성에 있어서도 1챕터에 wireframe처럼 많은 가시적인 도움을 얻을 수 있어서 중요합니다.
  	- 또한 Input값에 대한 Validation은 너무나 중요합니다. 특히, 유저와 인터랙션하는 프론트는 해당 값들을 잘 정제하고 관리해야지만, 프로그램의 문제가 없고 데이터도 올바르게 받을 수 있기 때문입니다. 이러한 필요한 기능들을 잘개 쪼개고, 리스트를 만들면 테스트코드를 작성할 떄에도 많은 도움이 됩니다.
	- Applying
  	- 이번 내용도 결국은 테스트코드와 연관이 깊습니다. 테스트코드를 작성하는 습관을 길들이는 것이 가장 중요할 것 같습니다. 테스트 커버리지를 수치화하여 측정하고 OKR로 팀과 회사에 얘기해보는 것도 좋을 것 같습니다.
  	- 릴리즈가 11월로 미루어졌지만, 생각보다 빠듯하다는 걸 알게되었습니다. 원래 테스트코드도 짜면서 리뉴얼 중이었지만, 기능함수 제외하고는, UI 테스트코드를 조금 미뤄야되겠다는 결론을 얘기나누었습니다. 이 방법을 잘 해결하기 위해서는 올바른 스펙정의와 간단한 필수 테스트코드들을 빠르게 작성하는 것이 가장 현명한 해결책이 될 것 같습니다.


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

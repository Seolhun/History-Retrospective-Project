## - 2019 Golas
- Books
  - 프론트엔드 개발자를 위한 JavaScript 완독/정리
  - JavaScript 함수형 프로그래밍 공부
  - HTTP 완벽가이드 완독/정리
- Projects
  - 개인 프로젝트(hi-cord) 개발/릴리즈
  - Localize-Component 개발/릴리즈
  - D3(vx 참고)를 이용한 Chart/TableComponent 개발/릴리즈

## The Growth Goals
#### - Static Goal
- 매일 1시간씩 책 독서하기
  - [x] 일
  - [x] 월
  - [ ] 화
  - [ ] 수
  - [ ] 목
  - [ ] 금
  - [ ] 토
- 격주 1회 블로그 작성하기
  - [ ] 2 주차
  - [ ] 4 주차
- 주 2~3회 운동하기
  - [x] 1. 월요일
  - [ ] 2.
  - [ ] 3

#### - Daily Checklist
- 할 일과 한 일 비교 점검/회고
  - [ ] 일
    - [ ] Static Goal 점검/회고
    - [ ] Growth 기록
  - [x] 월
    - [x] Static Goal 점검/회고
    - [x] Growth 기록
  - [ ] 화
    - [ ] Static Goal 점검/회고
    - [ ] Growth 기록
  - [x] 수
    - [x] Static Goal 점검/회고
    - [x] Growth 기록
      - ReactRouter
  - [x] 목
    - [x] Static Goal 점검/회고
    - [x] Growth 기록
  - [ ] 금
    - [ ] Static Goal 점검/회고
    - [ ] Growth 기록
  - [ ] 토
    - [ ] Static Goal 점검/회고
    - [ ] Growth 기록

## What did I do for a week?
### [ ] Router v4/Authentication Migration Markdown SlideShow 만들기
  - 코드 문제 - 나는 무엇을 처리하는가?
    - Landing에 airbridge-front를 위한 HardCoding
  - 배포 문제 - 나는 어디로 가는가?
    - 로그인은 하나인데, DashBoard는 여러개(?), 그러나, 결국 데이터는 같다.
      - 띠용? 절망, 이건 뭔 개소리야...
  - Alert - 아직끝이 아니다.
    - Slack - 아마 횟수를 적어달라고 할것이다...(?)
      - 따용? 시발, 이건 너무 하잖아
  - 해결책
    - 없는 페이지는 Not-Found로
    - 권한이 없어도 Not-Found로 - 보안 문제
      - ex) github
      - Google,
        - 너가 잘못했지만  고쳐줬어.
      - 좋은 서비스는 잘못된 것을 알려주고 조언해주는 것.
  - 결론
    - 좋은 코드는 '분리', '명확', '추상화'
      - 프로그래머는 “추상화에 의존해야지, 구체화에 의존하면 안된다.”
    - 결론, 고쳐주지 말고 안전하고 안전하고 안전하게 알려주는 좋은 서비스를 만들자.
### [x] Layout & Router V3 > V4 (ABR-1208)
  - Why
    - Layout에서 HoC패턴으로 필요조건을 사전에 처리 하지 않는 문제
    - 해당 State의 변동에 따른 하위 Page에 랜더링이 반복되어 API가 여러번 호출되는 현상
    - 과거 Token의 Expired date가 존재하지 않음.
  - How to
    - HoC Pattern
    - Layout 분기
    - expired date가 1일로 변경되고, 해당 값을 refreshed가 될 수 있도록 변경
    - Layout > WrapperRouter (Auth > App > DashBoard)
      - Layout (Auth > App)
        - isLogined
      - WrapperRouter (App > DashBoard)
        - subdomain
        - isValidPermission
        - userPermission
### [x] SignIn/Up Migration From Homepage to Airbridge (ABR-1210)
  - Why
    - SignIn의 처리를 Airbridge가 아닌 Landing에서 처리하므로써 Airbridge 내에서 컨트롤되지 않는 Redicrect가 발생
    - 쿠키 및 다른 Stoage 값들이 외부 프로젝트에 의존되어 이를 직접 수정할 수 없음
  - How to
    - Migration SignIn/Up
    - Router 분기를 통한 Dynamic Router 분기

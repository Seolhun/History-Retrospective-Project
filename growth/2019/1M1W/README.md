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
  - [ ] 일
  - [ ] 월
  - [ ] 화
  - [ ] 수
  - [ ] 목
  - [ ] 금
  - [ ] 토
- 격주 1회 블로그 작성하기
  - [ ] 2 주차
  - [ ] 4 주차
- 주 2~3회 운동하기
  - [ ] 1
  - [ ] 2
  - [ ] 3

#### - Daily Checklist
- 할 일과 한 일 비교 점검/회고
  - [ ] 일
    - [ ] Static Goal 점검/회고
    - [ ] Growth 기록
  - [ ] 월
    - [ ] Static Goal 점검/회고
    - [ ] Growth 기록
  - [ ] 화
    - [ ] Static Goal 점검/회고
    - [ ] Growth 기록
  - [x] 수
    - [x] Static Goal 점검/회고
    - [x] Growth 기록
  - [ ] 목
    - [ ] Static Goal 점검/회고
    - [ ] Growth 기록
  - [ ] 금
    - [ ] Static Goal 점검/회고
    - [ ] Growth 기록
  - [ ] 토
    - [ ] Static Goal 점검/회고
    - [ ] Growth 기록

## What did I do for a week?
- Layout & Router V3 > V4 (ABR-1208)
  - Why
    - Layout에서 HoC패턴으로 필요조건을 사전에 처리 하지 않는 문제
    - 해당 State의 변동에 따른 하위 Page에 랜더링이 반복되어 API가 여러번 호출되는 현상
    - 과거 Token의 Expired date가 존재하지 않음.
    -
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
- SignIn/Up Migration From Homepage to Airbridge (ABR-1210)
  - Why
    - SignIn의 처리를 Airbridge가 아닌 Landing에서 처리하므로써 Airbridge 내에서 컨트롤되지 않는 Redicrect가 발생
    - 쿠키 및 다른 Stoage 값들이 외부 프로젝트에 의존되어 이를 직접 수정할 수 없음
  - How to
    - Migration SignIn/Up
    - Router 분기를 통한 Dynamic Router 분기

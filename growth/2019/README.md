# Seolhun GROWTH
- Author : [SeolHun](https://github.com/Seolhun/)
- Refer :[GROWTH-Histories](https://seolhun.github.io/tags/GROWTH/)

---

## Golas
- 2019
  - Books
    - 프론트엔드 개발자를 위한 JavaScript 완독/정리
    - JavaScript 함수형 프로그래밍 공부
    - HTTP 완벽가이드 완독/정리
  - Projects
    - 개인 프로젝트(hi-cord) 개발/릴리즈
    - Localize-Component 개발/릴리즈
    - D3(vx 참고)를 이용한 Chart/TableComponent 개발/릴리즈
- 2018
  - 프론트엔드 개발자를 위한 JavaScript 완독/정리
  - HTTP 완벽가이드 완독/정리
  - JavaScript 함수형 프로그래밍 공부
  - NginX 강의/정리/테스트

---

## Actions

### Airbridge

#### [x] Storybook (ABR-1214)
- Why
  - UI Prototype과 정보제공
  - Browser를 통한 비개발자들에 UI/UX 테스트
  - Designer와 Front-End 개발 사이에서 오는 격차 해소
- What
  - Configuration
    - Knobs
    - Info
    - ...
  - [Guideline](https://www.notion.so/ab180/Storybook-Guideline-d63aefa2efee4a1f8d75116ced7cecc7)

#### [x] Layout & Router V3 > V4 (ABR-1208/1210)
- Why
  - Layout에서 HoC패턴으로 필요조건을 사전에 처리 하지 않는 문제
  - 해당 State의 변동에 따른 하위 Page에 랜더링이 반복되어 API가 여러번 호출되는 현상
- How to
  - HoC Pattern
  - Layout 분기
  - Error handling

#### [x] SignIn/Up Migration From Homepage to Airbridge (ABR-1210)
- Why
  - SignIn의 처리를 Airbridge가 아닌 Landing에서 처리하므로써 Airbridge 내에서 컨트롤되지 않는 Redicrect가 발생
  - 쿠키 및 다른 Stoage 값들이 외부 프로젝트에 의존되어 이를 직접 수정할 수 없음
- How to
  - Migration SignIn/Up
  - Router 분기를 통한 Dynamic Router 분기

#### [x] i18n Management and Enhancement (ABR-1305)
- For management i18n wordings easily. 
- For sharing and managing Airbridge Dashboard wording materials.

> [i18n Management SpreadSheet - 1.0.0 Beta](https://docs.google.com/spreadsheets/d/1DgvZZxqG81rS7Q8zhwwnZ8qPPc_7Bd3znqGP-frPuLA/edit#gid=0)

#### [x] Exception Page (ABR-1307)
- Error, NotFound, Un-authorized를 구분하여 처리
- Action CallBack이 필요하여 Redux Observable에 setState 함수와 비슷한 액션 구성.

#### [x] HelperUtils 개선 (ABR-1089)
- Array
- 방어적인 코드 작성으로 Native prototype을 확장 할 예정.
  - Functions
    - _log
    - removeDuplication
    - uniqWith


#### [ ] CircleCI Process 개선 (No-Tickets)
- [x] CircleCI Configuration 개선
  - 현재 PR 완료하였으나, 다른 작업과 브랜치 전략에 따라 Pending...
  - Based on Branch and driven Test

---

### [x] AB180 Landing
- Slide Page
- Responsive Web app
- Progressive Web app

---

### Airbloc
- Hermes (Project) - **DEPRECATED**
  - Stacks
    - Webpack
    - Lerna
    - Typescript
    - Docz
  - Why
    - Connecting with Airbloc Protocol and SDK
  - What
    - Thridparty Library

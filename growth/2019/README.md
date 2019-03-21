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
- UI Prototype과 정보제공
- Browser를 통한 비개발자들에 UI/UX 테스트
- Designer와 Front-End 개발 사이에서 오는 격차 해소

#### [x] Layout & Router V3 > V4 (ABR-1208/1210)
- 에러처리 문제가 발생되는 부분 해결
- 프로젝트 밖으로 리다이렉트 되는 현상 해결
- 프로젝트 구조 개선으로 API 호출 제한 및 유효성 검사 추가

#### [x] Exception Page (ABR-1307)
- Error, NotFound, Un-authorized를 구분하여 처리
- Action CallBack이 필요하여 Redux Observable에 setState 함수와 비슷한 액션 구성.

#### [x] SignIn/Up Migration From Homepage to Airbridge (ABR-1210)
- SignIn의 처리를 Airbridge가 아닌 Landing에서 처리하므로써 Airbridge 내에서 컨트롤되지 않는 Redicrect가 발생
- 쿠키 및 다른 Stoage 값들이 외부 프로젝트에 의존되어 이를 직접 수정할 수 없음
- 프로젝트에 Authentication이 되어, 프로젝트의 독립성 확보 및 기능 안정화

#### [x] i18n Management and Enhancement (ABR-1305)
- 다국어 설정 엑셀 정리
- 다국어 i18n 메세지 관련 코드 정리

> [i18n Management SpreadSheet - 1.0.0 Beta](https://docs.google.com/spreadsheets/d/1DgvZZxqG81rS7Q8zhwwnZ8qPPc_7Bd3znqGP-frPuLA/edit#gid=0)

#### [x] HelperUtils 개선 (ABR-1089)
- 기본 내장된 함수를 개선함으로써 필요한 기능의 통일성 추가
- 불필요한 함수들 사용하지 않는 함수들 정리
- 테스트 코드 작성하여 안정성 도모 및 문서화

#### [ ] CircleCI Process 개선 (No-Tickets)
- [x] CircleCI Configuration 개선
  - 현재 PR 완료하였으나, 다른 작업과 브랜치 전략에 따라 Pending...
  - Branch 전략에 따른 배포가 될 수 있도록 구성

#### [ ] TimeLag Minor Fixed
- Drawer 설정 관련 코드 통일
- TimeLag 속도 개선 25% (비동기호출 병렬화)

#### AB180 Landing
- AB180 랜딩페이지 설계 및 구축
- 공통 모듈 개발 및 전체적인 설정 개발 주도
- 현범님이랑 같이 작업하며 작업 팀 리드

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

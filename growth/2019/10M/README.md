# - 2019 Golas

- Periods : 190902 ~ 190930

---

## The Growth Objectives

- Books
  - 프론트엔드 개발자를 위한 JavaScript 완독/정리
  - JavaScript 함수형 프로그래밍 공부
  - HTTP 완벽가이드 완독/정리
- Projects
  - hi-cord 개발/릴리즈
    - Backend API
      - Auth
      - Post
      - Recomendation
    - FrontEnd
      - Homepage
      - Dashboard
  - Localize-Component 개발/릴리즈
  - D3(vx 참고)를 이용한 Chart/TableComponent 개발/릴리즈

### - Routine Key Results

- 매일 1시간씩 책 독서하기
- 월 1회 블로그 작성/정리하기
- 주 2회 운동하기
- 개발사항 Changed Log 작성하기

---

## Company part

### 디자인 & 프론트엔드 Theme 미팅


#### 2W ~ 3W

- GraphQL 모델링 및 사용 개선 - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/38)
  - [x] Update GraphQL Models in Client -> BDGraphQLModel
  - [x] Queries, Fragments, Mutations
  - [ ] GraphQL 모든 파일 변경
- Router Paths 변경에 대한 토론 및 개선 - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/37)
  - [x] Check the side effects comparing past products
  - [ ] Change Route Paths based on User
- Profile 개발 - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/36)
  - [x] Profile Meeting (16 ~ 15)
  - [ ] Profile main page development
    - [ ] 새로운 URL 변경안 적용하기
    - [ ] Profile Form 및 Link Detail 구현하기
    - [ ]  Profile Pages
      - [ ]  참여자 프로필 페이지 (메인 페이지)
        - [x]  구독중인 대회
        - [x]  최근 대회 기록
        - [x]  태깅된 영상
        - [x]  유저가 등록한 경기(없으면 최근 3경기)
        - [ ]  예외 페이지
          - [ ]  에러 경우
          - [ ]  데이터 없는 경우
          - [ ]  비공개인 경우
          - [ ]  기존 유저 프로필 작성 유도 Confirm 창
      - [ ]  주최자 페이지
        - [ ]  진행중인 대회
        - [ ]  지난 대회
        - [ ]  예외 페이지
          - [ ]  에러 경우
          - [ ]  데이터 없는 경우
      - [ ]  프로필 입력/수정 Form
        - [ ]  개인 프로필
          - [ ]  대표대회 5개 Confirm 창
          - [ ]  SNS/Stream 최대 3개 Confirm 창
        - [ ]  주최자 프로필
          - [ ]  대회 진행시 삭제 불가 Confirm 창
          - [ ]  주최자 프로필 삭제시 계정 삭제 안내 Confirm 창
          - [ ]  권한 양도 Confirm 창
        - [ ]  알림 설정
        - [ ]  개인 정보/보안
          - [ ]  회원 탈퇴 페이지
          - [ ]  회원 탈퇴 Confirm 창
    - [ ] Component bd-ui로 분리하기
    - [x] 필요한 API 정리하기
- Embed Share Code  - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/44)
  - [x] 기존 프로덕트에서 Embed Code Migration
  - [x] Migration 완료 후 코드/스타일 수정
  - [x] 대회 페이지 Route 변경
  - [ ] 대진표 코드 정리 이후 Embed Share 마무리하기
- 언어 추출 Google Spread 기능 개발 - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/34)
  - [x] DataController - Google Spread Client interface - Google API 호출용
  - [x] DataParser - JSON 파일을 Google Spread 형식으로 파싱
  - [x] DataBuilder - Create Interface variables fuctions with Google Spread
  - [ ] Google Spread 데이터 범위를 나타내는 range function 재정의
  - [ ] CSV > JSON으로 변경하는 리버스파서 만들기
- JSCONF
  - [x] JS-CONF Summary 작성/공유하기

#### 1W

- Color 미팅 내용 정리 - [Issue Link](https://github.com/ejnkr/bd-ui/issues/116)
  - [x] 채널과 Notion에 공유
  - [x] Color System on Storybook
- Grid 개선 - [Issue Link](https://github.com/ejnkr/bd-ui/issues/107)
  - [x] Offset 적용
  - [x] 모바일용 Display none 추가

---

## Localized Component

- [x] Grid System
- [x] Shadow Box
- [x] Typing
- [ ] Carousel
- [ ] Form Group

## Seolhun blog

- [x] Renewal Main Pages
- [ ] Add canvas for variety figures
- [ ] Split Grid components
- [ ] Add FormGroup Builder Scripts

---

## Hi-Cord

### - API

- [x] Develop and Deploy `Post` API
- [ ] Deployment (Considering `Serverless(SaaS) or Instance(PaaS)`)
  - [ ] How to manage Scraper `Cron and Instances, Cluster`
- [ ] Consider `Token Module`...(What kind of Token We need)
- [ ] Develop and Deploy `User and Github API Module`

### - Frontend

- [ ] Develop Hi-Cord Homepage
- [ ] Develop Hi-Cord Engines

## Hi-Cord-Scrapers

### - Engines

- [x] Scraper with Post API.
- [ ] Test Cron jobs

### - Carlo Window UI

- [ ] Carlo UI를 통한 윈도우 앱 개선

### - Utils

- [ ] FileUtils
  - [ ] Response to JSON
  - [ ] Converting JSON to CSV or reversing.

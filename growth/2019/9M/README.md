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

#### 2W

- GraphQL 모델링 및 사용 개선 - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/38)
  - [ ] Update GraphQL Models in Client -> BDGraphQLModel
  - [ ] Queries, Fragments, Mutations
- Router Paths 변경에 대한 토론 및 개선 - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/37)
  - [ ] Change Paths based on User
  - [ ] Check the side effects comparing past products
- Profile 개발 - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/36)
  - [x] Profile Meeting (16 ~ 15)
  - [ ] Profile main page development
    - [x] 필요한 API 정리하기
      - ProfileMain
        - [ ] 구독중인 대회
        - [ ] 최근 대회 기록
        - [ ] 태깅된 영상
        - [ ] 유저가 등록한 경기(없으면 최근 3경기)
    - [ ] Component 분리하기
  - [ ] Etc...
- 언어 추출 Google Spread 기능 개발 - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/34)
  - [x] DataController - Google Spread Client interface - Google API 호출용
  - [x] DataParser - JSON 파일을 Google Spread 형식으로 파싱
  - [x] DataBuilder - Create Interface variables fuctions with Google Spread
  - [ ] Google Spread 데이터 범위를 나타내는 range function 재정의
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
- [ ] Carousel
- [ ] Form Group
- [ ] Typing

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

- [ ]Develop Hi-Cord Homepage
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

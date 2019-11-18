# - 2019 Golas

- Periods : 1901101 ~ 1901130

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

#### BackLog

- 언어 추출 Google Spread 기능 개발 - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/34)
  - [x] DataController - Google Spread Client interface - Google API 호출용
  - [x] DataParser - JSON 파일을 Google Spread 형식으로 파싱
  - [x] DataBuilder - Create Interface variables fuctions with Google Spread
  - [ ] Google Spread 데이터 범위를 나타내는 range function 재정의
  - [ ] CSV > JSON으로 변경하는 리버스파서 만들기

- **검색 페이지**
  - [ ] 게임 명품관 페이지
  - [ ] 각 대회 페이지에 대한 SEO 검색

- Layout 스타일 개선
  - Fixed Layout시 footer와 header의 영향을 받아 스타일링이 깨지는 문제가 발생
    - [ ] Style Hierarchy 문제를 해결하고 zIndex에 대한 값 정의 필요
    - [ ] Padding으로 Content Body의 양을 조절하는 부분 수정 필요

- TimeZone 기능
  - Region, My Time, Localization 등에 대한 논의가 필요

- Game Content Quration - Trffic Drivent By CEO (Chanjae Park)
  - Issue Content
    - 롤드컵이 끝났다던가 등에 대한 것

#### InProgress

- **Components - (BD-UI)**
  - [x] BDSpinner
  - [x] BDRadioButton
  - [x] BDDropdownSearch
  - [x] BDDatePicker
  - [x] BDDrawer
  - [x] BDProgress
    - [ ] Gradient Path and Stop
  - [ ] BDCropper
    - 원래 사진에서 각각의 영역을 선택할 수 있는 방법으로 변경할 필요가 있다

- **Embed Share Code - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/44)** - [2일]
  - [x] 기존 프로덕트에서 Embed Code Migration
  - [x] Migration 완료 후 코드/스타일 수정
  - [x] 대회 페이지 Route 변경
  - [x] 대진표 코드 정리 이후 Embed Share 마무리하기
    - [x] 대회 모바일 Mobile경우 Share에 해당되는 Dom영역이 사라지므로 모바일에서 사용되는 영역에 Modal을 추가로 넣어줘야 함

- Validation Form Hook 만들기 - [1일]
  - **formik hooks 기반**
    - [ ] UI & Validation Hooks Functions
  - 수정 페이지
    - [ ] 접수 페이지 개선
    - [ ] 하이라이트 페이지 개선

- **하이라이트 페이지 개발** - [3일]
  - [x]  하이라이트 메인 페이지
  - [x]  하이라이트 카드 개발
  - [ ]  하이라이트 대시보드(업로드/수정) 페이지
    - [ ]  하이라이트 영상 수정
    - [ ]  하이라이트 영상 업로드

- **대회 접수 페이지** - [4일]
  - [x] 페이지 및 데이터 확인
  - [x] 작업물 산출
  - [x] 접수 페이지 개발
      - [x] 약관 동의
      - [x] 개인전
      - [x] 개인전 신청 확인
      - [x] 참가 접수
          - [x] 팀전 - 팀 선택
          - [x] 팀원
          - [x] 팀 생성
          - [x] 팀 생성 후 참가
          - [x] 팀전 확인
      - [x] 개인전
      - [x] 개인전 정보 수정
          - [x] 취소 팝업
          - [x] 수정 불가
      - [x] 개인전 체크인
          - [x] 진행
          - [x] 체크인 전
          - [x] 체크인 후
      - [x] 참가 접수 관리
          - [x] 팀장
          - [x] 팀 관리 팝업
          - [x] 팀 정보 수정
          - [x] 팀원
          - [x] 팀 탈퇴
      - [ ] 대회 진행 정보

- **검색 페이지** - [4일]
  - [ ] 검색 Dropdown
    - [x] 검색 추천 아이템
      - [x] 게임
      - [x] 대회
      - [x] 유저
      - [x] 주최자
  - [x] 대회 검색
    - [x] 검색 조건
    - [x] 대회 리스트
  - [x] 검색 페이지
    - [x] 게임 카테고리 카드
    - [x] 대회 카드
    - [ ] 유저 카드
    - [ ] 주최자 카드
  - [ ] 검색 반응형 UI 수정 필요
    - Layout의 계층, 스타일 등에 문제로 구현의 어려움이 있음, Layout의 개선으로 수정 필요

- **Profile 개발 - [Issue Link](https://github.com/ejnkr/bd-frontend/issues/36)** - [5일]
  - [x] Profile Meeting (16 ~ 15)
  - [ ] Profile main page development
    - [x] 새로운 URL 변경안 적용하기
    - [x] Profile Form 및 Link Detail 구현하기
  - [ ] Profile 관련 Component bd-ui로 분리하기 (Container는 제외)
  - [ ] Profile Pages
    - [ ] 각 계정에 대한 **수정 권한 확인 로직 개선**
    - [ ] 참여자 프로필 페이지 (메인 페이지)
      - [x] 구독중인 대회
      - [x] 최근 대회 기록
      - [x] 태깅된 영상
      - [x] 유저가 등록한 경기(없으면 최근 3경기)
      - [x] 예외 페이지
        - [x] 에러 경우
        - [x] 데이터 없는 경우
        - [ ] 비공개인 경우
          - [ ] **비공개  Profile Column 추가되어야 함**
        - [x] 기존 유저 프로필 작성 유도 Confirm 창
          - [x] **프로필 작성 여부 정의 -** @Sang Hyun Bing
      - [ ] 주최자 페이지
        - [x] 진행중인 대회
        - [x] 지난 대회
        - [x] 예외 페이지
          - [x] 에러 경우
          - [x] 데이터 없는 경우
      - [ ] 프로필 입력/수정 Form
        - [x] 개인 프로필
          - [x] 이미지 Cropper 구현
            - [x] **Cropper Component로 구현한 뒤에 적용**
          - [x] 대표대회 5개 Confirm 창
          - [x] SNS/Stream 최대 3개 Confirm 창
        - [ ] 주최자 프로필
            - [x] 대회 진행시 삭제 불가 Confirm 창
            - [x] 주최자 프로필 삭제시 계정 삭제 안내 Confirm 창
            - [x] 권한 양도 Confirm 창
        - [ ] 알림 설정
            - [ ] API 확인
        - [x] 개인 정보/보안
            - [x] 회원 탈퇴 페이지
            - [x] 회원 탈퇴 Confirm 창
            - [ ] API 확인

- 대회 진행 관리 - [1 + 1 + 1 + 2 + 1 + 5 + 3 = 14일 + @]
  - 공통 사용 - [1일]
    - [ ] 관리자 모드 버튼
    - [ ] 대회 진행 관리 페이지
    - [ ] 대회 기간 정보 Container
    - [ ] 대회 진행 Controller Container
  - 대회 상태 별 페이지
    - [ ] 대회 준비 중 - [1일] 
      - [ ] 대회 기간 정보/수정
      - [ ] 대회 진행 Controller
      - [ ] 대회 관리자 및 대회 수정 Text Button Container
    - [ ] 참가 접수 중 - [1일]
      - [ ] 대회 기간 정보/수정/비활성화
      - [ ] 트게더 광고 베너 만들기
      - [ ] 접수 돌아가기, 강제진행 경고만들기
        - [ ] 데이터 Create/Update/Delete(Cancel) 확인/요청하기
    - [ ] 대회 시작 대기 중 - [2일]
      - 대진표 작성 완료 전
        - [ ] Match 만들기/수정/확인 Text Button Container
        - [ ] 돌아가기(접수 재시작) / 대진표 확인 / 시드 확인 등 프로세스 경고창
          - [ ] 데이터 Create/Update/Delete(Cancel) 확인/요청하기
      - 대진표 작성 완료 및 체크인 상태
        - 체크인 리스트
    - [ ] 대회 시작 - [1일]
      - [ ] 대회 시작 전 마지막 체크 사항
        - [ ] 대진표 바로가기
        - [ ] 시드 설정 바로가기
        - [ ] 공지사항 바로가기
      - [ ] 대회 시작 경고 팝업 (대회 시작은 일정에 맞게만 진행 가능)
    - [ ] **대회 진행 중 페이지** - [5일]
      - [ ] 링크 복사
      - [ ] 대진표 보기
      - [ ] 매치목록 보기
        - [ ] **대진표/매치목록 상세보기/입력 팝업**
          - 채팅 기능
          - 이미지 업로드
          - 시스템 메세지
      - [ ] 스테이지 진행
        - 대회 스테이지 진행 팝업
    - [ ] **대회 점수 입력** - [3일]
      - [ ] 각 대회 종류 별 입력

#### Done
- None

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

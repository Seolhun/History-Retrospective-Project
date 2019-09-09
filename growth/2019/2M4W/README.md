# - 2019 Golas
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
  - [x] 화
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

#### - Weekly Checklist
- 할 일과 한 일 비교 점검/회고
  - [ ] 일
    - [ ] 이번주 Growth 기록
  - [ ] 토
    - [ ] 저번주 Static Goal 점검/회고

## What did I do for a week?
### [x] - ABR-1208/1210
- Rebase
  - Actual Report와 그 외 다수 변화사항이 많아 Merge로 해결
- [ ] Release Doc 작성하기
  - [ ] 페이지 랜더링 속도 계산하기
    - 네트워크 지연시간, 페이지 로드 시간, 로드 전체과정
    ```js
      // https://developer.mozilla.org/ko/docs/Security/MixedContent
      console.log(`lazy : ${performance.timing.responseEnd - performance.timing.fetchStart}`);
      console.log(`loadTime : ${performance.timing.loadEventEnd - performance.timing.responseEnd}`);
      console.log(`allLoadTime : ${performance.timing.loadEventEnd - performance.timing.navigationStart}`);
    ```
  - [ ] 개인정보 수정 확인하기
  - [ ] Error, Un-authroized, Not Found 개선하기

### [x] - Rebased Cypress
- Actual Report와 그 외 다수 변화사항이 많아 Merge로 해결

### [x] ABR-1208 랜더링 속도 비교
- [ABR-1208 랜더링 속도 비교](https://docs.google.com/spreadsheets/d/1HbduNMEMQVl4G0nPHAWQHDnaxWthiV3tWmcHL8irLHg/edit#gid=0)

#### 전제 조건
- Surge 이용하기
  - Cloud Front가 있는 airbridge.io와 비교하는 것은 조건이 적합하지 않아. 둘다 서지에 배포하여 테스트
- 배달의 민족 Default Actaul Report 사용
- 로그인한 유저가 `/d/#/app/BaedalMinjok2/reports/actual`에 바로 들어올 때의 속도 측정

#### Refs
- [Performance Analysis Reference](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)
- [자바스크립트 실행 속도 개선](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution)
- [네비게이션 타이밍을 이용한 페이지 로딩 속도 측정하기](https://www.html5rocks.com/ko/tutorials/webperformance/basics/)

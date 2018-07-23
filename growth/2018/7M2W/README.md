# 2018 7월 2주차
- Author : [Seolhun](https://github.com/Seolhun)
- Date : 20180709 ~ 20180713

## 개인 작업 목표 리스트
#### Hi-Cord
- Scraper 추가 개선하기
  - Scraper에 대한 Robot.txt 관련사항 읽어보기
  - AWS 비용만 내지 말고 만들자!!!! 돈낭비 하지말자!!
- React, Redux-saga를 이용한 프론트엔드도 같이 개발하기
  - SignIn, SignUp
  - Scraper Target List/Subscripton 기능 만들기
- Materialize CSS를 이용하여 Static 사이트 만을기
  - 강의 참조하고, 코드 분석해보기

## ABR 작업 리스트
- RxJS, Observable 사용양 늘리기
- API V3 개선사항 반영하기
  - 로그 Export DashBoard 기획서 분석하기
    - 어떠한 Component를 재사용할 것인가?
- TableComponent 개선하기

#### To do List
- [x] **ABR-242**
  - Redux Type 분리
    - REQUEST, SUCCESS 두개는 확실히 분리하면 좋을 것으로 판단됨.
    - Action, Epics, Reducer를 분리하여 Epics 로직 개선하기.
- [ ] **ABR-???** - 호택님 디자인 승낙 후(현재 미확정)
  - Sidebar FadeIn/Out으로 화면 넓히기
  - Android/IOS - App profile에 넣기
  - AppList 위치가 Nav로 변경
  - 다국어 설정 Icon 넣어서 변경되기.
- [x] **ABR-432**
  - CTIT 정렬 순서 바꾸기
  - InAppEvent List 렌더링되지 않는 문제 해결
    - ReceiveProps가 1번만 발생하여, 해당 데이터를 자식 Component에게 전달하지 못한 문제
  - ~~Menu 수정~~
    - Menu관련사항은 헌재님 요청에 따라 정지
- [] **ABR-415**
  - CUSTOM_STATS 관련 PAGINATION 적용
    - 해당 관련 Container, Component 분리
      - Thunk와 Component, Container의 복잡함으로 코드 성능 부족 개선.
    - Redux Thunk에서 Observable 분리
      - CustomStats
      - Pagination
- [ ] **ABR-500**
  - [x] HoC로 Table 개선하기
    - **Header**
      - OneFilter
        - One Data Filter
      - Filter
        - Columns Filter
      - CheckBox
    - **Body**
      - Scroll
        - Horizon
        - Vertical
      - Absolute
        - Some Vertical Column is fixed.

## 20180709 비전공유 - Front-End 후기
- Responsive UX/UI
- Optimazation performance through HTTP2
- Data Visualization(Chart)
- Segmentation Filtering(Form, Data)
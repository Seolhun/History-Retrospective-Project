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
- **ABR-289**
  - 이전 데이터의 문제일 경우, SelectBox가 사라지는 문제.
    - 의심가능성
      1. 이전 트래킹링크 데이터에 문제가 있는 경우
      2. 이전 데이터가 없는 경우
        => 에러처리를 통해, 에러가 발생하면 Rendering에 문제 없도록 조치해야 할 필요가 있음.
- **ABR-242**
  - Redux Type 분리
    - REQUEST, SUCCESS 두개는 확실히 분리하면 좋을 것으로 판단됨.
    - Action, Epics, Reducer를 분리하여 Epics 로직 개선하기.
- **ABR-415**
  - Raw Log Export API 개선
    - Pagination(page, limit)
    - Segmentation가지 인가? Filter까지 인가? 
- **ABR-???** - 호택님 디자인 승낙 후(현재 미확정)
  - Sidebar FadeIn/Out으로 화면 넓히기
  - Android/IOS - App profile에 넣기
  - AppList 위치가 Nav로 변경
  - 다국어 설정 Icon 넣어서 변경되기.
- **ETC**
  - HoC로 Table 개선하기
    - 현재 242에서 작업 중 => 분리 필요**(Ticket 번호 받기)**
      - `Observable에 대한 변경사항을 바로 적용하기 어렵기 떄문`
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

## Front-End 후기
- Responsive UX/UI
- Optimazation performance through HTTP2
- Data Visualization(Chart)
- Segmentation Filtering(Form, Data)
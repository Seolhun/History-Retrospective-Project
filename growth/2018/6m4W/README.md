# 2018 6월 4주차 Tasks
- Author : [Seolhun](https://github.com/Seolhun)
- Date : 20180625 ~ 20180629

## 주간 작업 리스트	
- Retention Analysis
	- Air-BnB-Date 코드 분석/개선
		1. 달력 체크사항 변경
		2. 달력 유효성 검사로직 변경
		3. Hover시 해당 일수별로 렌더링 될 수 있게 변경

## 개인 작업 목표 리스트
- Redux Observable 변경하기
	- Axios, API관련 설정 수정하기.
	- Store에서의 재선택은 해결된 상태이지만, 다른 방법도 고민해보기.
- Storybook 
	- JEST 테스트해보기(Method 단위)
	- Knobs 전부 적용하기.

## 6월 4주차 작업리스트
#### 25일
- **ABR-339**
	- 잔존율 분석에 있는 React-Damtes 코드 개선
		1. 가장 어려울 것으로 판단되는 문제는, 단위 별 Dates의 기간을 Hover하는 것(더 확장될 수도). 
		1. 단위 별 일수 기존 Disable 해제 및 UI 위치 변경.
		2. StartDate와 EndDate의 유효성 검사 로직 수정
- **ABR-242**
	- Delete, Patch 관련 Data가 반영되지 않는 이슈 파악하기
	- Observable 코드가 ifEmpty가 작동되지 않을것으로 판단됨 => 기본적인 ReduxAction의 값을 주어지므로 안에 항상 값이 존재하기 때문
		- Observable 안에 Epics 코드 개선 및 에러처리 고민해보기
			- 오류 메세지를 Redux가 갖고 있기 때문에 메세지를 어떻게 보여줄 것인지 고민하기
				- 에러 코드를 확인한 후 메세지를 쉽게 처리할 수 있는 방법(?) 
				- Redirection과 해당 페이지 내로 2가지 방법이 존재(2개를 나누는 기준은 메인 Content 기준?)
- **ETC**
	- Radio Button 작업 간 check가 되지 않는 어려움.
		- label에서 이벤트가 input으로 전달되지 않는다(캡처링). 
	- label에 event를 넣는 방법으로 문제가 해결되나, esLint에서 aria와 관련한 문제 발생
		- role에 radio, button으로 명명하면 해결이 가능할 것으로 보이지만, 해당 dom은 noninteractive로서 적합하지 않다는 경고를 보낸다. 이를 다시 해결하기 위해서는 role='presentation'으로 가능해진다.
		- **ARIA(Accessible Rich Internet Applications)에 깊게 조사할 필요성이 있음.**

#### 26일
- **ABR-339**
	- 잔존율 분석에 있는 React-Damtes 코드 개선
		1. 가장 어려울 것으로 판단되는 문제는, 단위 별 Dates의 기간을 Hover하는 것(더 확장될 수도). 
		1. 단위 별 일수 기존 Disable 해제 및 UI 위치 변경.
		2. StartDate와 EndDate의 유효성 검사 로직 수정
		
- **ABR-242**
	- Delete, Patch 관련 Data가 반영되지 않는 이슈 파악하기
	- Observable 코드가 ifEmpty가 작동되지 않을것으로 판단됨 => 기본적인 ReduxAction의 값을 주어지므로 안에 항상 값이 존재하기 때문
		- Observable 안에 Epics 코드 개선 및 에러처리 고민해보기
			- 오류 메세지를 Redux가 갖고 있기 때문에 메세지를 어떻게 보여줄 것인지 고민하기
				- 에러 코드를 확인한 후 메세지를 쉽게 처리할 수 있는 방법(?) 
				- Redirection과 해당 페이지 내로 2가지 방법이 존재(2개를 나누는 기준은 메인 Content 기준?)

#### 27일
- **ABR-339**
	- 유효성 검사 로직 수정
		- endDate null 현상 수정
	- 다국어 설정, 관리 어려움(?)
		- KO, EN 순서 맞춤
	- intl 방식으로만 적용해야 values 값을 연산한 message값을 가져 올 수 있음.
		- 값을 직접 Raw하게 가져와 연산이 필요한 경우를 제외하면 다른 LanguageUtils를 사용할 필요없음 => 함수 1개만 있으므로 함수만 리턴할 필요가 있음.
- **ABR-242**
	- App Delete까지 확인.
	- App Manager 생성 확인 중
	- Rxjs, Observable에서 Action 2개 처리시 2개의 결과를 보장하는 방법 조사
		- 앱 삭제 후 ListAction을 호출했을 때, 삭제 SUCCESS가 보장되지 않는 이슈.
- **ABR-289**
	- 트래킹링크 이전설정 불러오기
		- 특정 상황에서만 발생되는 것으로 보이며, 현재 파악 중.
		- 보이는 코드는 개선 중
- **ETC**
	- GROWTH 팀과 식사를 하면서 재밌는 이야기를 많이 들음 
		- Chart Component
		- Table Component(with Filter)
		- Management Wep
	- 위 3가지 사항이 가장 GROWTH를 위한 필수사항으로 판단 됨.

#### 28일
- **ABR-339**
	- React-Dates의 UX 코드를 개선함
		- react-dates에 제공된 props를 이용하여 최대한 component를 개조하지 않고 이용하여 구성함
		- 개인적으로 HTML DOM event 기능을 제공할 때, DOM에 의존한 JS작성이 필요함을 꺠달았음
			- 왜냐하면, React-dates의 달을 넘기는 메소드는 버튼에 의해서가 아니라, 로직상에 의해 호출되어 달력 렌더링이 변경됨
			- 이것이 왜 문제냐면, nav버튼에 의한 event가 DOM에 대한 의존성이 사라져, DOM과 이벤트가 따로 노는 문제가 발생됨. 
			- 즉, DOM 조작과 함께하는 유효성검사에서 삽질하게 만듦.(~~issue에 있는 여자 개발자 마음에 안듦(중복 이슈 달지말라고 댓글다는 사람인듯)~~)
		- SetTimeout을 제거하고 싶었지만, 해당 Dom이 랜더링되는 시점을 정확히 알 수 없어, DOM을 컨트롤하는데 어려움이 있었음.
			- 이건 내 부족으로도 보이나, 어떻게 개선해야할지 앞으로 고민이 많아짐(Component 개발에 중요한 포인트일듯)
- **ABR-289**
	- 헌재님이 가끔 트래킹링크가 사라진다는 버그 이슈를 남겼지만, 현재 파악이 불가능 중
		- 어느 상황에서 발생하는지를 파악 중이며, 코드를 하나하나 읽어가면서 문제가 되는 부분을 알아가는 중
	- react-virtualized-select, react-select에 이해가 필요하여 현재 분석 중
		- virtualized가 select의 component를 이용하는데, 문서에는 props에 대한 설명이 virtualized에 있는 것만 나옴. => 그냥 불편함
		- 시간 되면, virtualized의 원리를 찾아보고 이해할 필요가 있어보임.
- **ABR-242**
	- 오늘은 손도 못됐다.
	- 스토리북이라도 따로 푸쉬를 넣어야 될것 같다는 생각이 많이 듦.

#### 29일
- **ABR-289**
	- 트래킹 링크생성 에러 확인 중
	- 현재 재현이 어렵고, 코드에서 콘솔 에러되는 부분은 최대한 개선함
	- i18n 특수문자를 위한 backSlash(특히, {}를 표현하고 싶을때 사용되는게 values랑 충돌)가 아마 경고의 주범으로 보임
		- 경고되는 부분을 주의깊게 보고 해결할 방법 찾기.
- **ABR-242**
	- Stroybook과 Observable 브랜치 분리
		- ABR-242-SH, Redux-Observable과 관련된 모든 코드 브랜치
		- ABR-242-ST, 스토리북 설정 및 새로 만든 Component 브랜치
	- siwtchMap을 사용하면 mapLastest의 기능처럼 구현할 수 있다는 블로그 확인
		- 중복된 요청이 왔을 경우 어떻게 반응하는지 확인 후, 개선필요
- **ABR-395**
	- Raw HTML 코드 => <Radio> 컴포넌트로 수정
- **ETC**
	- 조동현님 코드 리뷰/코멘트 남기기
		1. for문과 forEach, Map의 차이
		2. redux-actions 사용해봤는지?
			- 장단점 및 사용을 안한 이유
		3. table css 그리드 문재점
	- 현재 Git에서 Git-Flow으로 전환하기 위한 PPT 작성
		- 간단하게만 만들어보았음. 결국, 충돌문제는 한번 해결해야함.

## 회의
#### 2018년 6월 25일 회의
1. 이번주 금요일에 `조동현`님 면접 예정 중
2. 에어브릿지 우정님의 할당
3. 개발 문화를 현재 개선 중
	- 애자일 -> 스프린트
	- 개발하고 정리하는 시간을 가지면서 행복한 개발 문화를 갖고 싶다.
4. 매주 수요일 배포 이후 완료된 Ticket 정리/논의/회고.

#### 2018년 6월 26일 Log Export 회의
1. 대시보드 `기본 홈`이 추가 될 예정.
2. 데이터 탐색, `로그 확인`을 넣는 것이 가장 좋을것으로 판단됨(모든 앱에 공통적으로 적용될만한 것)
	- 로그 확인 / 로우데이터 리포트.
	- 하위 메뉴
		1. 로그 확인
			- 멀티 셀렉트 박스
			- 고정 프리셋 추천(ab180 내)
			- 검색(백엔드)과 필터(프론트)
				- 필터: 정렬, 컬럼필터 등
		2. (다운로드)요청 기록
			- 다운로드 링크와 함께 메일로 제공
				- 다운로드에 최소 몇분이 소요되기때문에.
			- 최대 데이터 보관기간
				- 최대 30일(?)
				- 대쉬보드에서 다운로드 받을 수 있게(?)
			- 해당 요청 상태 확인
				- 실패 시 : 에러 메시지 툴팁
		3. **대행사 접근 로그 설정**
			- 계정 별로 

## 블로그 글쓰기
#### ARIA에 대해 간단하게 정리하기
- ARIA란 무엇인가
- ARIA role에 대해 정리해보기
	- [Using ARIA](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- React에 적용해보기
- Radio Button 이슈 확인해보기

#### 참고자료
- [MDN - ARIA](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA)
- [Lezine - Aria 가이드라인](https://tech.lezhin.com/2018/04/20/wai-aria)
- [ESLint - no-static-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md)
- [ESLint - no-noninteractive-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md)

#### React Render 성능과 reconciliation에 대해 알아보기
- 아마 자식 컴포넌트에서 componentWillReceiveProps로 인해 자식 컴포넌트가 부모의 데이터를 변조하고 재렌더링(reconciliation)을 걸게된다면… 우리가 잘못짠게 맞습니다

#### 참고자료
- [토스트 밋업 - 렌더링 성능](http://meetup.toast.com/posts/110)

	

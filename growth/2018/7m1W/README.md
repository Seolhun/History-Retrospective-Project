# 2018 7월 1주차
- Author : [Seolhun](https://github.com/Seolhun)
- Date : 20180702 ~ 20180706

## 개인 작업 목표 리스트
#### Hi-Cord
- Scraper 다시 만들기
	- Scraper에 대한 Robot.txt 관련사항 읽어보기
	- AWS 비용만 내지 말고 만들자!!!! 돈낭비 하지말라.
- React, Redux-saga를 이용한 프론트엔드도 같이 개발하기
	- SignIn, SignUp
	- Scraper Target List/Subscripton 기능 만들기
- Materialize CSS를 이용하여 Static 사이트 만을기
	- 강의 참조하고, 코드 분석해보기

## ABR 작업 리스트
- Storybook 
	- JEST 테스트해보기(Method 단위)
- Rx-Observable, Rx-JS
	- 메소드 별 기능 분석하고 정리해보기
		- switchMap
		- map
		
#### To do List
- **ABR-289**
	- 에러가 발생되지 않고, 에러 재현이 어려워 티켓만 인지하고 있기.
- **ABR-242**
	- **ST**
		- Table, Tooltip Component 수정/완료
		- 스토리북으로 테스트, CSS -> SCSS로 분리
	- **SH**
		- Add Manager, Add Agency 등 추가적인 기능들 테스트하기.
			- 'Accept-Language'를 요청 header에 추가해야함.
		- siwtchMap을 사용하면 mapLastest의 기능처럼 구현할 수 있음
			- mergeMap => switchMap으로 변경
				- switchMap은 mergeMap과 달리 요청에 따라 항상 새로운 Observable을 1회만 반환한다.
					- `switchMap maintains only one inner subscription at a time`
		- 에러시 retry가 효율적인지도 테스트 해볼 필요 있음.
		- Delete => List, Post 
			- map()을 사용하여 Sequencable한 요청에 대한 로직 추가
- **[ABR-405](https://teamab180.atlassian.net/browse/ABR-405#add-comment)**
	- Card 컴포넌트가 적용되지 않은 HTML들을 수정하기.
	- render ArrowFunction => 기본 render()로 모두 변경
	- ref, string으로 되어있는 것, arrow function으로 변경.
		- 16.3부터는 `React.createRef()`를 사용
			```js
			constructor(props) {
				super(props);
				this.myRef = React.createRef();
			}
			```
- **ETC**
	- FilterTable Component 만들기.
		- TableScheleton => 여러 테이블 분기하기
			- TableHeader를 수정하는 것에 대한 어려움이 많음.
			- 다국어 설정에 대한 확장성 부족 및 HeaderBlock이 Component가 너무 많아, 복잡하며 하나의 뿌리를 두고 있지 않음.


## 블로그 글 쓰기 목록
#### ARIA에 대해 간단하게 정리하기
- ARIA란 무엇인가
- ARIA role에 대해 정리해보기
	- [Using ARIA](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques)

#### RxJS Method와 예제에 대해
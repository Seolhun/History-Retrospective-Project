# 2018 7월 1주차 Tasks
- Author : [Seolhun](https://github.com/Seolhun)
- Date : 20180625 ~ 20180629

## 주간 작업 리스트	
- RxJS 사용법을 늘려보기

## 개인 작업 목표 리스트
#### ABR
- Storybook 
	- JEST 테스트해보기(Method 단위)
- Rx-Observable, Rx-JS
	- 메소드 별 기능 분석하고 정리해보기
		- switchMap
		- map

#### Hi-Cord
- Scraper 다시 만들기
	- Scraper에 대한 Robot.txt 관련사항 읽어보기
	- AWS 비용만 내지 말고 만들자!!!! 돈낭비 하지말라.
- React, Redux-saga를 이용한 프론트엔드도 같이 개발하기
	- SignIn, SignUp
	- Scraper Target List/Subscripton 기능 만들기
- Materialize CSS를 이용하여 Static 사이트 만을기
	- 강의 참조하고, 코드 분석해보기

## 7월 1주차 작업리스트
#### To do List
- **ABR-289**
	- 에러가 발생되지 않고, 에러 재현이 어려워 티켓만 인지하고 있기.
- **ABR-242**
	- Add Manager, Add Agency 등 추가적인 기능들 테스트하기.
		- 400 에러, parameter를 요청해도 에러가 발생(?)
	- siwtchMap을 사용하면 mapLastest의 기능처럼 구현할 수 있음
		- `switchMap maintains only one inner subscription at a time`
		- switchMap은 mergeMap과 달리 요청에 따라 항상 새로운 Observable을 1회만 반환한다.
		- mergeMap => switchMap으로 변경
	- 에러시 retry가 효율적인지도 테스트 해볼 필요 있음.
	- Delete => List, Post => List 등 Sequencable한 요청에 대한 로직 추가
- **[ABR-405](https://teamab180.atlassian.net/browse/ABR-405#add-comment)**
	- Card 컴포넌트가 적용되지 않은 HTML들을 수정하기.
- **ETC**
	- FilterTable Component 만들기.
		- TableScheleton => 여러 테이블 분기하기
			- TableHeader를 수정하는 것에 대한 어려움이 많음.
			- 다국어 설정에 대한 확장성 부족 및 HeaderBlock이 Component가 너무 많아, 복잡하며 하나의 뿌리를 두고 있지 않음.

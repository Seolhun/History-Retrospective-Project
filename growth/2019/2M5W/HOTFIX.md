### HotFix List
- 비밀번호 변경 후 다시 변경된 비밀번호로 다시 비밀번호를 변경 할 경우 비밀번호가 틀리다고 나옴
	- 그러나, 로그아웃 후 로그인은 변경된 비밀번호로 됨.
		- 비교 로직에 대한 state가 업데이트 안되는 이슈로 보임.
- 개인정보 변경이 이제 USER_ID가 사라져가 불가능함. API 추가 기능 필요.
- 앱 관리자 테이블 개선
- RealTimeLog Error Message
- SideBar re-rendering HoC 조건에 의해 리랜더링
	- Sidebar에 랜더링되는 값들은 Redux만 사용할 것.
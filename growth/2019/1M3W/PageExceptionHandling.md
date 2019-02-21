# Error, Not-Found, Un-authorized

## 1. Error
App이 정말로 Crash(정상 상태가 아닌 경우)가 난 경우

## 2. Not-Found
URL Resources를 찾을 수 없는 경우

#### Summary
- URL이 DashBoard 내에 정의된 URL이 아닌 경우
- 그 외 모든 Resources가 유효하지 않은 경우

#### Description
- Page URL이 없는 경우
- 혹은 Un-authorzied 외 예외사항에 대한 URL 정보를 알려주고 싶지 않을 때 Not-Found(Un-authorized에 1번 사항)

## 3. Un-authorized (현재 X)
URL Resources에 접근권한이 없는 경우

#### Summary
- 마케터, 에이전시 등에 적합하지 않은 경우
- 빌링 시스템에 유효하지 않은 경우
- 그 외 어떠한 인증 과정에서 유효하지 않은 모든 경우

#### Description
1. 보안이 필요한 경우
	- 위 사항처럼 Not-Found 혹은 더 정보를 주고 싶으면 Un-authorized 처리
2. 졍보 또는 전환이 필요한 경우
	- 예를 들어, Standard 혹은 에이전시 계정일 경우
		- 관련 마케터에게 권한 요청을 신청하세요라는 등
		- 혹은, 돈을 더 내세요 라는 등의 메세지로 이끌 수 있음

위 둘의 사항은 상황은 같지만 처리가 다르므로, 2안에서는 적절한 권한이 없어 전환을 요청해야 하므로, Nav 또는 SideBar가 보여져야 할것임...

### 추가사항
- 위에서 정의한 Error는 어디서 에러가 난지 모르는 상황이기 때문에, 이를 /#/app으로 Redirection 시키는게 제일 나아 보임
	- 혹은 더 좋은 방법이 있으나 시간이 필요한 사항
		- 이는 로직적으로 해결해야 할듯(과거로 갔는데 또 에러가 난경우 어디로 가야하는지 등등에 대한 고민...).
	- 이 페이지는 사용자가 알지 못하게 하는게 제일 좋음.
- Not-Found, Un-authorized(1번 사항)
	- 과거 기록이 없는 경우
		- 과거 로그인이 되어있는 상태에서, 내가 가고자 하는 URL를 입력하여 들어왔는데 마주한 경우, 과거가 기록이 없기 때문에 뒤로 보내면 요청전 사이트가 감
			- 즉, 구글 > 액츄얼 > NotFound > 구글
	- 과거 기록이 있는 경우
		- 예를 들어, contribution?tab=install에 접근했다가 contribution?tab=launch에 접근하여 마주한 경우, 
			한 단계 이전 단계(contribution?tab=install) 혹은 더 과거(?)로 보냄.
		- 그러므로, 과거 어디까지 보낼지에 대한 정의가 필요.
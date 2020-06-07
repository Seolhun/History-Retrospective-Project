# HTML, Form tag

Form 작성하기에 앞서 아래 사이트에 있는 HTML 요소와 속성을 꼭 읽어보자!!
- [MDN - HTML 폼 가이드](https://developer.mozilla.org/ko/docs/Learn/HTML/Forms)

이 요소는 폼의 공식적인 형태이다. 이 요소는 다음 <div> 나 <p> 요소와 같이 사용되고,뿐만 아니라 폼이 동작하는 방식을 설정하는 일부 속성들을 지정 해야한다. 이러한 모든 속성은 선택적이지만 action 속성과 method 속성은 필수적으로 설정해야 한다.

## Form

## Submit
버튼은 다음과 같은 3개 종류가 있다. submit, reset, button.

1. submit 
	- 버튼을 클릭하면 폼 데이터를 <form> 요소의 action속성에 정의된 웹페이지 에 전송된다.
2. reset 
	- 버튼을 클릭하면 모든 폼 위젯을 기본 값으로 바꾼다. UX 관점에서 이방법은 안좋은 방법이라 본다.
3. button 
	- 버튼은 아무것도 안한다! 다만, JavaScript와 사용하면 놀랍게 유용한 사용자 버튼이 될 수 있다.


## Examples

> Event Propagation Example
<script async src="//jsfiddle.net/SHun10114/o8tqsk6e/embed/"></script>

---
## References
[MDN - HTML 폼 가이드](https://developer.mozilla.org/ko/docs/Learn/HTML/Forms)

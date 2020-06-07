# Javascript, Scope?

스코프는 자바스크립트 내에서 변수나 함수, 혹은 객체에 대한 범위를 지정해주기 위해 사용됩니다.
JavaScript(ES6)는 Function level과 Block Level, Lexical Scope 규칙을 따릅니다.

이러한 스코프 영역에 알고가기 위해서는 [변수](/js/basic/Variable)에 대해서 읽어보고 오시기 바랍니다.

## Scope

자바스크립트에서 스코프란 어떤 변수들에 접근할 수 있는지를 정의합니다. 스코프엔 두 가지 종류가 있는데, 전역 스코프(global scope)와 지역 스코프(local scope)가 있습니다.

### 1. Function Level Scope

자바스크립트에서 var키워드로 선언된 변수나, 함수 선언식으로 만들어진 함수는 `함수 레벨 스코프`를 갖습니다. 즉, `함수 내부 전체에서 유효한 식별자`가 됩니다.

아래 코드는 아무런 문제없이 blue를 출력한다.
```js
function printScope() {
	if (true) {
		var color = 'blue';
	}
	console.log(color); // blue
}
printScope();
```

변수 선언에 사용되는 `var`는 함수 레벨 스코프 속성을 가지고 있기 때문에 `printScope` 함수 내부 어디에서든 color를 에러없이 참조할 수 있게 되는 것입니다.

하지만, 함수가 종료되면 함수형 스코프도 같이 종료되기 때문에, 아래와 같은 경우는 not defined가 출력됩니다.

```js
function printScope() {
	var color = 'blue';
}
printScope();
console.log(color); // not defined
```

### 2. Block Level Scope

자바스크립트는 전통적으로 함수 레벨 스코프를 지원해왔고, 얼마 전까지만 해도 블록 레벨 스코프는 지원하지 않았습니다. 하지만 가장 최신 명세인 ES6(ECMA 6)부터 블록 레벨 스코프를 지원하기 시작했습니다.

```js
function printScope() {
	if (true) {
		let letBlock = 'let';
		const constBlock = 'const';
	}
	console.log(letBlock); // letBlock is not defined
	console.log(constBlock); // blockColor is not defined
}
printScope();
```

var와는 다르게 블록 스코프는 block({})	 내부에서만 유효하기 때문에 if문이 끝날 때 파괴되어, 해당 값을 참조하여 사용할 경우 not defined 에러메세지를 보게 됩니다.

### 3. Lexical Scope
랙시컬 스코프는 `어휘적 유효 범위`라는 의미로 사용됩니다.

간단하게 설명하면, 어떠한 함수가 가지는 유효 범위를 동적으로 가진다는 이야기가 됩니다. MDN 예제를 같이 보도록 합시다.

```js
function globalFunction() {
		// name is a local variable created by globalFunction
		var name = "Seolhun";
		// localFunction() is the inner function, a closure
    function localFunction() {
				// localFunction() uses variable declared in the parent function
        alert (name);
    }
    localFunction();
}
globalFunction(); // alert => "Seolhun"
```
name이란 변수와 localFunction은 globalrFunction에 의해 생성됩니다.
중요한 것은, localFunction은 자신의 함수형 스코프 밖에 있는 name에 접근할 수 있는 것입니다.
이 부분이 바로 Lexical Scope라고 할 수 있습니다. 현재 어휘적 유효 범위가 동적으로 결정되는 것입니다.

즉, 중첩된 함수들에서 내부함수의 유효 범위는 외부 함수 유효 범위에서 선언된 변수들에 접근할 권한을 가질 수 있다는 것입니다.

Lexical Scope는 Closure와 매우 연관이 깊은데, `현재 함수의 유효적 범위를 외부에서 참조할 수 있게 기억하고 있는 것입니다`.

### - Hoisting
호이스팅은 끌어올린다는 의미처럼, `변수 및 함수 선언은 컴파일 단계에서 메모리에 저장`되어 이를 끌어올린 것처럼 사용할 수 있습니다.
가끔씩, 호이스팅을 변수 및 함수 선언이 물리적으로 작성한 코드의 상단으로 옮겨지는 것으로 가르치지만, 실제로는 그렇지 않고 코드에서 입력한 위치와 정확히 일치한 곳에 있습니다.

```js
printName("Seolhun");
console.log(varName);
console.log(letName);
console.log(constName);

function printName(name) {
  console.log("My name is " + name);
}
var varName = 'Var'; // undefined
let letName = 'Let'; // not defined
const constName = 'Const'; // not defined
```

위의 예제에서 알 수 있듯이, 함수와 변수 선언(var)은 호이스팅되었음을 알 수 있습니다.
변수를 보면 알수 있듯이 선언만 호이스팅이 되기 때문에 var 변수는 undefined를 출력하게 됩니다.
실질적으로는 let도 호이스팅이 되지만, 참조할 경우 `temporal dead zone`으로 인해 not defined를 보게 됩니다. const는 호이스팅되지 않습니다.

> Temporal dead zone and errors with let

> In ECMAScript 2015, let will hoist the variable to the top of the block. However, referencing the variable in the block before the variable declaration results in a ReferenceError. The variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

## Summary

- var는 함수형 스코프를 가집니다.
- let과 const는 블록 스코프를 가집니다.
- 함수형 스코프와 블록 스코프의 차이는 스코프의 범위입니다.
- 함수와 변수 선언은 호이스팅되어, 같은 스코프 안에서 위에서 선언된 것처럼 참조하여 사용할 수 있습니다. (우리가 참조하는 것은 컴파일 되어 메모리에 저장된 참조 값이기 때문입니다.)
	- var는 선언이 호이스팅되며 참조할 수 있습니다. 하지만, undefined입니다.
	- 블록 스코프는 let은 호이스팅되지만 참조할 수 없으며, const는 호이스팅, 참조 둘다 되지 않습니다.
- 렉시컬 스코프는 클로저와 매우 연관이 깊으며, 현재 어휘의 유효 범위를 의미합니다.

## Outro
기본적으로 자바스크립트는 ECMAScript 언어 명세를 따르고 있습니다. Scope에 관련된 내용을 참고하고 싶으신 분들은 [ECMA - 명세 8장](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-executable-code-and-execution-contexts)의 실행코드와 실행컨텍스트 부분에서 동작 방식을 확인할 수 있습니다.

## References
- [ECMA - Executable Code and Execution Contexts](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-executable-code-and-execution-contexts)
- [TOAST - 자바스크립트의 스코프와 클로저](https://meetup.toast.com/posts/86)
- [MDN - Hoistring](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)
- [MDN - Closure](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)

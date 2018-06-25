# Functional Javascript Examples
- 함수형 프로그래밍은 성공적인 프로그래밍을 위해 Side Effec(부수효과)를 줄이고 조합성을 강조하는 패러다임.
- `마이클 포거스 - 클로저 프로그래밍의 즐거움`
	- 언어 자체를 함수처럼 여기도록 만들어, 함수 개념을 가장 우선순위에 놓는 방법.
	- 문제 해결방법을 동사(함수)들로 구성하는 것

## 순수함수
- Side Effect가 없는 함수
- 인자, 변수 등에 이용하여 값의 변이 없이 작동하는 함수
- ex)
	- Lodash, React, Redux...

## 고차함수
- 인자로 함수를 받는 함수
- 함수를 리턴하는 함수
- 인자로 받은 함수를 실행하는 함수

## 객체지향 vs 함수형
```js
// 데이터(객체) 기준
duck.moveLeft();
duck.moveRight();
dog.moveLeft();
dog.moveRight();

// 함수형 프로그래밍
moveLeft(dog);
moveRight(duck);
moveLeft({ x: 5, y: 2);
moveRight(dog);
```

## Examples
#### 1. addMaker
```js
// 1. addMaker
function addMaker(a) {
  return function(b) {
    return a + b;
  }
}

const add10 = addMaker(10);
console.log(add10(20));

// 2.
function tripleFn(f1, f2, f3) {
	return f3(f1() + f2());
}

const result = tripleFn(
	function() { return 2; },
	function() { return 1; },
	function(a) { return a * a; },
)
console.log(result);
```

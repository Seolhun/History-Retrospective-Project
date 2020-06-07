# Javascript, Variable

## 변수
모든 프로그래밍 언어에는 변수가 존재하며 이를 통해 각각의 문제를 해결할 수 있습니다.
저 또한, 프로그래밍에서 이러한 변수를 어떻게 구현하고 해결할지에 대한 것부터가 프로그래밍의 시작이라고 보고 있습니다.

그렇다면, 변수란 무엇일까요? 변수는 하나의 그릇과 같습니다. 우리가 사용되는 데이터들을 담아 낼 수 있습니다.
변수는, 메모리에 따라 양이 조절되며, 메모리가 클수록 많은 양을 처리할 수 있습니다.

#### 변수의 특징
1. 변수가 갖는 특징은 항상 메모리 영역을 차지한다는 것입니다. (스택, 힙... 등)
2. 어떠한 값을 가질 수 있습니다.
3. 타입을 가집니다. (언어에 따라 타입이 추론되기도, 강제하기도 합니다.)

그렇다면, 자바스크립트에서는 변수를 어떻게 선언하고 사용해야 할까요?

## 선언과 할당
자바스크립트에서 변수를 사용하기 위해서는, 선언과 할당에 대해서 알고 넘어가야 합니다.

#### - 선언(Declaring)
자바스크립트에서는 var 키워드를 이용하여 변수를 선언합니다. es6 이후에는 const와 let으로 변경되었지만, 결국, 스코프를 제한하는 것 외에는 변수라는 특징은  달라진 것이 없습니다.

```js
// es5 이전
var a;

// es6
let b;
const c;
```

#### - 할당(Assignment)
자바스크립트에서는 `'=' 라는 operator`를 이용하여 할당을 합니다.

```js
a = 5;
b = false;
c = 'variable'; // const는 재할당이 허락되지 않습니다. (writable : false)
```

> 자바스크립트에서는 not defined와 undefined를 구별해야 합니다. 

> 이 둘은 선언과 할당으로 쉽게 구분할 수 있습니다. 
not defined는 변수를 선언하지 않은 것, undefined는 선언은 되었으나 할당되지 않은 상태입니다.


간단히 예를 들어봅시다. 

```js
var hello;
console.log(hello); // undefined
console.log(hello2); // hello2 is not defined
````

## Type
자바스크립트는 느슨한 타입 (loosely typed) 언어, 혹은 동적 (dynamic) 언어라고 말합니다. 이 말의 의미는 변수의 타입을 미리 선언할 필요가 없다는 뜻입니다.
타입은 프로그램이 처리되는 과정에서 자동으로 추론될 것입니다. 또한 그 말은 같은 변수에 여러 타입의 값을 넣을 수 있다는 뜻입니다.(스크립트 언어의 특징)

```js
const arr = [undefined, null, 10, NaN, false, '', {}, [], () => null];
function printTypes(value) {
	return arr.map((value) => typeof value);
}
printTypes(arr);
// undefined, object, number, number, boolean, string, object, object, function
```

> null은 null이 아니라 object로 출력된다는 것을 유의해야 합니다.

> null의 타입은 null로 출력되어야 하지만, 현재 구현된 웹 페이지들의 여파를 생각하여 고쳐지지 않고 있는 Known-Issue 중 하나입니다.

## References
- [Value vs. Reference in Javascript](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
- [MDN - 자바스크립트의 자료형](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)
- [MDN - DefineProperty](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)


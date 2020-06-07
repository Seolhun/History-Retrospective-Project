# Javascript, Prototype

프로토타입은 자바스크립트에서 상당히 중요한 키워드입니다.
자바스크립트는 프로토타입 기반의 언어로서, 프로토타입을 통해서 정말 대부분의 기능들을 구현/확장 할 수 있습니다.

prototype을 이해하면, ES5부터 등장한 class는 물론이며, 함수가 1급 객체로서 동작하는 자바스크립트의 특징에서 많음 도움을 받을 수 있습니다.

그렇다면 프로토타입은 정말로 무엇일까요?

## Prototype

자바스크립트의 모든 객체는 Object로 구현되어 있으므로 객체의 프로토타입은 모든 객체가 Object가 가지는 속성 값을 가지고 있습니다.
그 중, 생성자(new operator)를 이용하면 해당 객체의 프로토타입을 생성할 수 있습니다.

즉 모든 프로토타입은 서로 연결하여 사용할 수 있으며, 이를 통해 상속될 수도 있다는 것을 알 수 있습니다.

간단한 예제로, 객체의 Prototype을 출력해봅시다.

```js
function Person() {};
Person.prototype;

- {constructor: ƒ}
	- constructor: ƒ Person()
		- name: "Person"
		- prototype: {constructor: ƒ}
	- __proto__: Object
		- constructor: ƒ Object()
		- Object.prototype...
```

1. 생성자는 자기 자신이므로 Person 객체(함수)를 지정하였습니다.
	- 체이닝이 된 것은 Object뿐이므로 Object의 생성자를 받고 있습니다.
2. __proto__에는 어떠한 생성자로 해당 프로토타입 객체가 만들어졌는지를 알 수 있습니다.
	- 현재 해당 값은 Object()로 만들어졌음을 알 수 있습니다.
	- 어떠한 proeperties들이 proto를 통해 받았는지 알 수 있습니다.

해당 예제를 통해 우리는 `constructor(생성자)`와 `__proto__` 객체를 볼 수 있었습니다. 2가지에 대해 더 알아보자면,

- Object.prototype.constructor
	- 객체의 프로토타입을 생성하는 함수를 지정합니다.
- Object.prototype.__proto__
	- 객체가 초기화될 때 프로토타입으로 사용된 객체를 가리킵니다.

즉, 모든 객체는 Object로 구현되었음을 증명할 수 있습니다.
Object의 prototpye을 통해 각각의 객체가 생성자를 통해 어떠한 프로토타입을 지정하였는지, 그리고 __proto__에서 객체가 가지고 있는 properties를 볼 수 있습니다.

## What is chaining & extends
상속 관점에서 자바스크립트에는 객체만이 유일한 생성체입니다.
더 설명해보자면, 각각의 객체는 [[Prototype]]이라는 은닉(private) 속성을 가지는데 자신의 프로토타입이 되는 다른 객체를 가리킵니다.

즉, 자신의 프로토타입이 되는 객체를 가리키는 것이 결국, 프로토타입의 체이닝이라고 볼 수 있습니다. 중요한 것은 이 행동이 반복된다는 것입니다.
그 객체의 프로토타입 또한 프로토타입을 가지고 있고 체이닝이 계속 반복되면서, 결국 null을 프로토타입으로 가지는 오브젝트에서 체이닝이 종료됩니다.
null은 더 이상의 프로토타입이 없다고 정의할 수 있으며, 이 시점이 프로토타입 체이닝이 종료되었다고 할 수 있습니다.

상속도 위의 예제처럼 간단하게 Prototype을 출력해봅시다.

```js
class Seolhun extends Person {};
Seolhun.prototype;

- Person {constructor: ƒ}
	- constructor: class Seolhun
		- name: "Seolhun"
		- prototype: Person {constructor: ƒ}
	- __proto__: Object
		- constructor: ƒ Person()
		- __proto__: Object
```

1. 생성자는 Seolhun Class(함수)를 지정하고 있습니다.
	- 체이닝이 된 것은 Person이므로 prototype으로 Person의 생성자를 받고 있습니다.
		- Person의 생성자는 아마도 위의 예제처럼 가리키고 있을 것입니다.
2. __proto__에는 현재 Person의 prototype을 가리키고 있습니다.
	- 현재 해당 값은 Person 객체(함수)로 만들어졌음을 알 수 있습니다.
	- Person의 __proto__는 Object의 __proto__를 가지고 있습니다. (재귀적으로 프로토타입 체이닝 되고 있다.)


위의 예제를 보앗듯이 자바스크립의 상속도 결국 프로토타입을 통해 구현되었음을 알 수 있습니다.
즉, 우리는 Javascript의 prototype을 통해 어떠한 객체에서도 같은 값을 이용할 수 있게 구현할 수 있으며, 필요에 의해 (추천되지는 않지만) 이를 수정/확장 등을 할 수 있습니다.

ES5부터 등장하는 class를 이용하면 쉽게 구현할 수 있지만, 내부적으로 class가 어떻게 상속되고 동작하는지를 이해하면 Javascript 개발에 더 도움이 되지 않을까란 생각을 합니다.

## References
- [MDN - Prototype chaining](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

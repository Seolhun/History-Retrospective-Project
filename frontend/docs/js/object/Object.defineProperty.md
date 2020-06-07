# Object.defineProperty
정적 메서드는 객체에 직접 새로운 속성을 정의하거나 이미 존재하는 속성을 수정한 후 그 객체를 반환합니다.

## Properties
### configurable
- tpye: Boolean;
- defaultValue: false

속성의 값을 변경할 수 있는지에 대한 여부를 나타냅니다. 삭제할 수도 있다면 true입니다.

### enumerable
- tpye: Boolean;
- defaultValue: false

대상 객체의 속성 열거시 노출 여부. 노출된다면 true.

### writable
- tpye: Boolean;
- defaultValue: false

[할당 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)로 속성의 값을 바꿀 수 있다면 true.

ex) ex6 const는 재할당이 되지 않는다. 즉, writable이 false.

### value
- tpye: any;
- defaultValue: undefined

속성에 연관된 값. 아무 유효한 JavaScript 값(숫자, 객체, 함수 등)일 수 있습니다.

### get
- tpye: any;
- defaultValue: undefined

```js
- tpye: Funtion;
- defaultValue: undefined

속성에 접근하면 이 함수의 this를 속성을 가진 객체(상속으로 인해 원래 정의한 객체가 아닐 수 있음)로 설정하고, 매개변수 없이 호출합니다. 반환 값이 속성의 값으로 사용됩니다.

get: function() {
	return 10;
},
```

### set
- tpye: Funtion;
- defaultValue: undefined

속성에 값을 할당하면 이 함수의 this를 속성을 가진 객체로 설정하고, 할당하려는 값을 유일한 매개변수로 해 호출합니다.

```js
set: function(value) {
	console.log('Setting `o.bar` to', value);
}
```

## Relevant JS
- [Symbol](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

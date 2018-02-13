# JavaScript Static이란?
- Author : [SeolHun](https://github.com/Seolhun/)

## Goal
- `static`의 작동원리와 활용법 이해
- TypeScript와 JavaScript의 코드 차이를 이해한다.

## Overview
정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다.

## Content
1. 클래스 생성자 및 다른 메서드에서의 호출
    - 정적 메서드가 비정적 메서드에서 키워드 `this`를 써서는 직접적인 접근을 할 수 없다. 바른 호출 방법은 클래스 명칭을 쓰거나, 직접 CLASSNAME.STATIC_METHOD_NAME()을 이용하거나 혹은 그 메서드를 생성자의 한 속성으로 부르는 것으로, 즉 constructor : this.constructor.STATIC_METHOD_NAME()를 이용한다.

## Examples
```javascript
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI); // 6.28
console.log(Helpers.calcCircumference(8)); // 25.12
```

## References
- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static)
title: Curry In JS
---

## What is currying
`currying`은 함수를 하나의 인수로 취하여 일련의 함수로 분해하는 프로세스입니다.

```js
function sum3(x, y, z) {
  return x + y + z;
}
console.log(sum3(1, 2, 3) // 6
```

sum3은 하나의 함수에 1개의 argument를 받아서 처리하는 함수입니다. 더 나아가보겠습니다.

```js
function sumFn3(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
}
console.log(sumFn(1)(2)(3)) // 6
```

그에 반하여 sumFn3은 js의 `closure` 특징을 이용하여 3개의 argument를 받아서 3개의 함수로 처리하는 함수입니다.
이러한 함수들은 `chaining`이 되었다는 표현을 사용합니다.

## Curry Wrapper
먼저 위의 함수를 curry로 사용할 수 있게 만들어봅니다. 

```js
function curry(fn) {
  return (x) => {
    return (y) => {
      return (z) => {
        return fn(x, y, z);
      };
    };
  };
}
const sum3 = curry((x, y, z) => {
  return x + y + z;
});
sum3(1)(2)(3) // 6
```

함수를 계속 return 하면서 각각의 함수에 존재하는 argument를 계속 누적시켜서 계산한다고 보시면 됩니다.

1. (1, y, z) => 1 + y + z;
2. (2, z) => 1 + 2 + z;
3. (3) => 1 + 2 + 3;

sum3 함수는 Currying되면서 계산이 되는 것이죠.

여기서 더 나아가보겠습니다. 우리가 curry같은 함수를 만드는 함수를 추상화하여 사용하기 위함이니까요.

## Recursive Curry Funtion
3개에서 4개, 혹은 N개로 늘어난다면 우리는 아래와 같은 curry 함수구조를 유추할 수 있습니다.

```js
function curry0(fn) {
  return fn();
}
function curry1(fn) {
  return (a1) => {
    return fn(a1);
  };
}
function curry2(fn) {
  return (a1) => {
    return (a2) => {
      return fn(a1, a2);
    };
  };
}
function curry3(fn) {
  return (a1) => {
    return (a2) => {
      return (a3) => {
        return fn(a1, a2, a3);
      };
    };
  };
}
...
function curryN(fn){
  return (a1) => {
    return (a2) => {
      ...
      return (aN) => {
        // N-th nested function
        return fn(a1, a2, ... aN);
      };
    };
  };
}
```

## Nested Curry Wrapper
우리는 함수의 특징을 이용하여 재귀적으로 curry될 수 있는 함수를 만들 것입니다.
즉, 모든 함수에는 argument가 있어야 하기에 fn.length를 이용하여 현재 함수에 argument의 개수로 유효성 검사를 할 수 있습니다.

중첩된 curry의 depth(i)를 파악하여 현재 함수의 상태와 비교하여 실행할지 누적시킬지를 결정할 수 있습니다.
만약, argument가 없어 누적되지 않을 경우 다음 함수에서 i와 fn.length가 같아짐으로써 현재까지 누적된 함수를 실행(클로저를 이용하여)할 수 있습니다.

```js
function nest(fn, i) {
  return (x) => {
    if (i === fn.length) {
      return fn(...);
    }
    return nest(fn, i + 1);
  };
}
function curry(fn) {
  return nest(fn, 1);
}
```

## Completion Curry
```js
function nest(fn, i, args){
  return (x) => {
    args.push(x);
    if (i === fn.length) {
      return fn(...args);
    }
    return nest(fn, i + 1, args);
  };
}

function curry(fn) {
  const args = [];
  return nest(fn, 1, args);
}
```

## References
[Medium - Currying In JS](https://hackernoon.com/currying-in-js-d9ddc64f162e)

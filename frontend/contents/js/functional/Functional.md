# Javascript, Functional


## Currying
Named after Haskell Brooks Curry, `currying is the process of breaking down a function into a series of functions that each take a single argument`.

```js
function sum3(x, y, z) {
  return x + y + z;
}
console.log(sum3(1, 2, 3) // 6

// Currying
function curryingSum3(x) {
    return (y) => {
			return (z) => {
				return x + y + z;
			}
    }
}
// curryingSum3(1)(2)(3) = 6
```
> This works because JS supports `closures`.


## The Strategy
Examining the two forms of sum3 reveals that the actual function body from the plain function is moved as-is into the last function in the chain. Before we reach the last level, we won’t have all the arguments in the execution scope.

## Curry Wrapper
Since we’re using a wrapper function in place of the real function, we can create another function that generates this wrapper function. We’ll call this new function curry — a higher order function that returns a series of nested accumulator functions that invoke the callback function fn in the end.

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
sum3(1)(2)(3)
```

---

## References
- [Currying in JS - Medium](https://hackernoon.com/currying-in-js-d9ddc64f162e)
- [Closures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Arguments - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)

# Promise
- Author : [SeolHun](https://github.com/Seolhun/)

## Goal

## Overview

## Content
1. 

2. 메서드
	- Promise.all(iterable)
		- 인수 iterable 내의 모든 프로미스가 결정된 때 결정되며 하나의 프로미스라도 거부된 경우 즉시 거부하는 프로미스를 반환합니다. 이 프로미스가 결정되는 경우, iterable 내의 프로미스가 결정한 값들의 배열로 결정됩니다. 반환된 프로미스가 거부되는 경우, iterable 내의 거부된 그 프로미스가 거부된 이유를 그대로 이용해 거부합니다. 이 메서드는 여러 프로미스의 결과를 모두 모으는 데 유용할 수 있습니다.
	- Promise.race(iterable)
		- iterable 내 프로미스 중 하나를 결정 또는 거부하자마자 결정 또는 거부하는 프로미스를 반환합니다, 그 프로미스로부터 값 또는 이유로.
	- Promise.reject(reason)
    	- 주어진 reason(이유)로 거부된 Promise 객체를 반환합니다.
	- Promise.resolve(value)
    	- 주어진 값(value)으로 결정된 Promise 객체를 반환합니다. 값이 thenable 객체인(즉 then 메서드가 있는) 경우, 반환된 프로미스는 그 thenable을 "따르고(follow)", 그 최종 상태를 취합니다; 그렇지 않으면 반환된 프로미스는 그 값으로 이행됩니다. 보통, 값이 프로미스인지 아닌지 알고 싶은 경우 - 대신 Promise.resolve(value)로 쓰고 프로미스처럼 반환값으로 작동합니다. 

3. Promise 프로토타입
	- Promise.prototype.constructor
    	- 인스턴스의 프로토타입을 만드는 함수를 반환합니다. 이는 기본으로 Promise 함수입니다.

	- 메서드
		- Promise.prototype.catch(onRejected)
    		- 프로미스(promise)에 거부 처리기 콜백을 추가하고 호출된 경우 콜백의 반환값 또는 프로미스가 대신 이행된 경우 그 원래 이행(fulfillment)값으로 결정하는(resolving) 새 프로미스를 반환합니다.
		- Promise.prototype.then(onFulfilled, onRejected)
    		- 프로미스에 이행 또는 거부 처리기를 추가하고 호출된 처리기의 반환값 또는 프로미스가 처리되지 않은 경우 그 원래 처리된(settled) 값으로 결정하는 새 프로미스를 반환합니다 (즉 관련 처리기 onFulfilled 또는 onRejected가 undefined인 경우). 

## Examples

## References
- [JavaScript Mozila - Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

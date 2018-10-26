---
title: '[React/Redux] Redux-Saga를 이용한 Redux Middleware 구현해보기'
type: 'post'
author: 'Seolhun'
date: '2099-05-18'
weight: 1
categories: ['JavaScript', 'React', 'Redux']
categories_weight: 10
tags: ['JavaScript', 'React', 'Redux']
tags_weight: 10
---
React-Thunk와 함꼐 Saga를 알아보던 중 Saga의 장점이 많이 부각되고 많이 언급되는 것 같아 Saga를 알아보면서 그에 대한 예제와 장단점을 파악해보고자 합니다. Redux-saga에 대해 큰 매력을 느꼈고, 기회와 능력이되면 Redux-saga에도 기여를 하고 싶은 마음입니다.


## Redux란?
페이지에서 관리되는 State(즉, Data)를 React가 아닌 Redux Instance 내에서 관리하여 해당 값들을 React와 연결하여 쉽게 사용할 수 있도록 만들어주는 상태관리 라이브러리입니다.

> 리덕스를 알아보기 전에 리덕스 없이는 어떻게 상태관리를 할까요?

리덕스 없이 리엑트만 사용한다면, React는 이러한 양방향 바인딩이 아니기 때문에 실행부 자체 내에서 데이터의 변화를 감지하지 않으며, 데이터에 변화가 오게 되면, 특정 함수(`setState()`)를 실행시킴으로써 DOM 객체를 갱신해야합니다. 하지만, 부모의 하나의 상태 값을 이용하여 여러 Component로 분리하여 렌더링 시켰다면 이를 하나하나 관리해주어야 하므로써 복잡도가 크게 상승합니다. 예를 들면, 하나의 자식이면 함수 하나만 전달하면 되기 때문에 큰 문제는 없지만, 자식 안에 자식 등이 이어진다면 해당 상태를 관리하기 위한 CallBack 지옥을 느낄 수 있습니다.

위의 얘기를 리덕스와 연관지어본다면, 페이지 내에서 관리하던 상태를 Redux로 분리하였기 때문에 코드의 간결성이나 복잡도가 줄어들고 어디서든 쉽게 상태를 이용하여 Reactive스럽게 페이지를 구성할 수 있는 이점이 생깁니다. 이러한

## Process
`View > Action >(DisPatch) > Saga > (DisPatch) > Reducer > State > View`

- Saga 안에서 여러개의 Method를 Dispatch 할 수 있다.
- 각각의 로직들을 Task로 관리할 수 있으며 비동기통신에 대한 처리를 제공해주므로써 해당 프로세스를 쉽게 관리할 수 있다.

Action부터 Reducer까지가 Redux의 중요한 포인트입니다. Saga라는 MiddleWare를 통해서 해당 Task들을 비동기 및 병렬로 처리할 수 있습니다. 이 외에도 Redux-Thunk를 이용하여 해당 상태를 관리할 수 있는 MiddleWare를 적용시킬 수 있습니다.

## Redux-Saga란?
redux-saga는 "Task"라는 개념을 Redux로 가져오기위한 지원 라이브러리입니다. 여기서 말하는 Task란 일의 절차와 같은 독립적인 실행 단위로써, 각각 평행적으로 작동합니다. redux-saga는 이 Task의 실행환경을 제공합니다. 더불어 비동기처리를 Task로써 기술하기 위한 준비물인 "Effect"와 비동기처리를 동기적으로 표현하는 방법을 제공하고 있습니다. Effect란 Task를 기술하기 위한 커맨드(명령, Primitive)와 같은 것으로, 예를들면 다음과 같은 것들이 있습니다.

- put
  - redux 스토어에 액션을 디스패치한다
- select
  - 셀렉터를 사용하여 기존 애플리케이션 상태의 일부를 얻어온다.
- call
  - 다른 saga들이나 promise 등을 호출할 수 있다.
- take
  - Action Method를 Dispatch한 결과를 가져온다.
- fork
  - 서브 프로세스를 트리거한 뒤 완료를 기다리지 않고 이동한다
- cancel

- cancelled

- delay
  - 다음 구문으로 이동하기 전에 주어진 기간동안 대기한다, Promise를 리턴한다

## Effects
- select
  - 현재 Store에 저장된 State의 값을 가져온다.
- take
  - Action Methods를 Dispatch하여 결과를 가져온다.
- call
  - 다른 saga(즉, Methods())와 Promise로 메소드를 호출할 수 있다.
- put
  - Redux Store에 해당 값을 Dispatch한다.
- fork
  -
- cancel
  - 포크되었던 서브 프로세스를 취소한다
- cancelled
  - 현재 프로세스가 켄슬되었었는지 확인한다

## Helper Effects
- all
  - 병렬로 실행되며, 각각의 결과를 모두 가져온다.
- Reactive스럽게
  - 병렬로 실행되나, 가장 빨리 완료된 것을 결과 값으로 한다.
- takeEvery
  - 다중 saga task들이 동시에 fork할 수 있데 허용해줍니다.
- takeLatest
  - takeEvery와 다르게 다중 saga task 처리하는 것을 허용하지 않습니다.
  - 새로운 Action을 얻으면, 이전 fork된 task는 이미 실행되었더라도 취소합니다.

## Test 방법
Action(Request) -> Saga(Mutate) -> Reducer(Dispatch)

Action을 시작으로 결국, Saga에서 해당 로직들의 비동기 처리 등에 대한 Task를 처리하고 이를 Reducer에서 State에 Dispatch하는 흐름을 거칩니다.

Saga 로직에서 하나의 Dispatch만을 일어나는 것이 아니라서 결국, Action을 시작으로 Saga를 테스트하는 방법을 선택해야 한다. 간단하게 얘기하면 Action을 기점으로 Sagas의 분기점이 나눠지고, 이에 따라 Reducer에서 Dispatch하는 것을 유추할 수 있다. 즉, 우리의 흐름대로 테스트 코드를 작성하면, Saga를 테스트하는 것이 가장 바람직하며, Saga 안에는 각각의 Action에서 Reducer까지의 로직이 필요할 것으로 보인다.

```js
//... imports

function* fetchAll() {
  const task1 = yield fork(fetchResource, 'users')
  const task2 = yield fork(fetchResource, 'comments')
  yield call(delay, 1000)
}

function* fetchResource(resource) {
  const {data} = yield call(api.fetch, resource)
  yield put(receiveData(data))
}

function* main() {
  try {
    yield call(fetchAll)
  } catch (e) {
    // handle fetchAll errors
  }
}
```
해당 saga(여기서, fetchAll())를 call하면 각각의 fork로 task가 관리되기때문에 해당 method를 실행시킬 method(main())에서 call()하면 병렬로 실행됩니다. 각각의 task가 병렬로 처리되므로 해당 method의 에러처리는 main()에서처럼 에러 catch를 해주어야 합니다.

## 어려웠던 점
Saga의 Action에서 Return된 타입들은 Saga를 거쳐 Reducer를 거치게되는데, 특히, 트리거되는 Type에 해당 saga의 mutation 기능을 같이 제공하면, 문제 없이 이를 해결할 수 있다.
즉, Action이 Trigger > Saga가 Mutate하며 > Reducer가 이를 Disapatch한다

<div class='text-center'>
  <img src="../../../images/contents/20180517/redux/redux-saga-flow.jpg">
</div>

## Contents
```tsx

```

## Outro

## References
- []()

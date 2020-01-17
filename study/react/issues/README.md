# React Issues

## Duplication Apps error

모듈을 만들어서 예제 파일에 넣었을 떄, external 되는 모듈 react와 react-dom의 충돌로 같은 context를 읽지 못함. 즉, Hook의 올바른 사용이라고 인지하지 못해 에러가 발생하게 됨. 

#### 관련 링크
- [Github Issue Link](https://github.com/facebook/react/issues/15315#issuecomment-479802153)
- [React Docs](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react)
- [Github InProgress Issue](https://github.com/facebook/react/issues/13991)

해당 문제는 

1. external을 유지하고 예제 폴더의 패키지를 삭제는 방법

```js
<!-- Modules -->
externals: {
  react: 'react'
}


<!-- Examples -->
// Webpack
resolve: {
  alias: {
    react: path.resolve('../node_modules/react'),
    'react-dom': path.resolve('../node_modules/react-dom'),
  }
}
```

2. npm link로 이미 설치된 패키지를 연결하는 방법
	- 아직 방법 모름.

이 존재하며, 현재 진행 중인 이슈를 참고하여 문제를 해결할 수 있을 것으로 판단함.
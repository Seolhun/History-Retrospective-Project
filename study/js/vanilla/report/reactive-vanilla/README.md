# VanillaJS Test README
- Author : Seolhun, Jaewoo

## previous
1. src/elements/index.js 코드 분석하기.
2. src/elements/index.js에 있는 코드를 개선해보기, 혹은 자신이 더 고민해서 구현해보기.
3. app.js에 `getUserList` 함수 구현
    1. fetch를 이용하여 localhost:3000/users 데이터 가져오기.
    2. details에 렌더링되는 함수를 참고하여, 가져온 데이터를 사용하여 렌더링 시킬 Elements 구현하기.
    3. index.html를 참고하여, `<section id='user-list'></section>` 안에 list 렌더링 하기.
    4. style은 src/assets/form.css에 정의하기.
4. **모르면 아래 참고사항 꼼꼼히 읽어보기, 그래도 모르면 검색하고 StackOverFlow 글 읽어보기, 또 모르면 검색/정리해서 질문하기.**


## this week
1. CreateElement부터 Rendering까지 직접구현
    1. index.html에 있는 Form을 제거
    2. Form과 1번 과제의 페이지의 기능을 순수 JS로 만들기
     

## How to submit report
1. Build commits in your github repository(Recommend `TIL`).
2. Make a Branch(Never use master), and PR from `Working Branch` to `master`.
3. Tell me PR URL, I will review your codes.
4. Finish.

## Pre-Requirement (Must download stable version)
1. [NodeJS](https://nodejs.org/ko/download/)
2. [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

## How to run
#### - Install
```bash
yarn install
or 
npm install
```

#### - Run Server
```bash
yarn dev
or 
npm run dev

http://localhot:3000
http://localhot:3000/users
```

#### - Run FrontEnd
```bash
yarn server 
or 
npm run server

http://localhot:8080
```

## References
0. [Vanilla-Js](http://vanilla-js.com/)
1. [MDN - createElement](https://developer.mozilla.org/ko/docs/Web/API/Document/createElement)
2. [MDN - setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
3. [MDN - Fetch_API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)
4. [AirBnb - JavaScriptGuid by Eslint](https://github.com/airbnb/javascript)
5. [json-server](https://github.com/typicode/json-server)





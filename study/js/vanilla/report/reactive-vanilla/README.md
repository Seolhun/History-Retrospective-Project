# VanillaJS Test README
- Author : Seolhun

## Reactive Programming by Vanilla JavaScript
1. src/elements/index.js 코드 분석하기.
2. src/elements/index.js에 있는 코드를 개선해보기, 혹은 자신이 더 고민해서 구현해보기.
3. app.js에 `getUserList` 함수 구현
    1. fetch를 이용하여 localhost:3000/users 데이터 가져오기.
    2. details에 렌더링되는 함수를 참고하여, 가져온 데이터를 사용하여 렌더링 시킬 Elements 구현하기.
    3. index.html를 참고하여, `<section id='user-list'></section>` 안에 list 렌더링 하기.
    4. style은 src/assets/form.css에 정의하기.
4. **모르면 아래 참고사항 꼼꼼히 읽어보기, 그래도 모르면 검색하고 StackOverFlow 글 읽어보기, 또 모르면 검색/정리해서 질문하기.**

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


## Mention
안녕하세요. 이번 과제에 대한 내용과 코드를 정리하였습니다.
https://github.com/Seolhun/retrospective-diary/blob/master/study/js/vanilla/report/reactive-vanilla/README.md

Repository를 따로 만드는 것은 제가 번거로울것 같아 파일로 올려드렸습니다. 해당 파일을 꼭 각자의 깃허브 Repo에 올려서 관리하시기 바라며, 과제 사항에 Github를 이용하는 것이 포함되어있습니다.

많은 부분을 직접 구현해놓았기에 참고하여 구현하실 수 있습니다. 당연히 제 코드에도 부족함이 있기에, 파악하여 질문 혹은 제안해주시면 감사드립니다.
README 사항을 꼭 읽어보시고, 해당 과제는 `온라인으로 미리 확인할 수 있기를 희망합니다.`

당연히 오프라인으로 리뷰나 질의응답 시간은 있겠지만, 깃허브로 미리 제출하시면 더 많은 양의 코드를 리뷰받을 수 있습니다.

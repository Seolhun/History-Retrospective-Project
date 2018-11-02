// babel이 없어서 인식을 못하는 것 같다.
// [참조] https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
// import {
//   createAndRenderElement,
// } from './elements';


//import './assets/form.css';

function dynamicallyLoadScript(url) {
  var script = document.createElement("script");  // create a script DOM node
  script.src = 'src/elements/index.js';  // set its src to the provided URL
  document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
dynamicallyLoadScript();


// below code contains email Validation AND submit Event(CreateElement and POST Data)
const Submitbutton = document.getElementById('submitButton');
const SubmitForm = () => {
  const form = document.getElementById('myForm');
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const passwordRepeat = form.elements['password-repeat'].value;

  if (!email || !password || !passwordRepeat) {
    alert('Email, password is required.');
    return;
  }
  if (password !== passwordRepeat) {
    alert('The password is incorrect.');
    return;
  }
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.trim(),
      password,
    }),
  }).then((response) => {
    response.json().then((data) => {
      createAndRenderElement({
        tag: 'div',
        attributes: [{
          name: 'class',
          value: 'hello',
        }],
        children: [{
          tag: 'h1',
          content: '회원가입을 축하드립니다.',
        }, {
          tag: 'div',
          content: `<label>Email : <span>${data.email}</span> </label>`,
        }, {
          tag: 'div',
          content: `<label>Password : <span>${data.password}</span> </label>`,
        }],
      }, document.getElementById('user-details'), true);
    });
  }).catch((error) => {
    console.error('@@@', error);
  });
};
Submitbutton.addEventListener('click', SubmitForm);




//1.fetch를 이용하여 localhost:3000/users 데이터 가져오기. 
const getDatabutton = document.getElementById('getdataButton');
const getUserList = () => {

  fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then( json => {
    for(var key=0; key<json.length; key++){     

          //2.details에 렌더링되는 함수를 참고하여, 가져온 데이터를 사용하여 렌더링 시킬 Elements 구현하기.

        createAndRenderElement({
          tag: 'div',
          attributes: [{
            name: 'class',
            value: 'hello',
          }],
          children: [{
            tag: 'div',
            content: `<label>id : <span>${json[key].id}</span> </label>`,
          }, {
            tag: 'div',
            content: `<label>Email : <span>${json[key].email}</span> </label>`,
          }, {
            tag: 'div',
            content: `<label>Password : <span>${json[key].password}</span> </label>`,
          }],
        }, document.getElementById('user-datas'), false)      
    }
  })
  .catch((error) => {
    console.error('@@@', error);
  });
};
getDatabutton.addEventListener('click', getUserList);




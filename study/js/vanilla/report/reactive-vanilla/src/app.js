import {
  createAndRenderElement,
} from './elements';

import './assets/form.css';

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


// Wrtie your codes here.


const getDatabutton = document.getElementById('getdataButton');
const getUserList = () => {
  //1.fetch를 이용하여 localhost:3000/users 데이터 가져오기. MSDN 및 위의 코드 참조

  fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then( json => {
    for(var key=0; key<json.length; key++){     
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
  

  //2.details에 렌더링되는 함수를 참고하여, 가져온 데이터를 사용하여 렌더링 시킬 Elements 구현하기.

  //3.index.html를 참고하여, <section id='user-list'></section> 안에 list 렌더링 하기.

  //4.style은 src/assets/form.css에 정의하기.


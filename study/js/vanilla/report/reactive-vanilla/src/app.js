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
const getUserList = () => {
  // Not Implements
};

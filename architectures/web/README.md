# Web Mirco Application

## Apps

- Platform
- Marketing Center
- CMS For CS Team

### App Modules

- Builder Module
- Authentication Module
- Management Module
- Contents Module
- API Module

## Stacks

### Languages
- Typescript

### Framework
- Next.js (SSR)
  - To build WAS server and CEO easilly
  - API Mock server with client
- React + CloudFront (CSR)

### Library
#### Confirmed
- React
- Style
  - Emotion
- Global State
  - Mobx
    - with Context
    - with Hook
- i18n
  - i18n-next - [Link](https://github.com/i18next/react-i18next)
- axios - [Link](https://github.com/axios/axios)
  - To set timeout
  - To set interceptos
- Form
  - React - [Link](https://react-hook-form.com/)
- day.js - [Link](https://github.com/iamkun/dayjs)
  - Moment를 대체하며, 훨씬 더 가벼운 라이브러리
- Test
  - Jest - [Link](https://jestjs.io/)
  - React Testing Library - [Link](https://github.com/testing-library/react-testing-library)
- Documentation
  - Stoybook
- CI/CD
  - Travis
- SEO Setting
  - [ ] Google
  - [ ] Naver
  - [ ] Daum

#### Considered
- Function utils
  - Lodash Winner In Big Data (about 10M)
    - BenchMark - [Link](https://www.educative.io/courses/functional-programming-patterns-with-ramdajs/RMkqx1Egxqz)
- Validator - [Link](https://github.com/validatorjs/validator.js)
- Mono Repo(?)
  - Lerna - [Link](https://github.com/lerna/lerna)
    - module 개발을 통해 하나의 서비스에는 찬성하나,
    - 멀티 서비스 앱 간의 사용은 CI/CD의 어려움이 존재함.

---

### Devops
- Kubernetes
  - Pods
    - A/B Test
  - Rolling Update
- Nginx
  - Reverse Proxy
  - Cache
  - Log

### Tools
- Stage/Dev Deployment environments
- Google Analytics
- Amplitude
- Intercom
- ZenDesk

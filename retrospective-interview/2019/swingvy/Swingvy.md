## Swingvy Slogan
1. 본질을 이해하라: Cloud & Human 
2. 기업가 정신을 가진 팀을 만들어라 
3. 기술력을 가장 중요시 하라 
4. 서비스의 초점을 흐리지 말라 
5. 브랜드를 만들어라 
6. 규모의 경제에 사활을 걸지만 작은 몸집을 유지하라
7. 네트워크를 구축하라

## Questions

### Goals
1. 본질을 이해하라: Cloud & Human 
2. 기업가 정신을 가진 팀을 만들어라 
3. 기술력을 가장 중요시 하라 
  - 현재의 기술력은 무엇이며, 앞으로의 기술력은 무엇이 될 것인가요?
4. 서비스의 초점을 흐리지 말라 
  - 1번과의 차이점이 무엇인지 물어보기.
5. 브랜드를 만들어라 
  - 스윙비를 한 문장으로 설명해주실 수 있나요?
6. 규모의 경제에 사활을 걸지만 작은 몸집을 유지하라
7. 네트워크를 구축하라

### API
#### Response
1. SignIn
  ```json
  {
    "code":701,
    "data":null,
    "message":"duplicate",
  }
  ```

  - Questions
    - Code가 무엇인지
      - 0일때가 200같긴한데,
    - duplicate가 HTTP status 500인 이유

2. Users
  1. TimeZone과 language, DateFormat 지원수
  ```json
    "timezone": "Asia/Singapore",
    "language": "EN",
    "dateFormat": "DD/MM/yyyy",
  ```
  2. 권한에 대해서, 권한의 종류와 비지니스 모델
  ```json
    "permissions": ["ADMIN", "MANAGER"],
  ```

3. Redux
  1. Redux가 사용되는 곳,
  2. Middleware 사용여부 
    - 사용하면, 무엇을 고려하였고 왜 그랬는지?
    - 사용하지 않다면, 왜 사용하지 않았는지?

4. Rxjs
  1. rxjs로 비동기 통신 이후 성공시 렌더링?

5. jQuery
  1. 용도
  2. 정도
  3. 왜?

6. 불편한 점
  1. Helper Center의 창 꺼짐

#### Request
1. Cookie 정보에 대해서 물어보기
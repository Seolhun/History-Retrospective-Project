# Hello, 5th SOSCON

## Hands on Workshop

## 오픈소스란 무엇인가?

1. Git이 필요한가 
  - Need vs Wants
  - 오픈세상에서는 Git이 Need
2. Commit 단위는 어느정도가 적당하고 좋은가?
  - git blame $fileName 같은 blame을 사용하였을 경우에 보여지는 로그에 대해서 생각해보아야 한다.
3. Issue/Discussion이 없으면 오픈소스라고 할 수 없다
  - ex) 리누스 토발즈가 Merge, Push 권한이 있다고 새로운 기능을 함부로 개발하지 않는다. - 오픈소스 문화를 퇴색시킬 수 있기 때문에...
4. How to make a bug rpoert
  - Environments
  - Error message
  - When, Why hapeen?


## 오픈소스 협업구조

- Fork의 필요성
  - local과 remote의 확실한 이해가 필요하다
- Commit Message는 어떻게 작성할것인가?
  1. 발생 배경
  2. **발생 이유 (80%)** : How에 대한 배경인데, 이는 코드에서 보이지 않기 때문에 글로 자세히 표현되어야 한다.
  3. 해결 방법 (20%) : Why에 대한 해결방법은, 이미 코드에 존재하고 있기 때문에, 간략하게 적어준다.
    - Best Practice는 코드에 대한 변화사항을 이미지 혹은 코드(결과) 비교로 보여주는 것이 제일 좋다.
  4. 1,2 번을 Body에 3번을 Description에 넣는다.
  5. Git과 관련된 Issue가 있다면 Issue 번호 혹은 Commit Hash id를 적어준다.
    - ex) Fixed #100
    - ex) It is related to the commit 5367er32 ("fs ext4: Add the B featur...")
  6. 관련 정보와 부가정보를 함께 기록한다.
    - CC: Email
    - Reviewed-By(Approved-By): Email 혹은 Name
    - ...
    - CLA(Contributor License Agreement) 등록(라이센스 관련)
- Rebase 잘 사용하기
- Force Push 조심하기, Revert를 잘 활용하기

## 오픈소스 협업 실습하기
- 세션으로 생략
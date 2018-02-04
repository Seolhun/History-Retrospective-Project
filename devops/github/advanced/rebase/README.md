# How to `Git Rebase`
- Author : [SeolHun](https://github.com/Seolhun/)

## **How to Git Rebase 방법** - 상당히 중요
[https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase%ED%95%98%EA%B8%B0](https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase%ED%95%98%EA%B8%B0)
1. git merge와 결과는 같지만 commit history를 다르게 만든다는 것이 중요하다.
2. 작업 순서
	- `git checkout <work branch> - ex) git checkout notices`
	- `git rebase <rebase branch> - ex) git rebase master`
	- `git push --force `
3. 깃은 작업이 같지만 이를 모르기 때문에 pull을 권유한다. pull하지말고 git push --force한다.
	- `git push -f`

## **Git Rabase하여 `해당 커밋 제거`하기**
1. git log를 확인한다.
	- `git log`
2. 불러올 커밋이력까지의 커밋번호를 적는다(ex - 373ddc4c66f2a4f8677a207e6244228cfd89a464)
	- `git rebase -i 373ddc4c66f2a4f8677a207e6244228cfd89a464`
3. 해당 커밋마다 종류를 선택한다.
	- `drop, pick 등 각 커밋마다 진행될 옵션을 선택한다.`

	
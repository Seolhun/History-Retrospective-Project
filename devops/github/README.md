# How to use `Git-Hub for Biginner`
- Author : [HunSeol](https://github.com/Seolhun/)

## Git init
`git init`
> `.git` directory is made. this is tracking your all action.
- 해당 폴더를 git이 트래킹 한다. 
- git remote add origin {remote-repository-url}
- remote-repository-url = https://github.com/Seolhun/shooney.github.io.git 와 같은 깃허브의 리파짓토리 주소값
- 이제 git remote add 명령어로 원격 저장소를 origin이라는 이름으로 등록합니다. 이제 origin을 사용하면 원격 저장소에 접근할 수 있습니다.

## Git remote origin
1. `git add remote origin ${Your Github Repository URL}`
2. `git remote -v`
> Printing `${Your Github Repository URL}`
3. `git remote set-url origin ${Your Github Repository URL}`
> Printing `${Your Github Repository URL is Changed}`

## Branch
1. git branch
> Printing `${All Branches}`

#### Creation Branch
1. git branch `${branch_name}`
2. git checkout `${branch_name}`

#### Management Branch
1. Remove Deleted Branches.
	- git remote prune origin을



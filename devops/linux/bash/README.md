# bash 쉘(Shell) 이란?
- 쉘(Shell)은 운영체제에서 사용자가 입력하는 명령을 읽고 해석하여 대신 실행해주는 프로그램입니다. 운영체제 상에서 다양한 운영체제 기능과 서비스를 구현하는 인터페이스를 제공하며, 사용자와 운영체제의 내부(커널) 사이의 인터페이스를 감싸는 층이기 때문에 셸이라는 이름이 붙었습니다. 쉘은 운영체제에서 필수적으로 존재합니다.
- 운영체제는 로그인한 사용자가 없다면 하나의 쉘도 실행되지 않은 상태이며, 사용자가 로그인을 시도하면 운영체제는 ID와 패스워드를 받아들이는 로기은 프로그램을 실행하고, 사용자가 입력한 ID와 패스워드를 검증한 후 인증된 사용자라면 쉘을 실행하여 사용자 세션을 쉘에게 전달합니다.
- 쉘의 역할은 사용자가 입력한 명령을 해석하여 대신 실행해주는 것입니다. 쉘의 내부 명령어라면 스스로 실행한 뒤 화면에 표시해주고 내부 명령어가 아니라면 PATH 환경변수에 지정된 경로에서 입력받은 명령과 같은 파일을 찾아 exec() 시스템콜을 호출하여 실행한 뒤 키보드와 마우스 등의 입력장치와 모니터에 해당하는 표준 출력장치의 제어권을 해당 프로그램에 넘겨준 뒤 프로그램이 끝날 때 까지 대기하는 역할을 합니다.
- bash 쉘은 유닉스에서 사용하는 커맨드 쉘의 일종으로 GNU 프로젝트를 위해 만들어졌습니다. 초기의 유닉스 쉘인 본 쉘(Bourne Shell)과 새로 태어났다는 뜻의 영어 ‘born again’을 합쳐 본 어게인 쉘(Bourne-again Shell)이라고 불렸으나, 일반적으로 bash로 줄여 부릅니다.

## Login Shell 과 Non-Login Shell
#### Login Shell
- Login은 ID와 패스워드를 입력해서 Shell을 실행하는 것을 말합니다. 따라서 ssh로 접속하거나 로컬에서 GUI를 통해 Shell을 실행하는 것은 Login Shell 입니다. 
- .profile, .bash_profile 이 두 파일은 Login할 때 로드되는 파일입니다. .profile은 꼭 bash가 아니더라도 로그인하면 로드되며, `.bash_profile은 꼭 bash로 로그인 할 때만 실행`됩니다.

#### Non-Login Shell
- Non-Login Shell은 로그인 없이 실행하는 Shell을 말합니다. ssh로 접속하고 나서 다시 bash를 실행하는 경우나, GUI 세션에서 터미널을 띄우는 것도 여기 해당합니다. `sudo bash`나 `su`같은 것도 해당합니다.

---
## bash_profile과 bashrc차이?
#### .bashrc
- 이미 로그인 한 상태에서 새 터미널 창을 열 때마다 로드됩니다. (Non-Login Shell에서 실행됩니다.)

#### .bash_profile
- 시스템에 로그인할 때마다 로드됩니다. (Login Shell에서 실행됩니다.) 대부분 개별 사용자에 대한 설정에 대한 코드들이 들어갑니다. 예를 들면 nvm(Node Version Manager)은 기본적으로 nvm을 사용하지 않고 Node를 설치할 때와는 다르게 각 사용자의 경로에 설치되게 되는데, 이럴때 nvm의 PATH를 .bash_profile 파일에 기재합니다.

- child shell은 부모로부터 환경변수를 이어받으니 .bashrc에서 따로 PATH를 설정해 줄 필요는 없습니다. GUI 환경에서 새 terminal을 여는 경우에는 login shell로 처리되지 않으므로 주의가 필요합니다.

#### Solution
- 만약 Mac에서 새 터미널 창을 열 때마다 `.bashrc를 로드하고 싶다면 .bash_profile에서 .bashrc를 로드`하면 됩니다.
```bash
# Source bashrc
if [ -f ~/.bashrc ]; then
    . ~/.bashrc
fi

```

#### Alias and Disaplying PWD
```bash
#.bash_profile
if [ -f ~/.bashrc ]; then
. ~/.bashrc
fi

export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh

# Show always fullpath on terminal
export PS1='\u@\H [\w]$ '
export PATH="/usr/local/opt/m4/bin:$PATH"

# Disaply git branch
PS1='\[\033[0;32m\]\[\033[0m\033[0;32m\]\u\[\033[0;36m\] @ \w\[\033[0;32m\]\n$(git branch 2>/dev/null | grep "^*" | colrm 1 2)\[\033[0;32m\]└─\[\033[0m\033[0;32m\] \$\[\033[0m\033[0;32m\]\[\033[0m\]'

# NodeJS
#export NODE_ENV="production"
#===================
# Personnal Aliases
#===================
alias bp='vim ~/.bash_profile'
alias sbp='tail -n 20  ~/.bash_profile'

#=============
# ZIGZAG Part 
#=============
alias zz='code ~/git/zigzag/'
alias mzz='cd ~/git/zigzag/'
alias zz:m='cd ~/git/zigzag/apps/management/'
alias zz:s='cd ~/git/zigzag/apps/seller/'

alias sc='code ~/git/zigzag/services/goods-update/app/scrapers/'
alias sc:m='cd ~/git/zigzag/services/goods-update/app/scrapers/'

alias gu:m='cd ~/git/zigzag/services/goods-update/'
alias gu:r='cd ~/git/zigzag/services/goods-update/app/ && npm run console:real'

#================
# ZIGZAG AWS Part
#================
alias aws:search='ssh -i "~/.aws/ZIGZAG-Elastic-Search.pem" ubuntu@ec2-52-78-36-142.ap-northeast-2.compute.amazonaws.com'
```
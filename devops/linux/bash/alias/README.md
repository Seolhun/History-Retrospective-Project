# Bash Profile에 alias 정의하기
- Author : [SeolHun](https://github.com/Seolhun/)

## Process
- `vim ~/.bash_profile`

```bash
#.bash_profile
if [ -f ~/.bashrc ]; then
. ~/.bashrc
fi

# Disaply git branch
PS1='\[\033[0;32m\]\[\033[0m\033[0;32m\]\u\[\033[0;36m\] @ \w\[\033[0;32m\]\n$(git branch 2>/dev/null | grep "^*" | colrm 1 2)\[\033[0;32m\]└─\[\033[0m\033[0;32m\] \$\[\033[0m\033[0;32m\]\[\033[0m\]'

#===================
# Personnal Aliases
#===================
alias bp='vim ~/.bash_profile'
alias sbp='tail -n 40  ~/.bash_profile'

# AWS Information
alias aws:s='tail -n 40 ~/.aws/credentials'

#=============
# hunseol Part 
#=============
alias hs:c='code ~/git/hunseol/'
alias hs:m='cd ~/git/hunseol/'
```

- 터미널을 껐다 다시 켜서 `root`를 입력하면 홈 다이렉토리로 가는지 확인한다.
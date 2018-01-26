# Bash Profile에 alias 정의하기
- `vim ~/.bash_profile`
```bash
#.bash_profile
if [ -f ~/.bashrc ]; then
. ~/.bashrc
fi

#===================
# Personnal Aliases
#===================
alias bp='vim ~/.bash_profile'

#=============
# ZIGZAG Part 
#=============
alias zz='code ~/git/zigzag/'
alias sc='code ~/git/zigzag/services/goods-update/app/scrapers/'
alias msc='cd ~/git/zigzag/services/goods-update/app/scrapers/'

alias gu='cd ~/git/zigzag/services/goods-update/'
alias rgu='cd ~/git/zigzag/services/goods-update/app/ && npm run console:real'
```

- 터미널을 껐다 다시 켜서 `root`를 입력하면 홈 다이렉토리로 가는지 확인한다.
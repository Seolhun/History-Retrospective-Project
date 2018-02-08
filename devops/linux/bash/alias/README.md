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
alias sbp='tail -n 40  ~/.bash_profile'

# AWS Information
alias aws:s='tail -n 40 ~/.aws/credentials'

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
```

- 터미널을 껐다 다시 켜서 `root`를 입력하면 홈 다이렉토리로 가는지 확인한다.
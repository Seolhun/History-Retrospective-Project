# Basic Bash shell

## 1. Loop 
```bash
# 시작값, 끝 값, 증가값
for i in {1..10};do echo "Hello $i";done
# 현재 증가값을 넣으면 작동되지 않으며 이유를 찾아야함.
# for i in {1..10..2};do echo "Hello $i";done
```

## 2. Get Date
```bash
DATE=`date +%Y-%m-%d`
DATE2=`date '+%Y-%m-%d %H:%M:%S'`
echo $DATE # 2018-02-07
echo $DATE2 # 2018-02-07 17:41:26
```

## 3. Get Git Branch name
```bash
CURRENT_BRANCH_NAME=`git rev-parse --abbrev-ref HEAD`
echo $CURRENT_BRANCH_NAME
```

## 4. If Statement
1. IF & LOOP
```bash
if [ $1 -gt 100 ]
then
	echo Hey that\'s a large number.
	pwd
fi
```

2. If null
```bash 	
THISISNULL=''
if [ -z "$THISISNULL" ]
then
  echo 'true'
else
  echo 'false'
fi
```

## 5. CURL
1. POST
```bash
curl --data "branch_name=$CURRENT_BRANCH_NAME&url=$DEPLOYED_URL&deployed_date=$DATE&deployed_by=$DEPLOYED_BY" http://localhost:3000/tests
```
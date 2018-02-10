# [Linux] Curl 명령어 


## Curl
1. 응답을 파일에 쓰기
```bash
$ curl http://example.com/resource > foo.txt
```
- 옵션 없이 호출하는 curl 커맨드는 표준 출력으로 응답을 출력하는데, 위와 같이 출력을 리다이렉트해서 파일에 쓸 수 있다.

2. 파일명으로 저장하기
```bash
$ curl -o foo.txt http://example.com/foo.txt
```
- `-o` 옵션으로 리소스의 파일명을 지정해 다운로드할 수 있다.

```bash
$ curl -O http://example.com/foo.txt
```
- `-O` 옵션을 사용하는 경우, 리소스의 파일명을 그대로 사용한다.


3. 여러 파일 다운로드 받기
```bash
$ curl -O http://example.com/foo[0-9].txt
```
- 위 코드는, foo0.txt 부터 foo9.txt 파일을 다운로드 받는다.

```bash
$ curl -O http://example.com/foo-[a-z][0-9].txt
```
- []는 여러 번 조합할 수 있고, 위 코드는 foo-a0.txt 부터 foo-z9.txt 까지의 파일을 다운로드 받는다.

```bash
$ curl -O http://example.com/{foo,bar,baz}.txt
```
- 중괄호({})를 써서 위와 같이 호출할 수도 있고, foo.txt, bar.txt, baz.txt 를 다운로드 받는다.

4. for 문으로 여러 파일 다운로드 받기
```bash
$ files="foo bar baz"
$ for name in files; do
	curl -O "http://example.com/${name}.txt"
done
```

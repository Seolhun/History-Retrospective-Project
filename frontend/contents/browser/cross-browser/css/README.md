# CSS

## 단위 문제 (width / height)
- Modern Browser(Chrome, Firefox, Edge)
- Safari
	- px과 같은 단위를 입력하지 않으면 정상 작동 X
- Opera
	- px과 같은 단위를 입력하지 않으면 정상 작동 X
- Internet Explorer

## overflow
- Modern Browser(Chrome, Firefox, Edge)
- Safari,
	- Modal과 같은 Node를 열었을 경우 html 태그에 overflowY: hidden 속성이 적용되지 않음.
	- Refs
		- [overflow-y-not-working-in-safari-inside-a-modal](https://stackoverflow.com/questions/35469227/overflow-y-not-working-in-safari-inside-a-modal)
	- 결론
		- overflowY,X가 safari에서 적용되지 않아 overflow로 해결
- Opera
- Internet Explorer


## Flex
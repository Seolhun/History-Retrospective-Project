# ZigZAG Scrapers 종류와 설명
- [ZIGZAG Scrapers로 가기](https://github.com/croquiscom/zigzag-scrapers/wiki/%EC%8A%A4%ED%81%AC%EB%A0%88%EC%9D%B4%ED%8D%BC)

## Scrapers 종류
1. update_main_goods
	- 한시간에 네번 상품 목록 갱신
	- cron: */15 * * * *
2. update_alive_goods
	- 서비스 중인 상품 정보를 갱신한다
	- 현재 돌고 있는 작업이 없으면 시작한다
	- cron: */10 * * * *
3. update_deleted_goods
	- 품절된 상품 정보이 다시 판매중인지 검사한다
	- 현재 돌고 있는 작업이 없으면 시작한다
	- cron: */10 * * * *
4. update_preset_goods
	- 프리셋에서 삭제/품절된 상품을 제거한다
	- 매일 두번 (오전, 오후 7시 반) 실행한다.
	- cron: 30 10,22 * * *

## Model 분석
- Goods
	- Main Column
		- `item` : 해당 아이템들을 모아 놓은 곳에서 해당 1개의 아이템 돔까지 - ex) ul > li
		- `proudct_no`
		- `title` : 120자가 최대(앱에서 보여주기 위한 최대치)
		- `price`
		- `url`
		- `image_url`

- goods와 detail의 교차검증을 통해 유효성을 검사한다.

## Scrapers 만드는 방법/분석
- deleted_pattern : 품절되는 것을 확인하는 방법
- removed_selector : 보이지 않는 태그를 긁지 말게 하는 것. (지우고 시작하는 것)
- parser : 함수로 작성하여 정해진 값을 찾는 것.(최신 가격이 밑이 아니라 맨 위에 있을 때)
- extractor : 해당 규칙에서 정해진 값을 추출할 때.
- exports.main_url : Main.URL을 변경한다.(메인에 사진만 있을 경우 주로 사용.)
- cafe24_badges : 사진과 함께 보여줘야 하는 것. 앞의 숫자는 `%`이다.
	- xratio
	- yratio
- title_modified : 제목이 수정되었을 경우 

## 공통 사항 정의된 파일
- cd /Users/hunseol/git/zigzag/services/common
	- `constant.ts`
	- `url_utils.ts`

## Examples
- Directory
	- cd ~/git/zigzag/services/goods-update/app/scrapers
	- npm run preconsole
	
- Usabled function
	- npm run console:real
		- `CheckScraperPrivateService.checkScraper(shop_id, limit?)`
		- `ScraperPrivateService.common_scraper.debug = ['title','price']`

- Scraper repository
	- cd ~/git/zigzag/services/goods-update/app/scrapers
	- git push(master)

- goods-update : Deploy 방법
	- cd ~/git/zigzag/services/goods-update
	- git pull
	- npm run deploy


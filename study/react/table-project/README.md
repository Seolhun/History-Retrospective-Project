# ab180 프론트엔드 기술 면접 과제

1회 요청 시 1,000개의 데이터를 내려주는 API가 있습니다.  
**API를 요청하고, 요청을 통해 받은 데이터를 보여주는 테이블을 React로 구현하십시오. **



## 조건
1. 전체 데이터를 한번에 보여주는 스크롤 테이블, 페이지네이션이 적용된 테이블을 구현합니다.
2. 각 테이블은 `react-router` 로 분리된 페이지에 렌더되어야합니다.
3. 페이지네이션이 적용된 테이블에는 페이지당 10개의 row를 노출합니다.



## 유의사항

1. 테이블은 반드시 **본인이 순수 구현** 해야합니다.
2. **외부 UI 혹은 컴포넌트 라이브러리의 사용은 불가합니다.**
3. 2와 관련이 없는 라이브러리들의 사용은 가능합니다. (ex. HTTP Request 라이브러리 등)
4. 테이블의 UI/UX는 본인이 직접 설계, 구현합니다.
5. 테이블의 미적 디자인은 기술 면접시 채점의 대상이 아닙니다.



## 구현

#### URL 설계

* Fig 1: `/pagination`
* Fig 2: `/scroll`
* 첫 화면 및 Router 내에 해당하는 주소가 없을 때는 **Fig 1** 으로 Fallback 되게 한다.
* 라우팅은 **BrowserRouter**를 사용한다.



> **Fig 1. 페이지네이션이 들어간 테이블**
>
> ![Fig. 1](https://lonely-clocks.surge.sh/technical_interview__table__eg1.jpg)

> **Fig 2. 스크롤이 가능한 테이블**
>
> ![Fig. 2](https://lonely-clocks.surge.sh/technical_interview__table__eg2.jpg)



## 프로젝트 시작하기
```
git clone
cd ab180-interview
npm install
npm start
```


## API

#### API 명세

아래의 Method, Endpoint를 참조, **Parameter에 Value를 대입하여** 데이터를 불러옵니다.

- **Method**: GET
- **Endpoint**: http://openapi.seoul.go.kr:8088/*<_API_KEY>*/json/CardBusStatisticsServiceNew/*<_PAGE_NO>*/*<_ROW>*/*<_DATE>*/

| Parameter | Value                            | Description     |
| --------- | -------------------------------- | --------------- |
| _API_KEY  | `686e75796968696438376a6947427a` | API 키          |
| _PAGE_NO  | 1                                | 페이지 넘버     |
| _ROW      | 1000                             | 데이터의 수     |
| _DATE     | 20170301                         | 날짜 (YYYYMMDD) |



#### 주의사항

- 개발 및 테스트 시 과도한 API 요청은 삼가주시기 바랍니다.
- 화면 및 상태에 관계 없이, 동일한 Method, Endpoint에, 동일한 Value를 대입하여 API를 요청합니다.
- API 오류 발생시(Response가 다름, 요청이 안됨 등...) 문의 부탁드립니다.




#### Response

###### Key-Value Format

| key  | value |
|---|---|
| USE_DT  | 사용일자  |
| BUS_ROUTE_ID  | 노선 ID  |
| BUS_ROUTE_NO  | 노선번호 |
| BUS_ROUTE_NM  | 노선명  |
| SSNT_BSST_ID  | 표준 버스정류장 ID |
| BSST_ARS_NO  | 버스정류장 ARS 번호 |
| BUS_STA_ID  | 역 ID |
| BUS_STA_NM  | 역명 |
| RIDE_PASGR_NUM  | 총 승차 승객수  |
| ALIGHT_PASGER_NUM  | 총 하차 승객 수 |
| WORK_DT  | 등록일 |



###### Example

```json
{
    "CardBusStatisticsServiceNew": {
        "list_total_count": 37249,
        "RESULT": {
            "CODE": "INFO-000",
            "MESSAGE": "정상 처리되었습니다"
        },
        "row": [
            {
                "USE_DT": "20151101",
                "BUS_ROUTE_ID": "11110001",
                "BUS_ROUTE_NO": "100",
                "BUS_ROUTE_NM": "100번(하계동~용산구청)",
                "STND_BSST_ID": "100000003",
                "BSST_ARS_NO": "01003",
                "BUS_STA_ID": "0007197",
                "BUS_STA_NM": "명륜3가.성대입구",
                "RIDE_PASGR_NUM": 108,
                "ALIGHT_PASGR_NUM": 171,
                "WORK_DT": "20151203"
            }
        ],...
	  }
}
```



## 책임의 한계 및 고지사항

본인 및 회사 외의 제3자에게 면접 과제를 유출하는 것을 금지합니다.
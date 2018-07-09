# 2018 6월 2주차
- Author : [Seolhun](https://github.com/Seolhun)
- Date : 20180611 ~ 20180615

## 주간 작업 리스트	
- [] Example

## 2주차 개인 작업 목표 리스트
- [X] RxJS-Observable을 이용한 간단한 Sample 만들어보기( ~ 12일)
	- [X] RxJS 문서 읽어보기 및 AppList로 테스트해보기
- [ ] Storybook을 설정잡아보기( ~ 15일)
	- [ ] 가장 간단한 `<Spinner />`로 Test해보기
- [X] 프론트엔드 과제 해보기 19시 ~ 22시(오늘 저녁에 할 예정)

## 6월 2주차 확정 작업 리스트 
#### Magor
- [] 필터와 테이블 옵션을 저장하여 고객이 원하는 통계 테이블을 추가로 만들 수 있는 기능
- [] 대행사 권한을 가진 계정에서 유료광고 채널 관리 메뉴의 기여기간 설정 메뉴로 접속하면 빈페이지로 랜딩됨.
- [] Table 단위에서 BulkRemove Button 처리하기.

#### Minor
- [] 필터 기준 변경 시 설정된 Value 리셋
	- RetentionFilter.jsx
	- CustomStats.Filter.jsx
- [] 새로운 메뉴 릴리즈시 `NEW`가 달리는데, 빼는 deadline이 없음
	- SidebarConstant.jsx
		- isNewFeature
- [] 대행사 권한을 가진 계정에서 유료광고 채널 관리 메뉴의 기여기간 설정 메뉴로 접속하면 빈페이지로 랜딩됨
	- 관리 > 유료광고 채널관리
		- Contribution.jsx	
- [] 통계 테이블 기준 필터 선택 시, 선택된 항목만 TitleCase 로 표시됨 => 모든 항목이 TitleCase로 표시되어야 함

## 고려사항 및 에로사항
1. Component 안에 Container가 들어가는 구조로서 Component를 수정하고 재사용하기가 쉽지 않다.
	- Component 규칙과 Container 규칙 수립 - 코드리뷰 후 무조건 Merge되기
2. Redux 구조를 API 버전업과 여러가지 이유와 맞추기 위해 Observable를 조금씩 변경준비를 해야할 것 같음.
3. 파일 경로로 해당 파일의 특성을 알아낼 수 있지만, Component와 Container의 경우에는 해당 파일에 명시하는게 render시 해당 속성을 파악하기 더 쉬울 것으로 판단 됨
	- **파일명과 ClassComponent(Container) 또는 function 이름 통일**
	- **Export default여도 import시 해당 파일이름과 통일하기!!**
4. Component는 local style 적용
	- global CSS는 Grid, Color 등과 같이 공통적으로만 사용될 속성만 사용.
	- global CSS는 가시적인 이름으로 수정 필요.
		- ```css
		/* 이것을 */
		.ml-z {
  		margin-left: 0;
		}
		/* 이렇게 */
		.margin-left-0 {
			margin-left: 0;	
		}
		```
5. PropTypes 설정 컨벤션
	- Props 설정시 `isRequired가 아닌 경우` defaultProps도 propTypes와 같은 순서로 정렬할 것
	- isRequired가 아닌 것은 아래로 만들어 줄것.
	- 절대 props를 rest로 뿌려주지 않기 (children은 반드시 사용될면 isRequired로 선언하여 사용할 것)

```js
class CustomStatsFilterRowContainer extends Component {
  static propTypes = {
    // StateToProps
    calendar: PropTypes.shape({
      dateFrom: PropTypes.object.isRequired,
      dateTo: PropTypes.object.isRequired,
    }).isRequired,
    channelObj: PropTypes.objectOf(PropTypes.string).isRequired,
    filterChip: PropTypes.object.isRequired,
    POST_FILTER_CHIP: PropTypes.object.isRequired,
    tableType: PropTypes.number.isRequired,

    // DispatchToProps
    getCustomFilterChip: PropTypes.func.isRequired,

    // Component Props
    idx: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    filterData: PropTypes.array.isRequired,
    onClickUnit: PropTypes.func.isRequired,
    onCreateChip: PropTypes.func.isRequired,
    onDeleteChip: PropTypes.func.isRequired,

    children: PropTypes.node.isRequired,
  };
}
```
	
```js
<RetentionFilterRow
	{...prop}
  isFetching={
    POST_FILTER_CHIP.isFetching &&
    POST_FILTER_CHIP.label === dimension
  }
>
	{this.props.children}
</RetentionFilterRow>
```

6. Redux Action 경우 이름 Action이라 명명하기
- Method인지, Action인지 헷갈리는 경우가 많음.
	- `getAppList => getAppListAction`

	처럼;
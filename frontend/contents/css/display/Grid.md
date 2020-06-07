# CSS - What is Grid?

## Grid
그리드는 수평선과 수직선이 교차해서 이루어진 집합체입니다 - 하나의 집합체는 세로 열을 그리고 다른 하나는 가로 행을 정의합니다. 각 요소는 이러한 열과 행으로 된 라인을 따라 생성된 그리드에 배치할 수 있습니다.

#### 1. grid-template-areas
`grid-template-areas`는 grid layout 안에서 영역을 지정하는 속성입니다.

`grid-area` 속성을 사용하여 grid 항목의 이름을 지정한 다음, grid-template-areas 속성의 이름을 참조시킬 수도 있습니다.

```scss
.item1 { grid-area: header; }
.item2 { grid-area: left; }
.item3 { grid-area: center; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header'
    'left center right .'
    'footer footer footer footer';
  grid-gap: 5px;
}
```

#### 2. grid-gap
`grid-gap`은 row와 columns의 간격의 크기를 정의하는 속성입니다. `grid-row-gap`과 `grid-column-gap`의 두가지 하위 속성이 있습니다.

grid-gap은 row, column 순으로 px을 지정할 수 있으며, row와 column 별로 지정할 수 있습니다.
```scss
.grid-gap {
	grid-gap: 10px;
	grid-gap: 10px 5px;
	grid-row-gap: 10px;
	grid-column-gap: 5px;
}
```

> 위에 나온 Grid CSS 속성들을 사용하여 사용하여 간단한 예제를 만들어 봅시다.
<script async src="//jsfiddle.net/SHun10114/637hy0bp/embed/html,css,result/"></script>

## References
- [MDN - What is Grid](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90)

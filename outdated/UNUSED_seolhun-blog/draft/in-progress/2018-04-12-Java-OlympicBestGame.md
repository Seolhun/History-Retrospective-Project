---
title: '[Algorithm/Java] Programmers Algorithm 야근지수'
type: 'post'
author: 'Seolhun'
date: '2099-12-31'
weight: 1
categories: ['Algorithm', 'Javascript']
categories_weight: 10
tags: ['Algorithm', 'Javascript']
tags_weight: 10
---
- [SWexpertAcademy Olympic Game Election](https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWDTHsZ6r0EDFAWD&categoryId=AWDTHsZ6r0EDFAWD&categoryType=CODE)
- 난이도 : 4
- 정답률 : 57%


## 1. Question
2018년 올림픽은 한국에서 열린다. 이전 올림픽에서 채택되었던 종목에 더해 하나의 종목을 더 추가하려고 하는데, 다음과 같은 투표 과정을 거친다. 조직위원회가 정식 종목으로 새롭게 채택하고자 하는 종목 N개에 대해 재미가 있다고 생각되는 순서대로 나열한 리스트가 있다.

- 위에서부터 i번째로 있는 종목이 i번째로 재미있는 종목인 것이다.
- i번 종목을 개최하는데 드는 비용은 Ai이다.
- 조직위원회는 총 M명으로 구성되어 있으며, 순서대로 1번 위원에서 M번 위원이다.
- j번 위원은 개최 비용이 Bi를 넘지 않는 종목 중에서 가장 재미있는 경기에 표를 준다. 이 기준에 부합하는 경기는 모든 위원에 대해 반드시 존재한다.
- 가장 많은 표를 획득한 경기는 하나이다.


- Example
첫 번째 테스트 케이스를 예를 들어보자. N = 4개의 종목의 리스트와 M = 3명의 조직위원회가 있다.
<p>종목 A1 = 5, A2 = 3, A3 = 1, A4 = 4</p>
<p>조직 위원회 B1 = 4, B2 = 3, B3 = 2</p>
<p>조직위원회 B1 이하이면서 가장 앞쪽에 있는 종목은 A2 = 3 이다.</p>
<p>조직위원회 B2 이하이면서 가장 앞쪽에 있는 종목은 A2 = 3 이다.</p>
<p>조직위원회 B3 이하이면서 가장 앞쪽에 있는 종목은 A3 = 1 이다.</p>

조직 위원회의 투표가 끝나면 A2가 2표, A3가 1표, A1, A4가 각각 0표로 A2가 정식 종목으로 채택 된다.

이와 같이 종목 목록과 위원들의 정보가 주어질 때 가장 많은 표를 받은 종목은 몇 번인지 구하는 프로그램을 작성하라.

- [입력]
  - 첫 번째 줄에 테스트 케이스의 수 T가 주어진다. 각 테스트 케이스의 첫 번째 줄에는 N, M(1 ≤ N, M ≤ 1,000)이 공백으로 구분되어 주어진다.
  - 두 번째 줄에는 N개의 정수 A1에서 AN이 공백으로 구분되어 주어진다. Ai는 1이상 1000이하의 정수이다.
  - 세 번째 줄에는 M개의 정수 B1에서 BM이 공백으로 구분되어 주어진다. Bj는 1이상 1000이하의 정수이다.

- [출력]
  - 각 테스트 케이스마다 가장 많은 표를 획득한 경기의 번호를 출력한다.

- 입력
```
2           //test Case의 개수
4 3         // N = 4, M = 3
5 3 1 4     // Ai
4 3 2       // Bi
6 6
3 1 4 1 5 9
2 6 5 3 5 9
```

- 출력
```
#1 2
#2 1
```
## 2. Code
```java

```

## 3. Outro
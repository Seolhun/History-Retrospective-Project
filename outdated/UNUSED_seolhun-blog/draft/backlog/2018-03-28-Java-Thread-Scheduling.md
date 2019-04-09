---
title: '[Java/Thread/DataStructure] Java Thread와 Queue를 이용여 Producer & Consumer 패턴 구현하기'
type: 'post'
author: 'Seolhun'
date: '2099-03-28'
weight: 1
categories: ['Java', 'Thread', 'DataStructure']
categories_weight: 10
tags: ['Java', 'Thread', 'Qeue', 'Producer', 'Consumer', 'Pattern']
tags_weight: 10
---
안녕하세요, 설훈입니다.
이번에는 Java Thread를 이용하여 기본적인 LifeCycle을 이해하고 코드를 작성해볼까 합니다.
예제는 Thread 생산자 소비자 패턴과 함께 설명하겠습니다.


## Intro
스레드의 개수가 코어의 수보다 많을 경우, 스레드를 어떤 순서에 의해 동시성으로 실행할 것인가를 결정해야 하는데, 이것을 **스레드 스케줄링**이라고 합니다. 스케줄링에 의해 스레드들은 아주 짧은 시간에 번갈아가면서 run() 메소드를 실행시킵니다.
자바의 스레드 스케줄링은 우선순위(Priority) 방식과 순환 할당(Round-Robin) 방식을 사용합니다.
우선순위 방식은 우선순위가 높은 스레드가 실행 상태를 더 많이 가지도록 스케줄링하는 것을 말합니다.
순환 할당 방식은 시간 할당량(Time Slice)를 정해서 하나의 스레드를 정해진 시간만큼 실행시키고 다시 다른 스레드를 실행하는 방식을 말합니다.


## Contents
```java

```


## Outro

## References

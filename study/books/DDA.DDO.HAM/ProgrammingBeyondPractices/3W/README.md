# W1

Date: Sep 23, 2019 → Sep 29, 2019

## Learning Notes

---

- **Hoon**

## Designing software from the bottom up

### - Moments
- **Identify the nouns and verbs** of your problem space
- They continue to explore these ideas for a while, but the outcomes do not reveal much of anything about the simula‐ tor’s design.
- poke holes in anything if you look for weird enough edge cases; but if you stay within the realms of reason and run into problems, it may be a sign of a problem that needs to be addressed sooner rather than later.

### - Inspired
- 매번 얘기하지만, 개발은 문제의정의에서 시작된다. 즉 현재의 문제를 직면한 시점에서 문제에 대한 용어(단어, 동사 등)에 대한 정의를 올바르게 진행해야 한다. 여기서 가장 중요한 것은 **현재의 문제를 올바르게 정의하고 앞으로 해결하기 위한 방법과 결과물에 대해서 올바르게 정의한다는 것이 가장 중요한 포인트**라고 생각한다. 이러한 과정은 우리가 방향성으로 나가가고 있음을 확인할 수 있으며, 올바르게 가고 있는지에 대한 지표가 된다.
- 이러한 과정은 모든 문제를 해결하는데 도움이 된다. 즉, 문제를 향해 나아갈 때 이성적인 기준이 존재한다는 것은 문제를 올바르게 해결하는 과정이라고 할 수 있다. 이러한 과정은 시간이 지나면서 순간순간 우리가 위치한 상황을 인지할 수 있게 해주며, 시간을 역추적하는 회고를 통해서도 무엇이 잘못되었는지를 파악하는데 큰 도움이 될 수 있다. 매 순간 측정과 문제 해결에 대한 결과물을 확인할 수 있으며, 이를 점검하고 수정하는데 좋은 기준이 될 것이다.

### - Applying
- Team OKR과 개인의 OKR을 작성하여보자.
- 현재 진행하는 Project의 RoadMap과 Versioning을 작성해보자. 그리고 비교해보자.
- 팀원들과 해당 문제에 대해서 깊게 토론하고 테스트하고, 회고하여 우리가 생각하는 것처럼 진행되었는지 진단해보자.


## Data modeling in an imperfect world

### - Moments
- You illustrate your point by showing a table with the two work session records and how they would need to change:
- Assuming that all pending changes are clearly marked, timesheets and other reports can be immediately updated to reflect the requested changes rather than continuing to display incomplete or inaccurate information.
- If a request needs to be modified, then that too will be updated in real time and visible to everyone who needs to see it.
- Notifications about accepted and declined changes could be automated, prevent‐ ing the possibility of a decision being made without it being communicated.
- applying the event sourcing pattern in your data models can simplify things a bit.

### - Inspired
- 이번 챕터에서 기억에 남는 키워드는 **자동화, 실시간 반영, 모든사람과 공유, 비동기 의사소통**이라고 생각한다. 즉, 데이터와 관련된 변경사항들은 실시간으로 공유되고 프로세스화하여 관리할 수 있게 만들어야 한다.
- 데이터의 변경은 조금씩 최소한으로 바꿔야 하며, 이에 대한 문서를 실시간으로 반영하여 제안하는 형식으로 진행되는 것이 수월하다. 즉, 프로덕트의 안정성을 고려해서 반영되어야 하며, 이러한 제안사항들은 다른사람이 시각적으로 쉽게 이해하고 볼 수 있게 제안되어야 한다.

### - Applying
- 구글문서에 제안과 버저닝을 활용하여 문제에 사항들을 정리/공유/작성 하기
- Github Issue에 문서를 더 잘 작성하고 다른 사람에게 제안하여 토론문화 만들기
- 데이터를 자동화 할 수 있는 파이프라인에 대해서 문서화제안하기

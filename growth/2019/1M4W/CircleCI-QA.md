# Circle CI Process enhancement

## Purpose

- 단계를 두어 Build, Deploy 되는 비용을 줄이고, 필요할 때 작동 할 수 있도록 변경
- Context를 통일하고 팀 단위로 테스크를 자동화 하기 위함.

## Why

- Cypress and Storybook이 추가되고 QA 과정에 대한 Branch 전략을 개선.
- 프로덕트를 Step 별로 관리하고 Check List를 만들기 위함.

## TODO List

- CircleCI Configuration 재작성
- Branch 및 프로세스 문서 작성.

## Summary

#### Version 0.0.1

| Bracn Name     | Master               | Develop          | Stage/*                | Feature/*          |
| ---------------| ---------------      | ---------------  | -----------------      | -------------------|
| Description    | **Required Stage/*** | Not yet          | **Required Feature/*** | Task Branch        |
| What To do     | Deploy Prod          |                  | Test - Jest            | Good Thinking      |
|                | Surge Remove         |                  | Test - Cypress         | Build Plan         |
|                |                      |                  | Storybook              | Good & Hard Review |
|                |                      |                  | Surge Deploy           | Notice Others      | 

#### Version 0.0.2

| Bracn Name     | Master               | Develop          | Feature/*               |
| ---------------| ---------------      | ---------------  | ------------------------|
| What To do     | Deploy Prod          |                  | Test - Jest             |
|                | Surge Remove(Not Yet)|                  | Test - Cypress(Not Yet) |
|                |                      |                  | Deploy Storybook        |
|                |                      |                  | Deploy Surge            |

## Required Develop Branch
- Stage Branch는 너무 관리 어려움이 있어보임.
- Feature의 작업환경을 위해 Develop이 필요
	- Feature에서 Test/QA를 모두 끝낸 것만 Develop으로 가는게 제일 나을것으로 판담됨.
- Develop을 어떻게 관리할 것인가에 대한 부분이 얘기가 되어야 함.
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

| Bracn Name     | Master               | Develop          | Stage/*                | Feature/*          |
| ---------------| ---------------      | ---------------  | -----------------      | -------------------|
| Description    | **Required Stage/*** | Not yet          | **Required Feature/*** | Task Branch        |
| What To do     | Deploy Prod          |                  | Test - Jest            | Good Thinking      |
|                | Surge Remove         |                  | Test - Cypress         | Build Plan         |
|                |                      |                  | Storybook              | Good & Hard Review |
|                |                      |                  | Surge Deploy           | Notice Others      | 
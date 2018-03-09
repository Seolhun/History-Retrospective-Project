+++
date = "2018-03-08"
title = "[GraphQL]은 무엇인가? 사용후기 간단히 적어보기."
weight = 10
categories = [""]
categories_weight = 1
tags = ["", ""]
tags_weight = 1
type = "post"
+++


<!--more-->
- Author : [SeolHun](https://github.com/Seolhun/)
- Repo : [https://github.com/Seolhun/vue-type-graphql-example](https://github.com/Seolhun/vue-type-graphql-example.git)

## Overview
GraphQL을 사용하면서 간략한 정보를 정리해보고자 합니다.

## Content
기존의 RESTFul은 HTTP를 이용하여, URI(Uniform Resource Identifier)으로 해당 자원의 주소를 할당하여 어떠한 데이터를 가져올지 URI만으로도 구조를 쉽게 볼 수 있는 아키텍처스타일입니다. RESTFul하다는 것은 URI 설계를 통해 해당 자원의 주소를 잘 정의하여 단계 별 구조를 잘 표현했다는 것을 의미합니다. Github 사이트만 보아도 RESTful하게 잘 되있음을 알 수 있습니다.

그렇다면 GraphQL은 무엇인가하면, 기존의 URI를 통해 정의하던 RESTFul에는 많은 어려움이 있었습니다. 
1. 구조의 분산화
마이크로서비스가 활성화되면서 해당 API를 호출하여 데이터를 접근할 때, 1개의 데이터로 통합하기 위해서는 3번의 API를 호출해야 하는 상황이 발생됩니다.
2. 불필요한 데이터 전송
API를 호출하여 데이터를 전송받으면, 우리는 해당 서비스 로직대로 정의된 데이터를 모두 받아야합니다. 하지만, 모든 데이터를 보여주는 것을 컨트롤하기 위해서는 여러가지로 복잡한 절차가 필요합니다. 하지만, GraphQL은 Query를 기준으로 정의된 Schema에서 

## Query
```gql
{
  user(id: "1") {
    id
    name
  }
  users {
    id
    name
  }
}

{
  "data": {
    "user": {
      "id": "1",
      "name": "SeolHun"
    },
    "users": [
      {
        "id": "1",
        "name": "SeolHun"
      },
      {
        "id": "2",
        "name": "Jay"
      },
      {
        "id": "3",
        "name": "Steve"
      },
      {
        "id": "4",
        "name": "Jobs"
      }
    ]
  }
}
```

## [Type](http://graphql.org/learn/schema/#type-system)
- Int : 부호있는 32 비트 정수
- Float : 부호있는 배정 밀도 부동 소수점 값.
- String : UTF-8 문자 시퀀스.
- Boolean : true or false.
- ID : ID 스칼라 유형은 객체를 다시 페치하거나 캐시의 키로 자주 사용되는 고유 식별자를 나타냅니다. ID 형은 String와 같은 방법으로 직렬화됩니다. 그러나, 이를 ID로 정의하는 것은 사람이 읽을 수있는 의도가 아니라는 것을 의미합니다.
```typescript
const DivisionType = new GraphQLObjectType({
  name: 'Division',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    registered_date: { type: GraphQLString },
  },
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    registered_date: { type: GraphQLString },
    division: { type: DivisionType },
  },
});
```

- Moudule
	- import { GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLString } from 'graphql/type/scalars';

## [Fragment](http://graphql.org/learn/queries/#fragments)
- 필드를 반복해서 사용해야 될 경우가 발생합니다. 이를 해결하기 위해 GraphQL은 Fragment를 사용하여 필드세트를 구성하여 필요한 곳에 쉽게 적용할 수 있습니다.
```gql
{
  seolhun: user(id: "1") {
    id
    name
  }
  hunseol: user(id: "2") {
    id
    name
  }
}
```

- **Fragment 사용 (위와 같은 결과가 나옵니다.)**
```gql
{
  seolhun: user(id: "1") {
	...userDetails
  }
  hunseol: user(id: "2") {
	...userDetails
  }
}

fragment userDetails on User {
	id
	name
}
```


## [Mutation](http://graphql.org/learn/queries/#mutations)
- 쿼리와 마찬가지로 변형 필드가 객체 유형을 반환하면 중첩 필드를 요청할 수 있습니다. 이는 업데이트 후 객체의 새로운 상태를 가져 오는 데 유용 할 수 있습니다.

```typescript
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        age: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        registered_date: { type: GraphQLString },
        divisionId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { age, name, divisionId, registered_date }) {
        return axios.post(`${API_SERVER.JSON_SERVER}/users`, {
          age,
          name,
          divisionId,
          registered_date,
        }).then((res) => res.data);
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return axios.delete(`${API_SERVER.JSON_SERVER}/users/${id}`)
          .then((res) => res.data);
      },
    },
  },
});
```
```gql
mutation {
  addUser(age: 20, registered_date: "2017-12-01" ,name: "Stephen", divisionId: "2") {
    id
    name
    registered_date
    age
  }
  
  deleteUser(id: "Ve~wkel") {
    id
  }
}

```

## Reference
- [GraphQL](http://graphql.org/learn/)
- [RESTFul이란 무엇인가?](http://blog.remotty.com/blog/2014/01/28/lets-study-rest/)


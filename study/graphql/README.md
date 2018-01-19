# [GraphQL](http://graphql.org/)
- Author : [HunSeol](https://github.com/Seolhun/)
- Repo : [https://github.com/Seolhun/typescript-graphql-example](https://github.com/Seolhun/typescript-graphql-example)

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




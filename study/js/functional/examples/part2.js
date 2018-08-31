console.log('########## Part 2 ##########')

// 1. _filter
function _filter(list, predi) {
	// 순수 함수를 위한 const 새 객체 할당
	const newList = [];
	for(let i = 0;i<list.length;i++) {
		if (predi(list[i])) {
			newList.push(list[i]);
		}
	}
	return newList;
}

const under30 = _filter(users, (user) => {
	return user.age <= 30;
})
console.log(under30);

const over30 = _filter(users, (user) => {
	return user.age > 30;
})
console.log(over30);

// 2. _map
function _map(list, mapper) {
	const newList = [];
	for (let i = 0; i<list.length; i++) {
		newList.push(mapper(list[i]));
	}
	return newList;
}

const getNames = _map(over30, (user) => {
	return user.full_name;
})
console.log(getNames);
const getEmail = _map(under30, (user) => {
	return user.email;
})
console.log(getEmail);

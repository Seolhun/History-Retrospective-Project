console.log('########## Part 1 ##########')
// 1. addMaker
function addMaker(a) {
  return function(b) {
    return a + b;
  }
}

const add10 = addMaker(10);
console.log(add10(20));

// 2. tripleFn
function tripleFn(f1, f2, f3) {
	return f3(f1() + f2());
}

const result = tripleFn(
	function() { return 2; },
	function() { return 1; },
	function(a) { return a * a; },
)
console.log(result);

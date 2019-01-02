function run(td) {
	let task = td();

	let result = task.next();
	function step() {
		if (!result.done) {
			result = task.next(result.value);
			step();
		}
	}

	step();
}

function* zb() {
	let v = yield 1;
	console.log(v);
	v = yield v + 2;
	console.log(v);
	yield 3;
}

run(zb);

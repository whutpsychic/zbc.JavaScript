
function* zbc1() {
	yield 1;
	yield 2;
	yield 3;
}

function * zbc2() {
	yield 1;
	yield 2;
	yield 3;
}

function *zbc3() {
	yield 1;
	yield 2;
	yield 3;
}

let o = {
	*zbc4() {
		yield 1;
		yield 2;
		yield 3;
	}
}

let i1 = zbc1();
let i2 = zbc2();
let i3 = zbc3();
let i4 = o.zbc4();

console.log(i1.next());
console.log(i1.next());
console.log(i1.next());
console.log(i1.next());

console.log(i2.next());
console.log(i2.next());
console.log(i2.next());
console.log(i2.next());

console.log(i3.next());
console.log(i3.next());
console.log(i3.next());
console.log(i3.next());

console.log(i4.next());
console.log(i4.next());
console.log(i4.next());
console.log(i4.next());





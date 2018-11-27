// 生成器是用来生成一个迭代器的函数
// 通用写法为 function* xx(){}，同样适用于es6新扩展的函数声明

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

// let *zbc5=()=>{
// 	yield 1;
// 	yield 2;
// 	yield 3;	
// }

// *zbc6(){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }


let i1 = zbc1();
let i2 = zbc2();
let i3 = zbc3();
let i4 = o.zbc4();
// let i5 = zbc5();
// let i6 = zbc6();

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

// console.log(i5.next());
// console.log(i5.next());
// console.log(i5.next());
// console.log(i5.next());

// console.log(i6.next());
// console.log(i6.next());
// console.log(i6.next());
// console.log(i6.next());

// 以上是当前浏览器已实现的声明方法




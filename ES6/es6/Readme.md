迭代器 (Iterator) & 生成器(Generator)

###### 一、迭代器出现的背景
* 迭代器的出现旨在消除 for 循环的复杂性和因此不小心引入的 bug。

###### 二、什么是迭代器
* 是一个对象，此对象有一个 next() 方法，每次调用将返回一个对象 
```
{
	value: { Value },	//下一次的返回值
	done: { Boolean }	//true：已经没有下一个可返回值；false：还可以继续调用next()
}
```
只要有下一次返回值，obj.done 就会是 false，当执行完最后一次 next()，再执行 next() 时以后的返回对象都是 
```
{
	value: undefined,
	done: true
}
```
###### 三、什么是生成器
* 就是一个返回迭代器的工具函数
* 目前总共4种可用写法
```
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
```
###### 四、数组、Set、Map集合的内建迭代器

1.entries() 返回键值对集合
2.keys() 返回键名集合
3.values() 返回值集合

##### 五、高级用法

**1.带参数的迭代器语句**

```
function* zbc1() {
	let f = yield 1;
	let s = yield f+2;
	yield s+3;
}

let i1 = zbc1();

console.log(i1.next());
console.log(i1.next(2));
console.log(i1.next(3));
console.log(i1.next());

//{value: 1, done: false}
//{value: 4, done: false}
//{value: 6, done: false}
//{value: undefined, done: true}
```

```
function* zbc1() {
	let f = yield 1;
	let s = yield f + 2;
	yield f+3;
}

let i1 = zbc1();

console.log(i1.next());
console.log(i1.next(2));
console.log(i1.next(3));
console.log(i1.next());


//{value: 1, done: false}
//{value: 4, done: false}
//{value: 5, done: false}
//{value: undefined, done: true}
```

```
function* zbc1() {
	let f = yield 1;
	let s = yield f + 2;
	yield f+3;
}

let i1 = zbc1();

console.log(i1.next());
console.log(i1.next());
console.log(i1.next());
console.log(i1.next());

//{value: 1, done: false}
//{value: NAN, done: false}
//{value: NAN, done: false}
//{value: undefined, done: true}
```
**总结：**

***机制***
【！】只要执行过程中遇到 yield 就会停下，不会继续下一个逻辑操作，哪怕是赋值。

* 第一次执行 next() 给传入的参数都会被忽略掉。
* ！每一次若要读取当前 next() 传入的参数需要把 yield 赋值给一个变量以获取之，赋值之后可跨步骤操作（读取该参数）。每次 yield 出来的值不会往下继承。
* Iterator.throw() 抛出错误后会致使之后的步骤语句永远不会被执行。
* return 可以提前终止所有操作，并将 done 设置为 true。
* 委托生成器（多Generator顺序执行）=> yield \*functionName()
* 

















// 数组扩展

// Array.of() 用于创建新的数组,扩展此方法的目的是为了规避 new Array 时产生的怪异行为
// 可传入n个参数，直接用于生成数组

let arr1 = Array.of(1,2,3);

let arr2 = Array.of("1",3,"8");

console.log(arr1)
console.log(arr2)

// 数组扩展

// Array.of() 用于创建新的数组,扩展此方法的目的是为了规避 new Array 时产生的怪异行为
// 可传入n个参数，直接用于生成数组

// let arr1 = Array.of(1,2,3);

// let arr2 = Array.of("1",3,"8");

// console.log(arr1)
// console.log(arr2)

// Array.from(obj,fn,t) 用于将“可迭代对象”或“类数组对象”转换为严格数组的方法（如arguments）可以传入共三个参数
// obj:将要转换的对象
// fn:如果要进行特殊规则的转换时，传入的函数
// t:特指fn中调用时使用的 this 值

const fn = () => {
	console.log(arguments);
	let arr = Array.from(arguments)
	console.log(arr)
}

fn(1, 2, 3, 4, 5)


// Array.prototype 新建方法

// arr.find / arr.findIndex 分别用于查找某数组中的元素、其索引位置
//可传入两个参数，第一个是用于判断达成条件的函数
//第二个是指定规则函数 this 值
//注意规则函数要返回一个 bool 型
// indexOf 和 lastOndexOf 是值查询
// find 和 findIndex 可条件查询，请按需取用

let arr=[1,3,76,34,67];

console.log(arr.find((item,index)=>{return item > 30 }))
console.log(arr.findIndex((item,index)=>{return item > 30 }))


// arr.fill(item, start, end) 
// 这是一个变态方法，用于将数组中的元素全部替换为某特殊元素（参数）
// 可传入三个参数 类似 splice 但顺序不同
//  

let arr = [1,2,3,45,67];

arr.fill(1);
console.log(arr);

arr.fill(0,2);
console.log(arr);

arr.fill(6,1,3);
console.log(arr);



// copyWithin(startIndex*, copyItemStartIndex*, copyEndIndex)
//用于将数组中的元素 fill 给自身
//同 fill 皆用于定型数组之中

let arr=[1,2,3,4,5,6,7,8,9,0];

arr.copyWithin(2,0);
console.log(arr);
//1212345678

arr.copyWithin(3,0,2);
console.log(arr);
//1211245678

arr.copyWithin(4,2,6);
console.log(arr);
//1211112478

arr.copyWithin(2,0,5);
console.log(arr);
//1212111478












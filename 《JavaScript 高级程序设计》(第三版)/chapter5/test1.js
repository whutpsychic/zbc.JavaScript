
//获得随机数组函数
//num 数组中有几个数
//min 最小值
//max 最大值
//x 小数点后几位
function getRandomArr(num, min, max, x) {

	let _arr = [];

	if (!x) x = 0;

	for (let i = 0; i < num; i++) {

		let _x = parseInt(((max - min) * Math.random() + min).toFixed());

		_arr.push(_x);
	}

	return _arr;
}


/****************转换****************/

//var colors = [11, 21, 31];

//console.log(colors.toString());
//console.log(colors.valueOf());
//console.log(colors.toString().split(''));
//console.log(colors.toString().split(','));
//console.log(colors.toString().split(',').join('-'));

/****************数组方法*****************/

////sort 排序
//function compare(v1, v2) {

//	if (v1 < v2) { return -1 }
//	else if (v1 > v2) { return 1 }
//	else return 0;
//}

//var arr1 = getRandomArr(10, 0, 100);
//console.log(arr1);
//arr1.sort(compare);
//console.log(arr1);

/**************************/
////slice 创建子数组
//var arr2 = getRandomArr(10, 1, 100);

//var _arr2 = arr2.slice(2, 5);

//console.log(arr2);
//console.log(_arr2);

/**************************/
//splice(起始位置，删除数量，...(要插入的项队列)) 
//var arr3 = ['zbc', 'zbc2', 'zbc3', 'zbc4'];

////删除
//arr3.splice(0, 2);
//console.log(arr3);

////插入
//arr3.splice(1, 0, "hh", 'kk');
//console.log(arr3);

////替换
//arr3.splice(1, 2, "ff", 'gg');
//console.log(arr3);


/**去重方法**/

//var arr4 = [1, 3, 4, 6, 8, 9, 10, 1, 3, 6];
////var arr4 = [1, 1, 4, 6, 8, 9, 10, 1, 3, 6];
////var arr4 = [1, 4, 4, 6, 8, 9, 10, 1, 3, 6];
////var arr4 = [1, 33, 4, 6, 8, 9, 10, 1, 3, 6];

//arr4 = arr4.filter(function (item, index, arr) {

//	if (index === 0) return true;
//	if (index === 1) return !(arr[0] === arr[1]);

//	else {
//		for (let i = 0; i < index; i++) {
//			console.log(i)
//			if (item === arr[i]) {
//				console.log("找到重复项");
//				return false;
//			}
//		}
//	}


//	return true;
//})

//console.log(arr4);

//************************数组求和
//
//var arr5 = getRandomArr(10, 0, 100);

//var result = arr5.reduce(function (pre, curr, index, arry) {
//	console.log(pre);
//	return pre + curr;
//});

//console.log(arr5, result);

/*******************************************/
/********************字符串*****************/
/*******************************************/

//var str = "hellow world";
//var txt = "cat,bat,jat,kat";
//console.log(str.charAt(2));
//console.log(str[2]);

//var matches = txt.match(/.at/);
////var matches = txt.match(/.at/g);
//console.log(matches)

//txt = txt.replace(/.at/g, "($$1)");
//console.log(txt);

var arr = [1, 2, 3, 4, 56, 99];

console.log(Math.min.apply(null, arr));


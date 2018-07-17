//*************************************
//*******
//*******数组方法组
//*******
//*************************************

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

//交换数组两元素的位置(改变原数组)
function changePosition(arr, index1, index2) {
	let _temp = NaN;
	_temp = arr[index2];
	arr[index2] = arr[index1];
	arr[index1] = _temp;
}

//把一个元素从一个数组中删除（对下标删除）
function deleteFrom(i, arr) {

	arr.splice(arr[i]);

}

//把一个元素从一个数组中删除（对非基本类型元素删除）
function deleteFrom2(x, arr) {

	let k = 0;

	for (let i = 0; i < arr.length; i++) {

		k++;
		if (arr[i] === x) {
			arr.splice(i, 1);
			break;
		}
	}

	console.log("本次（deleteFrom2）查找一共进行了" + k + "次");
}

//查找数组中最大元素
function getMaxFromArr(arr) {

	let _res = NaN;

	_res = Math.max.apply(null, arr);

	return _res;
}

//查找数组中最小元素
function getMaxFromArr(arr) {

	let _res = NaN;

	_res = Math.min.apply(null, arr);

	return _res;
}

/**去重方法**/
function duplicateRemoval(arr) {

	let __arr__ = [];

	__arr__ = arr.filter(function (item, index, _arr) {

		if (index === 0) return true;
		if (index === 1) return !(_arr[0] === _arr[1]);

		else {
			for (let i = 0; i < index; i++) {
				if (item === _arr[i]) {
					return false;
				}
			}
		}
		return true;
	})

	return __arr__;
}









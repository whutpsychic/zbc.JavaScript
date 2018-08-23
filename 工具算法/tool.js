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
//将数组中的重复元素去除掉
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

//浅对象，深数据clone
function deepCloneArr(arr) {

	var ret = [];

	for (let i = 0; i < arr.length; i++) {
		ret[i] = arr[i];
	}
	return ret;
}





/****** 把[a,b,c]的所有排列组合列出来 ********/
//参数该是个数组
function listAllOrders(arr) {

	var L = arr.length;							//参数arr的长度

	var currItem = 0;								//目前安排的是第几个

	var currArr = [];								//当前待安排的数组

	var resultArr = null;							//当前结果数组

	//工具辅助函数
	//浅对象，深数据clone
	function deepCloneArr(arr) {

		var ret = [];

		for (let i = 0; i < arr.length; i++) {
			ret[i] = arr[i];
		}
		return ret;
	}

	//从缝隙处挨个往里面塞
	function putItIn(argarr) {

		var _arr = [];

		//第一项进去先
		if (!argarr.length) {
			_arr.push([arr[currItem]]);
		}

		//如果不是第一项了
		else {
			for (let i = 0; i < argarr.length; i++) {
			
				for (let j = 0; j < argarr[i].length + 1; j++) {

					var __arr__ = deepCloneArr(argarr[i]);

					__arr__.splice(j, 0, arr[currItem])
					_arr.push(__arr__);
				}
			}

			resultArr = _arr;
		}

		currItem++;

		//递归
		if (currItem < L) {
			putItIn(_arr);
		}
	}

	//启动
  putItIn(currArr);

	return resultArr;
}






var tool = {};

//将 xx:xx 格式的数据转换为 xxx 分钟 的函数
tool.transform = function (str) {

	if (typeof str !== "string") throw new Error("tool.transform 函数的传入参数不是一个字符串");

	var _arr = str.split(":");

	var _hour = parseInt(_arr[0]);
	var _minutes = parseInt(_arr[1]);

	console.log(_hour * 60 + _minutes, _hour, _minutes);
	return _hour * 60 + _minutes;

}











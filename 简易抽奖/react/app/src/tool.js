
var tool = {};

//补前置位0
tool.complement = (x) => {

	if (typeof x !== "number") throw new Error("complement 函数的 x 不是一个数字");

	if (x < 10) return "00" + x;
	else if (x < 100) return "0" + x;
	else { return x.toString() };
}

//生成一个随机数
tool.getRandomNumber = (min, max) => {

	var _num = (min + (max - min) * Math.random()).toFixed(0);
	return parseInt(_num);
}







export default tool;

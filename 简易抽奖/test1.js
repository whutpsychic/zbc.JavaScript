

////获得模拟人员数组
//function getArr() {

//	let _arr = [];

//	for (let i = 1; i <= 500; i++) {

//		_arr.push(complement(i))
//	}

//	return _arr;
//}

////填充模拟人员
//function fillIn(arr) {

//	var ul = document.getElementById("ul");

//	for (let i = 0; i < arr.length; i++) {

//		var _li = document.createElement("li");

//		_li.innerHTML = arr[i];

//		ul.appendChild(_li);
//	}

//}

/*********************以上是废弃方法**********************/

/***全局***/
var running = false;





//补前置位0
function complement(x) {

	if (typeof x !== "number") throw new Error("complement 函数的 x 不是一个数字");

	if (x < 10) return "00" + x;
	else if (x < 100) return "0" + x;
	else { return x.toString() };
}

//生成一个随机数
function getRandomNumber(min, max) {

	var _num = (min + (max - min) * Math.random()).toFixed(0);
	return parseInt(_num);
}


/********************* tools **********************/





//正在抽奖
function scrolling() {

	var el = document.getElementById("loading");

	running = true;

	function goon() {
		if (!running) return;
		el.innerHTML = complement(getRandomNumber(0, 500));
		setTimeout(function () {
			goon();
		}, 1);
	}

	goon();

}



function endScrolling() {


}














window.onload = function () {


  //setTimeout(function () {

  //  scrolling();

  //}, 2000);

	var btn = document.getElementById("btn");

	btn.onclick = function () {

		if (running) {
			running = false;
			endScrolling();
			btn.innerHTML = "开 始";
		}
		else if (!running) {
			running = true;
			scrolling();
			btn.innerHTML = "停 止";
		}
  }




}

























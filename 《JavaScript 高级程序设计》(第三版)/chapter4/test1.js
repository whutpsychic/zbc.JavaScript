
/***************检验参数传递是按值传参还是按引用传参*****************/
//
//事实证明参数是按值传参（只能如此）

//function setName(obj) {
//	obj.name = "xxx";
//	obj = {};
//}
//var obj1 = {};
//setName(obj1);
//console.log(obj1.name);

//||//

//var obj1 = {};
//obj1.name = "xxx";
//obj1 = {};
//console.log(obj1.name);

/********************************/

/***************类型检测*****************/
//检测基本类型时用 typeof 
//检测引用类型时用 instanceof 
//如果使用 instancceof 检测基本类型，将始终返回 false 


//var aa = [1, 2, 3, 4, 5];
//var bb = {};
//var cc = null;
//var dd = /^[0-9]/;

//console.log(aa instanceof Array)
//console.log(bb instanceof Object)
//console.log(cc instanceof Object)
//console.log(dd instanceof RegExp)

/***************非块级作用域实验*****************/

//for (var i = 0; i < 10; i++) {
//	console.log(i);
//}
//console.log(i);

////ES6
//for (let i = 0; i < 10; i++) {
//	console.log(i);
//}
//console.log(i);

/******/

//if (1) {
//	var zz = "xxxx";
//}

//console.log(zz)




//function fn(a, b, c, d) {
//  　　console.log(a, b, c, d);
//}

////call
//fn.call(null, 1, 2, 3);

////apply
//fn.apply(null, [1, 2, 3]);

////bind
//var f = fn.bind(null, 1, 2, 3);
//f(4);

///////////////////////////////////////////////////////////
//function fn() {
//  　　[].push.call(arguments, 3);
//  　　console.log(arguments); //[1, 2, 3]
//}
//fn(1, 2);

///////////////////////////////////////////////////////////
//var arr = ['aaabc'];
//console.log(''.indexOf.call(arr, 'b')); //3





//手动实现call函数思想
//function func() {
//  console.log(this.value)
//  console.log(this)
//}
//var obj = {
//  value: 233
//}
//Function.prototype.mycall = function (obj) {

//  obj.fn = this; //这里的this就是调用mycall的func函数
//  obj.fn();
//  delete obj.fn;
//}
//func.mycall(obj); 

//////////////////////////////////////////////

//手动模拟 bind 函数
Function.prototype.mybind = function (context) {
  if (typeof this !== "function") {
    throw new Error(this + "is not a function");
  }
  var self = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i]);
  }

  var fbound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  }
  fbound.prototype = Object.create(self.prototype);
  //返回的函数不仅要和 被调函数的函数体相同，也要继承人家的原型链
  return fbound;

}









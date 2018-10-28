
//this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，
//实际上this的最终指向的是那个调用它的对象

////////////////////////////////////////////////
//var o = {
//  a: 10,
//  b: {
//    a: 12,
//    fn: function () {
//      console.log(this.a); 
//    }
//  }
//}
//o.b.fn();                 //12
////////////////////////////////////////////////
//var o = {
//  a: 10,
//  b: {
   
//    fn: function () {
//      console.log(this.a);
//    }
//  }
//}
//o.b.fn();                 //undefined
////////////////////////////////////////////////
//var o = {
//  a: 10,
//  b: {
//    a: 12,
//    fn: function () {
//      console.log(this.a); //undefined
//      console.log(this); //window
//    }
//  }
//}
//var j = o.b.fn;
//j();
////////////////////////////////////////////////

function fn() {
  this.user = '追梦子';
  console.log(this);
  //return function () { };
  //return {};
  //return [];
  //return '';
  return undefined;
  //return null;
  //return 1;

}
var a = new fn;
console.log(a)
console.log(a.user); //undefined

////////////////////////////////////////////////



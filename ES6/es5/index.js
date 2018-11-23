"use strict";

//全局 promise 判断处理
// Promise.all
// Promise.race
var p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("p1");
    resolve(40);
  }, 500);
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("p2");
    resolve(41);
  }, 800);
});
var p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("p3");
    resolve(42);
  }, 1000);
});
var p4 = Promise.race([p1, p2, p3]);
var p5 = Promise.all([p1, p2, p3]);
p4.then(function (data) {
  console.log(data);
}).then(function () {
  console.log(444);
});
p1.then(function () {
  for (var i = 0; i < 10000; i++) {
    console.log(i);
  }
}).then(function () {
  console.log(22);
}).then(function () {
  console.log(33);
}); //传入的promise对象组数据类型必须是数组
//all 函数会等待所有 promise 都执行完才会调用其.then方法；其参数也是数组形式返回所有对应的resolve
//race 函数会在第一个最先执行完promise之后立即调用其.then方法，并且不会阻止其余promise继续进程。
//并且此时其参数为最快的那个promise的resolve
//*race这里有个神奇的特性：就是执行次序，总是在最快的promise以及其第一个resolve都执行完之后，才会去执行race的.then；最快的promise如果后续还有.then则要排在之后
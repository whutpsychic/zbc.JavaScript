"use strict";

//全局 promise 判断处理
// Promise.all
// Promise.race
var p1 = new Promise(function (resolve, reject) {
  setTimout(function () {
    console.log("p1");
    resolve(40);
  }, 500);
});
var p2 = new Promise(function (resolve, reject) {
  setTimout(function () {
    console.log("p2");
    resolve(41);
  }, 8000);
});
var p3 = new Promise(function (resolve, reject) {
  setTimout(function () {
    console.log("p3");
    resolve(42);
  }, 1000);
});
var p4 = Promise.all(p1, p2, p3);
p1.then(function (data) {
  console.log(data);
});
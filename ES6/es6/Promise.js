
//使用 setTimeout 来模拟异步调用//


//promise 基本用法:
const promise = new Promise((resolve, reject)=> {
  setTimeout(()=> {
    console.log("处理已经全部完毕");
    resolve(42);
  }, 500);
  console.log("执行器函数会在声明时立即执行");
});
promise.then((data)=> {
  console.log('随后调用"调用成功"后的函数来执行');
  console.log(data);
});

//如果 promise 没有.then后续声明或还没执行到.then的方法，则截止到该时刻这都是一个未完成的promise

//创建一个已解决的promise
let promise = Promise.resolve(42);		//这个promise对象是一个从一开始就已经是一个“已解决”的状态了

promise.then((data)=>{
	console.log(data)
})

//同理有创建一个未解决的promise
let promise2 = Promise.reject(43);

promise2.then(null,(data)=>{
	console.log(data);
})



























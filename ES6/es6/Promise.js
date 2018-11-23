
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



//全局 promise 判断处理

// Promise.all
// Promise.race

let p1 = new Promise((resolve,reject)=>{

	setTimeout(()=>{
		console.log("p1");
		resolve(40)
	},500)
})

let p2 = new Promise((resolve,reject)=>{

	setTimeout(()=>{
		console.log("p2");
		resolve(41)
	},800)
})

let p3 = new Promise((resolve,reject)=>{

	setTimeout(()=>{
		console.log("p3");
		resolve(42)
	},1000)
})

let p4 = Promise.race([p1,p2,p3]);
let p5 = Promise.all([p1,p2,p3]);

p4.then((data)=>{
	console.log(data)
}).then(()=>{
	console.log(444)
})

p1.then(()=>{
	for(let i=0;i<10000;i++){
		console.log(i)
	}
}).then(()=>{
	console.log(22)
}).then(()=>{
	console.log(33)
})





//传入的promise对象组数据类型必须是数组
//all 函数会等待所有 promise 都执行完才会调用其.then方法；其参数也是数组形式返回所有对应的resolve
//race 函数会在第一个最先执行完promise之后立即调用其.then方法，并且不会阻止其余promise继续进程。
//并且此时其参数为最快的那个promise的resolve
//*race这里有个神奇的特性：就是执行次序.
//race的.then方法总是与最快的promise的.then方法对应进行（保持平行）并且滞后于同等级的最速promise

























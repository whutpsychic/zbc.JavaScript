
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


//全局 promise 判断处理

// Promise.all
// Promise.race

let p1 = new Promise((resolve,reject)=>{

	setTimout(()=>{
		console.log("p1");
		resolve(40)
	},500)
})

let p2 = new Promise((resolve,reject)=>{

	setTimout(()=>{
		console.log("p2");
		resolve(41)
	},8000)
})

let p3 = new Promise((resolve,reject)=>{

	setTimout(()=>{
		console.log("p3");
		resolve(42)
	},1000)
})

let p4 = Promise.all(p1,p2,p3);

p1.then((data)=>{
	console.log(data)
})








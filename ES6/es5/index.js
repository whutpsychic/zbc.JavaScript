"use strict";

// copyWithin(startIndex*, copyItemStartIndex*, howmany)
//用于将数组中的元素 fill 给自身
//同 fill 皆用于定型数组之中
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.copyWithin(2, 0);
console.log(arr); //1212567890

arr.copyWithin(3, 0, 2);
console.log(arr); //1211267890

arr.copyWithin(4, 2, 6);
console.log(arr); //1211112678

arr.copyWithin(2, 0, 5);
console.log(arr); //1212111678
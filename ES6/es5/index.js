import _regeneratorRuntime from "@babel/runtime/regenerator";

// 生成器是用来生成一个迭代器的函数
// 通用写法为 function* xx(){}，同样适用于es6新扩展的函数声明
// function* zbc() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }
// function* zbc2() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }
// function* zbc3() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }
// let zbc5=*zbc5()=>{
// 	yield 1;
// 	yield 2;
// 	yield 3;	
// }
// let o = {
// 	*zbc4() {
// 		yield 1;
// 		yield 2;
// 		yield 3;
// 	}
// }
// let i1 = zbc1();
// let i2 = zbc2();
// let i3 = zbc3();
// let i4 = o.zbc4();
// console.log(i1.next());
// console.log(i1.next());
// console.log(i1.next());
// console.log(i1.next());
// console.log(i2.next());
// console.log(i2.next());
// console.log(i2.next());
// console.log(i2.next());
// console.log(i3.next());
// console.log(i3.next());
// console.log(i3.next());
// console.log(i3.next());
// console.log(i4.next());
// console.log(i4.next());
// console.log(i4.next());
// console.log(i4.next());
// console.log(i5.next());
// console.log(i5.next());
// console.log(i5.next());
// console.log(i5.next());
// console.log(i6.next());
// console.log(i6.next());
// console.log(i6.next());
// console.log(i6.next());
let createIterator =
/*#__PURE__*/
_regeneratorRuntime.mark(function _callee(items) {
  var i;
  return _regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        i = 0;

      case 1:
        if (!(i < items.length)) {
          _context.next = 7;
          break;
        }

        _context.next = 4;
        return items[i];

      case 4:
        i++;
        _context.next = 1;
        break;

      case 7:
      case "end":
        return _context.stop();
    }
  }, _callee, this);
});

let it = createIterator([1, 2, 3]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
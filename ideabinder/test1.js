
function F() {
  getName = function () {
    console.log(1);
  };
  return this;
}

F.getName = function () { console.log(2) };
F.prototype.getName = function () { console.log(3) };
var getName = function () { console.log(4) };
function getName() { console.log(5) };


F.getName();                //2
getName();                  //4
F().getName();              //1
getName();                  //1
new F.getName();            //2
new F().getName();          //3
new new F().getName();      //1 => 3

//手动实现new函数
//******************//
function _New(F) {
  var obj = { '__proto__': F.prototype };  /*第一步*/
  return function () {
    F.apply(obj, arguments);               /*第二步*/
    return obj;                            /*第三步*/
  }
}

function cons(name) {
  this.name = name;
}

cons.prototype.kk = function () { console.log("KK") };

var obj = _New(cons)("zbc");

console.log(obj);

obj.kk();
//*******************//








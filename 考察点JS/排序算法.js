
//插入排序

//思想:
//1.拿到第一个数字
//2.后续每拿过来一个新元素，从前往后扫描，比后一个大就往后比，直到比到比后一个小位置，插入此处。
//插入到此处 arr.splice(position, 0, item)

function sortnums(arr) {

  let _arr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {

    let key = arr[i];

    let L = _arr.length;

    let isMax = true;

    for (let j = 0; j < L; j++) {

      if (key <= _arr[j]) {

        //插入到该位置
        _arr.splice(j, 0, key);
        isMax = false;
        console.log('插入一次'+j+"  "+key)
        break;
      }
    }

    if (isMax) _arr.push(key);
  }

  return _arr;
}


//二分法排序

//思想：分中间项，和左右两个数组
function twoSort(arr) {
  //最后当数组长度只有一的时候，不再往下执行
  if (arr.length <= 1) {
    return arr;
  }
  var middle = arr.splice(Math.floor(arr.length / 2), 1);

  console.log(middle)
  var leftArr = [];
  var rightArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < middle) leftArr.push(arr[i]);
    else if (arr[i] >= middle) rightArr.push(arr[i]);
  }
  //concat() 方法用于连接两个或多个数组。
  //再对小数组继续回调上面的分组方法
  return twoSort(leftArr).concat(middle, twoSort(rightArr));
}








const arr = getRandomArr(10, 10, 30);

console.log(arr);
console.log(twoSort(arr))


















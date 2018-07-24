//基本规则
//
//  分有100个小格
//  
//
//
//
//

//分多少个格儿
var seperater = 100;

var currPosition = 1,
  scrollingSpeed = 100,
  running = false;







//填充内圈小格格数据
function fillInData() {

  var _arr = [];

  for (let i = 0; i < seperater; i++) {
    _arr.push({ value: 10, name: 'name' + i });
  }

  _arr[0].selected = true;

  return _arr;
}

//获取初始化option（抽奖盘）
function getInitialOption() {

  var obj = {

    zpointer: 0,
    animation:false,
    animationDurationUpdate: function (idx) {
      // 越往后的数据延迟越大
      return idx * 5;
    },
    //tooltip: {
    //  trigger: 'item',
    //  formatter: "{a} <br/>{b}: {c} ({d}%)"
    //},
    legend: {
      //orient: 'vertical',
      //x: 'left',
      show: true, 
      data: ["特等奖", "一等奖", "二等奖", "三等奖", "参与奖"]
    },
    series: [
      {
        name: '内圈',
        type: 'pie',
        selectedMode: 'single',
        radius: ['25%', '30%'],
        label: {
          normal: {
            show: false,
            position: 'inner'
          }
        },
        data: fillInData(),
        silent: true,
        animationDurationUpdate: function (idx) {
          // 越往后的数据延迟越大
          return idx * 5;
        },
      },
      {
        name: '外圈',
        type: 'pie',
        radius: ['40%', '75%'],
        label: {
          normal: {
            show: true,
            position: 'inner'
          }
        },
        data: [
          { value: 335, name: '特等奖', selected: false },
          { value: 679, name: '一等奖' },
          { value: 679, name: '二等奖' },
          { value: 679, name: '三等奖' },
          { value: 154, name: '参与奖' }
        ],
        silent: true,
        animationDurationUpdate: function (idx) {
          // 越往后的数据延迟越大
          return idx * 5;
        },
      }
    ]
  };

  
  return obj;
}

//改变第n个的selected状态
function changeSelector(obj, n) {

  if (typeof obj !== "object") throw new Error("changeSelector 函数的 obj 不是一个对象");

  if (!n) n = 0;


  obj.series[0].data[obj.zpointer].selected = false;
  obj.zpointer = n;
  obj.series[0].data[n].selected = true;


  return obj;
}

//循环滚动
function scrolling(chart, option) {

  function goon() {

    if (!running) return;

    if (currPosition >= seperater) currPosition = 0;

    chart.setOption(changeSelector(option, currPosition))
    currPosition++;
    scrollingSpeed -= 2;
    if (scrollingSpeed <= 1) scrollingSpeed = 1;

    setTimeout(function () {
      goon();
    }, scrollingSpeed);
  }

  goon();


}

function endScrolling(chart, option) {

  function ending() {

    if (currPosition >= seperater) currPosition = 0;
    if (scrollingSpeed === 100) return;

    chart.setOption(changeSelector(option, currPosition))
    currPosition++;
    scrollingSpeed += 2;
    if (scrollingSpeed >= 100) {
      scrollingSpeed = 100;
      return;
    }
    setTimeout(function () {
      ending();
    }, scrollingSpeed);
  }

  ending();
}














window.onload = function () {

  var chart = echarts.init(document.getElementById("chart1"));

  var initialOption = getInitialOption();

  chart.setOption(initialOption);

  //setTimeout(function () {

  //  scrolling(chart, initialOption);

  //}, 2000);

  var btn1 = document.getElementById("start");
  var btn2 = document.getElementById("end");

  btn1.onclick = function () {
    running = true;
    scrolling(chart, initialOption);
  }

  btn2.onclick = function () {
    running = false;
    endScrolling(chart, initialOption);
  }





}

























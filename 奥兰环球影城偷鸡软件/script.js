//以分钟为基本计算时间长度单位
//
var yichuhaoxi = {
	name: "一出好戏",
	stay: 134,
	date: [
		{
		month:8,
		day:21,
		date: 2,
		times: [
			"11:36",
			"11:44",
			"13:00",
			"13:46",
			"15:17",
			"16:05",
			"16:34",
			"17:30",
			"17:52",
			"19:02",
			"19:12",
			"20:09",
			"20:16",
			"20:22",
			"21:26"
		]
	},
	{
		month: 8,
		day: 22,
		date: 3,
		times: [
			"09:18",
			"09:48",
			"11:36",
			"11:48",
			"12:45",
			"13:46",
			"15:17",
			"16:05",
			"16:34",
			"17:30",
			"17:50",
			"19:02",
			"19:47",
			"20:14",
			"20:22",
			"21:26"
		]
		},
		{
			month: 8,
			day: 23,
			date: 4,
			times: [
				"09:18",
				"09:32",
				"09:58",
				"11:36",
				"12:44",
				"13:46",
				"15:17",
				"16:05",
				"16:36",
				"17:30",
				"17:50",
				"19:02",
				"19:12",
				"19:48",
				"20:14",
				"20:22",
				"21:26"
			]
		}]
}

var juchisha = {
	name: "巨齿鲨",
	stay: 115,
	date: [
		{
			month: 8,
			day: 21,
			date: 2,
			times: [
				"11:35",
				"13:19",
				"14:52",
				"15:52",
				"16:57",
				"18:17",
				"20:04",
				"21:41"
			]
		},
		{
			month: 8,
			day: 22,
			date: 3,
			times: [
				"09:31",
				"11:33",
				"13:19",
				"14:52",
				"15:52",
				"16:57",
				"18:17",
				"20:34",
				"21:41"
			]
		},
		{
			month: 8,
			day: 23,
			date: 4,
			times: [
				"09:31",
				"11:33",
				"13:19",
				"14:52",
				"15:52",
				"16:57",
				"18:17",
				"20:34",
				"21:41"
			]
		}
	]
}

/******************************** option 数据预处理 ********************************/

var films = [juchisha, yichuhaoxi];

//纵轴类别数据
var axisCategory = [];

for (let i = 0; i < films.length; i++) {
	axisCategory.push(films[i].name);
}

/**********************************************/
var chart = echarts.init(document.getElementById("chart1"));

//条形图样式设置项
var defaultBarstyle = {
	type: "bar",
	//barWidth: 20
};
 
var option = {

	legend: {
	},
	tooltip: {

		//formatter: function (a) {
		//	console.log(a)
		//},
		formatter:"《{a}》时长:{c}分钟"
	},

	//早八点以后至晚上十二点以前
	xAxis: [{
		type: "value",
		min: 8*60,
		max: 24 * 60,
		interval:120,
		axisLabel: {
			formatter: function (v) {
				return (v / 60).toFixed(0)
			}
		}
	}],
	yAxis: [{
		type: "category",
		data: ["电影"]
	}],
	series: []
};


//加载一部电影一天的场次数据
//film:标准film对象
//time:MM-DD
function loadFilmData(film, time, reload) {

	//返回空隙时间
	function getSpace(str1, str2, long) {

		if (!str1) str1 = "00:00";

		var _timeArr1 = str1.split(":");
		var _hour1 = parseInt(_timeArr1[0]);
		var _minutes1 = parseInt(_timeArr1[1]);

		var _timeArr2 = str2.split(":");
		var _hour2 = parseInt(_timeArr2[0]);
		var _minutes2 = parseInt(_timeArr2[1]);

		var _ret = (_hour2 - _hour1) * 60 + (_minutes2 - _minutes1);
		if (str1) _ret = _ret - long;

		return _ret;
	}

	//计算时间差
	//重叠返回true,否则false
	function calcTimeDiff(str1, str2, long) {

		var _timeArr1 = str1.split(":");
		var _hour1 = parseInt(_timeArr1[0]);
		var _minutes1 = parseInt(_timeArr1[1]);

		var _timeArr2 = str2.split(":");
		var _hour2 = parseInt(_timeArr2[0]);
		var _minutes2 = parseInt(_timeArr2[1]);

		return (((_hour2 - _hour1) * 60 + (_minutes2 - _minutes1)) < long);

	}

	//预算该有多少行，并标明他们各自都该属于哪一行
	//ts = timers
	function calcHowManyLines(ts, long) {

		//辅助函数
		//影响：
		function comparePrevious(_ts, i, long) {

			//如果重叠，继续比较下一行最后一个
			if (calcTimeDiff(_arr[currline].children[_arr[currline].children.length - 1], _ts[i], long)) {

				currline++;

				//看看还有没有下一行了
				if (!_arr[currline]) {

					//直接创建新行塞进去
					_arr[currline] = { children: [] };
					_arr[currline].children.push(ts[i]);
					currline = 0;				//重置
					return;
				}

				//还有下一行
				else {
					//再比
					comparePrevious(_ts, i, long);
				}
			}

				//此时不重叠了
				else {

				//判断是否需要创建新行
				if (!_arr[currline]) {

					//创建新行
					_arr[currline] = { children: [] };
				}

				//往下垒
				_arr[currline].children.push(ts[i]);

				currline = 0;				//重置
				return;
			}
		}

		var _arr = [];
		var line = 1;				//总共多少行
		var currline = 0;		//从第零行开始

		//
		for (let i = 0; i < ts.length; i++) {

			//第一行，直接塞进去
			if (i === 0) {
				_arr[currline] = { children: [] };
				_arr[currline].children.push(ts[i]);
			}

			else {

				//判断与上一个的时间差
				//如果重叠，继续比较前一个。
				//若没有前一个，则创建新行并塞进。
				//若有前一个则持续比较时间差直至出现不重叠冰塞进去
				comparePrevious(ts, i, long);
			}
		}
		return _arr;
	}

	//清空操作
	if (reload)
		option.series = [];

	//顶入最高层默认样式
	option.series.push(defaultBarstyle);

	//处理数据
	//根据时间获取要推入的数据组
	var _timeArr = time.split("-");

	var _month = parseInt(_timeArr[0]);
	var _day = parseInt(_timeArr[1]);

	/********************************************/
	var long = film.stay;

	var timers = null;

	//timers 获取当日时间数据组
	for (let i = 0; i < film.date.length; i++) {

		if (film.date[i].month === _month && film.date[i].day === _day) {
			timers = film.date[i].times;
			break;
		}
	}

	var newArr = calcHowManyLines(timers, long);

	console.log(timers)
	console.log(newArr)

	//对 series 操作
	for (let i = 0; i < newArr.length; i++) {

		for (let j = 0; j < newArr[i].children.length; j++) {

			option.series.push({

				//空白占位条
				type: "bar",
				name: "",
				itemStyle: {
					normal: { color: "transparent" }
				},
				data: [getSpace(newArr[i].children[j - 1], newArr[i].children[j], film.stay)],
				
				stack: film.name + i
			})

			option.series.push({

				//电影时长占位条
				type: "bar",
				name: film.name,
				data: [film.stay],
				value: newArr[i].children[j],
				stack: film.name + i
			})

		}
	}

}















window.onload = function () {

	loadFilmData(yichuhaoxi,"8-21")

	loadFilmData(juchisha, "8-21")

	chart.setOption(option);



}


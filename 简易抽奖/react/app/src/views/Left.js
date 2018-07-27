import React, { Component } from 'react';

import Taker from './Taker.js';
import ajax from '../ajax.js';
//<span>名额 </span> <span>0</span> <span>/</span> <span>20</span>

class Left extends Component {

	state = {
		run: false,
		mode: "1",

		vs: [
			"000", "000", "000", "000", "000", "000", "000", "000", "000", "000",
			"000", "000", "000", "000", "000", "000", "000", "000", "000", "000"
		],

		v1: "000",
		v2: "000",
		v3: "000",
		v4: "000",
		v5: "000",
		v6: "000",
		v7: "000",
		v8: "000",
		v9: "000",
		v10: "000",
		v11: "000",
		v12: "000",
		v13: "000",
		v14: "000",
		v15: "000",
		v16: "000",
		v17: "000",
		v18: "000",
		v19: "000",
		v20: "000",

	}

	render() {

		const { run, mode } = this.state;

		let { v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, vs } = this.state;

		let _Ts;

		if (mode === "1") {
			_Ts = (
				<div className="loading-part">
					<Taker run={run} v={vs[0]}/>
				</div>
				) }
		else if (mode === "10") {
			_Ts = (
				<div className="loading-part">
					<Taker run={run} v={vs[0]}/>
					<Taker run={run} v={vs[1]}/>
					<Taker run={run} v={vs[2]}/>
					<Taker run={run} v={vs[3]}/>
					<Taker run={run} v={vs[4]}/>
					<Taker run={run} v={vs[5]}/>
					<Taker run={run} v={vs[6]}/>
					<Taker run={run} v={vs[7]}/>
					<Taker run={run} v={vs[8]}/>
					<Taker run={run} v={vs[9]}/>
				</div>
			)
		}
		else if (mode === "20") {
			_Ts = (
				<div className="loading-part">
					<div className="loading-left">
						<Taker run={run} v={vs[0]} />
						<Taker run={run} v={vs[1]} />
						<Taker run={run} v={vs[2]} />
						<Taker run={run} v={vs[3]} />
						<Taker run={run} v={vs[4]} />
						<Taker run={run} v={vs[5]} />
						<Taker run={run} v={vs[6]} />
						<Taker run={run} v={vs[7]} />
						<Taker run={run} v={vs[8]} />
						<Taker run={run} v={vs[9]} />
					</div>
					<div className="loading-right">
						<Taker run={run} v={vs[10]} />
						<Taker run={run} v={vs[11]} />
						<Taker run={run} v={vs[12]} />
						<Taker run={run} v={vs[13]} />
						<Taker run={run} v={vs[14]} />
						<Taker run={run} v={vs[15]} />
						<Taker run={run} v={vs[16]} />
						<Taker run={run} v={vs[17]} />
						<Taker run={run} v={vs[18]} />
						<Taker run={run} v={vs[19]} />
					</div>
				</div>
				) }




    return (
			<div className="left-section">
				<div className="top-bar">
					<span>抽取奖项</span>
					<select ref='jiangxiang' onChange={this.changeSelector.bind(this)}>
						<option>超级大奖</option>
						<option>幸运奖</option>
					</select>
				</div>
				<div className="loading-part">
					{_Ts}
				</div>
				<div className="selector">
					<span>抽取人数</span>
					<select ref="mode" onChange={this.changeMode.bind(this)}>
						<option>1</option>
						<option>10</option>
						<option>20</option>
					</select>
				</div>
				<div className="btn" ref="btn" onClick={this.startUp.bind(this)}>开  始</div>
			</div>
    );
	}

	changeSelector(e) {

		const { changeSelect } = this.props;

		let _v = "";

		if (e.target.value === "超级大奖") _v = "cjdj";
		else if (e.target.value === "幸运奖") _v = "xyj";

		changeSelect(_v)



	}

	changeMode(e) {
		this.setState({
			mode:e.target.value
		})
	}

	startUp() {

		const { run } = this.state;
		const { click } = this.props;

		let _this = this;

		if (run) {
			this.setState({
				run: false
			})
			this.refs.btn.innerHTML = "开  始";

			let _arr = [];

			////装填arr
			//_arr = [
			//	{ name: '000', type: '1' },
			//	{ name: '000', type: '1' },
			//	{ name: '000', type: '1' }
			//]

			click(_arr);
		}
		else if (!run) {

			let condition = {
				nu: _this.refs.mode.value,
				name: _this.refs.jiangxiang.value
			}
			
			//查询
			ajax({
				url: "tolist.action",
				type: 'get',
				data: condition,
				success: (res) => {
					console.log(res);

					if (!res instanceof Array) throw new Error("查询到的结果不是一个数组");

					let _arr = res.map(function (item, index) {
						return item.num;
					})

					_this.setState({
						vs: _arr
					})


				},
				error: (a,b,c) => {
					console.log(a,b,c)
				}
			})



			this.setState({
				run: true
			})
			this.refs.btn.innerHTML = "停  止";
		}
	}





}

export default Left;

import React, { Component } from 'react';
import './App.css';

import Top from './views/Top.js';
import Left from './views/Left.js';
import Right from './views/Right.js';

import ajax from './ajax.js';




class App extends Component {

	state = {
		list: [
			//{ name: "1", id: null, num: "001" },
			//{ name: "1", id: null, num: "111" },
			//{ name: "1", id: null, num: "123" }
		],
		selectType:"cjdj"
	}

	render() {
		return (
			<div className="App">
				<div className="main-container">
					<Top />
					<div className="contents">
						<Left click={this.afterrun.bind(this)} changeSelect={this.changeMode.bind(this)}/>
						<Right list={this.state.list} onSearch={this.changeSearcher.bind(this)} mode={this.state.selectType}/>
					</div>
				</div>
			</div>
		);
	}

	changeMode(v) {
		console.log(v)

		this.setState({
			selectType: v
		})
	}

	afterrun(arr) {

		let _this = this;
		const { list } = this.state;
		//let _arr = list.concat(arr);

		let _name = this.state.selectType === "cjdj" ? "超级大奖" : "幸运奖";

		ajax({
			url: "queryRewardNumByName.action",
			type: 'get',
			data: { name: _name },
			success: function (res) {
				console.log(res);

				_this.setState({
					list: res
				})
			}
		})
	}

	changeSearcher(v) {

		let _this = this;
		console.log(v);
		ajax({
			url: "queryRewardNumByName.action",
			type: 'get',
			data: { name: v },
			success: function (res) {

				_this.setState({
					list: res
				})








			}
		})
	}
}

export default App;

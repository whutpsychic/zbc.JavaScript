import React, { Component } from 'react';

import Taker from './Taker.js';

//<span>名额 </span> <span>0</span> <span>/</span> <span>20</span>

class Left extends Component {

	state = {
		run: false
	}

	render() {

		const { run } = this.state;

    return (
			<div className="left-section">
				<div className="top-bar">
					<span>抽取奖项</span>
					<select>
						<option>特等奖</option>
						<option>一等奖</option>
						<option>二等奖</option>
						<option>三等奖</option>
						<option>参与奖</option>
					</select>
				
				</div>
				<div className="loading-part" id="loading">
					<Taker run={run}/>
				</div>
				<div className="selector">
					<span>抽取人数</span>
					<select>
						<option>1</option>
						<option>10</option>
						<option>20</option>
					</select>
				</div>
				<div className="btn" ref="btn" onClick={this.startUp.bind(this)}>开  始</div>
			</div>
    );
	}

	startUp() {

		const { run } = this.state;

		if (run) {
			this.setState({
				run: false
			})
			this.refs.btn.innerHTML = "开  始";
		}
		else if (!run) {
			this.setState({
				run: true
			})
			this.refs.btn.innerHTML = "停  止";
		}


	}





}

export default Left;

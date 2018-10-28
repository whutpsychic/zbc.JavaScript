import React, { Component } from 'react';

import tool from '../tool.js';

class Taker extends Component {

	constructor() {
		super(...arguments);
	}

	state = {
		curr: "000",
		key: null
	}

  render() {
    return (
      <div className="taker">
				{
					this.state.curr
				}
      </div>
    );
	}

	componentDidMount() {

		let _this = this;

		function goon() {
			_this.setState({
				curr: tool.complement(tool.getRandomNumber(0, 500))
			})
		}

		let _key = setInterval(function () {
			goon();
		}, 1);

		this.setState({
			key: _key
		})

	}

	componentWillUnmount() {
		window.clearInterval(this.state.key)
	}

}

export default Taker;

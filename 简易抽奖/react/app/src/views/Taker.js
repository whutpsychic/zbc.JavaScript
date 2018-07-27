import React, { Component } from 'react';

import tool from '../tool.js';

import RuningTaker from './RuningTaker.js';

class Taker extends Component {

	constructor() {
		super(...arguments);

	}

	state = {
		//curr: "000",
		running: false
	}

	render() {

		const { run } = this.props;

		if (run) {
			return <RuningTaker />
		}

    return (
      <div className="taker">
				{
					this.props.v
				}
      </div>
    );
	}

	componentWillReceiveProps() {

		this.setState({
			curr: tool.complement(tool.getRandomNumber(0, 500))
		})
	}


	componentDidMount() {

	}



}

export default Taker;

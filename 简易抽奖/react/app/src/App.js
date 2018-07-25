import React, { Component } from 'react';
import './App.css';

import Top from './views/Top.js';
import Left from './views/Left.js';
import Right from './views/Right.js';






class App extends Component {

	render() {
		return (
			<div className="App">
				<div className="main-container">
					<Top />
					<div className="contents">
						<Left />
						<Right />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

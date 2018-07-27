import React, { Component } from 'react';

import ajax from '../ajax.js';

class Item extends Component {



	render() {

		const { name, typer } = this.props;

		//let _typeName = "";

		//if (typer === "1") _typeName = "幸运奖"
		//else if (typer === "2") _typeName = "超级大奖";

		return <li><span>{name}</span><span>{typer}</span><span onClick={this.deleter.bind(this)}>删除</span></li>

	}

	deleter() {
		const { name, onDelete } = this.props;
		onDelete()
		ajax({
			url: "delete.action?delNum="+name,
			type: "delete",
			data: { delNum: name },
			success: function(res) {

				onDelete()
			}
		})

	}



}




class Right extends Component {

	render() {

		const { list, mode } = this.props;

		let _this = this;
		let _selector = null;

		if (mode === "cjdj") _selector = (
			<select ref="search" onChange={this.search.bind(this)}>
				<option>超级大奖</option>
				<option>幸运奖</option>
			</select>
		)

		else if (mode === "xyj") _selector = (
			<select ref="search" onChange={this.search.bind(this)}>
				<option>幸运奖</option>
				<option>超级大奖</option>
			</select>
		)

    return (
			<div className="right-section">
				<div className="right-top">获奖名单（<span ref="num">0</span>）</div>
				<p>获奖人员  奖项</p>
				{
					_selector
				}
				<div className="list-container">
					<ul>
						{
							list.map(function (item, index) {
								return <Item key={index} name={item.num} typer={item.name} onDelete={_this.deleteItem.bind(_this)}/>
							})
						}
					</ul>
				</div>
			</div>
    );
	}

	deleteItem() {

		let _this = this;
		//查询
		const { onSearch } = this.props;

		onSearch(_this.refs.search.value);

	}


	search(e) {

		const { onSearch } = this.props;

		onSearch(e.target.value);

	}




}

export default Right;

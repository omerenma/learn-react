import React, { Component } from "react";

class HoverCounnter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	increamentCount = () => {
		this.setState((prevState) => {
			return { count: prevState.count + 1 };
		});
	};
	render() {
		const { count } = this.state;
		return (
			<div>
				<h2 style={{color:'black'}} onMouseOver={this.increamentCount}>Hover {count} times</h2>
			</div>
		);
	}
}

export default HoverCounnter;

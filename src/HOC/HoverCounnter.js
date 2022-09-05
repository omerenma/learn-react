import React, { Component } from "react";
import HigherOrderComponent from "./withCounter";

class HoverCounnter extends Component {
	render() {
		const { count, increamentCount } = this.props
		return (
			<div>
				<h2 style={{ color: "black" }} onMouseOver={increamentCount}>
					Hover {count} times
				</h2>
			</div>
		);
	}
}

export default HigherOrderComponent(HoverCounnter);

import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
    
	render() {
		const {count, increamentCount} = this.props
		return (
			<div style={{ color: "black" }}>
				{this.props.name}
				<button onClick={increamentCount}>Click {count} times</button>
			</div>
		);
	}
}

export default withCounter(ClickCounter);

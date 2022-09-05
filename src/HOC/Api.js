import React, { Component } from "react";
import withApi from "./withApi";

class Api extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		const { request } = this.props;
		const method = "get";
		request("https://jsonplaceholder.typicode.com/todos/1", method);
	}
	render() {
		const { data } = this.props;
		return (
			<div>
				<h1 style={{ color: "black" }}>API Data</h1>
				<p style={{ color: "black" }}>
					{data.data === undefined ? "Loading..." : data.data.title}
				</p>
			</div>
		);
	}
}

export default withApi(Api);

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
		const endpoint = "/post/1";
		request("https://jsonplaceholder.typicode.com/users", method);
	}
	render() {
		const { data } = this.props;
		return (
			<div>
				<h1 style={{ color: "black" }}>API Data</h1>
				<p style={{ color: "black" }}>
					{data.data === undefined
						? "Loading..."
						: data.data.map((user) => (
								<ul
									key={user.id}
									style={{ listStyle: "none", textAlign: "left" }}
								>
									<li style={{ borderBottom: "1px solid grey" }}>
										{user.name}
									</li>
								</ul>
						  ))}
				</p>
			</div>
		);
	}
}

export default withApi(Api);

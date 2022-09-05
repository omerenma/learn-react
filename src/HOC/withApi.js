import React, { Component } from "react";
import axios from "axios";

// Implement Higer Order Component for making api request

const withApi = (WrappedComponent, url, method) => {
	class WithApi extends Component {
		state = {
			data: [],
		};
		api_call = (url, method, data) => {
			if (method === "get") {
				axios(url)
					.then((data) => this.setState({ data: data }))
					.catch((err) => console.log(err));
			}
			if (method === "post") {
				axios.post(url, data);
			}
			if (method === "put") {
				axios.put(url, data);
			}
			if (method === "delete") {
				axios.delete(url, data);
			}
		};
		render() {
			return (
				<WrappedComponent request={this.api_call} data={this.state.data} />
			);
		}
	}
	return WithApi;
};
export default withApi;

import React, { Component } from "react";
import axios from "axios";

// Implement Higer Order Component for making api request

const withApi = (WrappedComponent, url, endpoint, method) => {
	class WithApi extends Component {
		state = {
			data: [],
		};
		api_call = (url, method, endpoint, data) => {
			if (method === "post") {
				return axios.post(`${url}${endpoint}`, data);
			} else if (method === "put") {
				axios.put(url, data);
			} else if (method === "delete") {
				axios.delete(url, data);
			} else {
				axios(url)
					.then((data) => this.setState({ data: data }))
					.catch((err) => console.log(err));
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

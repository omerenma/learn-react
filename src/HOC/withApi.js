import React, { Component } from "react";
import axios from "axios";
import { response } from "express";

// Implement Higer Order Component for making api request

// const withApi = (WrappedComponent, url, endpoint, method) => {
// 	class WithApi extends Component {
// 		state = {
// 			data: [],
// 		};
// 		api_call = (url, method, endpoint, data) => {
// 			if (method === "post") {
// 				return axios.post(`${url}${endpoint}`, data);
// 			} else if (method === "put") {
// 				axios.put(url, data);
// 			} else if (method === "delete") {
// 				axios.delete(url, data);
// 			} else {
// 				axios(url)
// 					.then((data) => this.setState({ data: data }))
// 					.catch((err) => console.log(err));
// 			}
// 		};
// 		render() {
// 			return (
// 				<WrappedComponent request={this.api_call} data={this.state.data} />
// 			);
// 		}
// 	}
// 	return WithApi;
// };

const withApi = (WrappedComponent) => {
	const WithApi = () => {
		// Get request
		const api_get = (url) => {
			fetch(url)
				.then((response) => response.json())
				// .then((data) => console.log(data))
				.catch((err) => console.log(err.message));
		};
		//Post requset
		const api_post = (url, method, path, data) => {
			fetch(`${url}${path}`, {
				method: method,
				body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.catch((err) => err.message);
		};
		//Update request
		const api_updata = (url, method, path, data) => {
			fetch(`${url}${path}`, {
				method: method,
				body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.catch((err) => err.message);
		};
		// Delete equest
		const api_delete = (url, method, path, data) => {
			fetch(`${url}${path}`, {
				method: method,
				body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.catch((err) => err.message);
		};

		return (
			<WrappedComponent
				get_request={api_get}
				post_request={api_post}
				update_request={api_updata}
				delete_request={api_delete}
			/>
		);
	};
	return WithApi;
};
export default withApi;

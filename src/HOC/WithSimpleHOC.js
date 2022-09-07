import React from "react";

const withSimpleButtonHOC = (WrappedComponent, props) => {
	const WithSimpleButtonHOC = () => {
		return <WrappedComponent title="Hello" {...props} />;
	};
	return WithSimpleButtonHOC;
};
export default withSimpleButtonHOC;

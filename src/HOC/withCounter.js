import React from "react";

// Implement Higher Order Component
const withCounter = (WrappedComponent) => {
	class WithCounter extends React.Component {
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
			return (
				<WrappedComponent
					count={this.state.count}
					increamentCount={this.increamentCount}
				/>
			);
		}
	}
	return WithCounter;
};
export default withCounter;

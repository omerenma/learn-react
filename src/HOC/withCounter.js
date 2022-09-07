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
                    // when u create HOC, make sure to pass other props using {...this.props} 
                    // in ClickCounter component rendered in App.js I passed a name props
                    // if I don't add {...this.props} there the, the child component won't have access to props.
                    // {...this.props}
				/>
			);
		}
	}
	return WithCounter;
};
export default withCounter;

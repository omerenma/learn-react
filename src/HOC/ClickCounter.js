import React, { Component } from "react";

class ClickCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    increamentCount = () => {
        this.setState((prevState) => {
            return {count : prevState + 1}

        })
    }
	render() {
		return <div>
            <button onClick={this.increamentCount} >Click X times</button>
        </div>;
	}
}

export default ClickCounter;

import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { Count } from "./components/Count";
// import { Form } from "./sample/components/Form";
import { Timer } from "./sample/components/TimerForm";
import { TimerDashboard } from "./sample/components/TimerDashboard";
import ClickCounter from "./HOC/ClickCounter";
import HoverCounnter from "./HOC/HoverCounnter";
import "../src/styles/styles.css";

function App() {
	const [voteUp, setVoteUp] = useState(0);
	const [voteDown, setVoteDown] = useState(0);

	const handleVoteUp = (e) => {
		setVoteUp(voteUp + 1);
	};

	const handleVoteDown = (e) => {
		setVoteUp(voteUp - 1);
	};
	return (
		<div className="App">
			<div className="App-header">
				<ClickCounter />
				<HoverCounnter />
				{/* <Header /> */}

				{/* <Banner /> */}
				{/* <Form /> */}
				{/* <Timer /> */}
				{/* <TimerDashboard /> */}
				{/* <Count
				count={voteUp}
        countDown={voteDown}
				increament={handleVoteUp}
				decreament={handleVoteDown}
			/> */}
			</div>
		</div>
	);
}

export default App;

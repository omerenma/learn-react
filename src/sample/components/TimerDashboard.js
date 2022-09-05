import React, { useState } from "react";

import { EditableTimerList } from "./EditableTimerList";
import { ToggleableForm } from "./ToggleableTimerForm";

export const TimerDashboard = () => {
	const { v4: uuid } = require("uuid");
	const [timers, setTimers] = useState([
		{
			title: "Practice squat",
			project: "Gym Chores",
			id: uuid(),
			elapsed: 5456099,
			runningSince: Date.now(),
		},
		{
			title: "Bake squash",
			project: "Kitchen Chores",
			id: uuid(),
			elapsed: 1273998,
			runningSince: null,
		},
	]);

	return (
		<div style={{ border: "1px solid tomato", padding: 10 }}>
			<EditableTimerList timers={timers} />
			<ToggleableForm />
		</div>
	);
};

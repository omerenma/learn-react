import React from "react";
import { EditableTimer } from "./EditableTimer";

export const EditableTimerList = ({ timers }) => {
	const timer = timers.map((timer) => (
		<EditableTimer
			key={timer.id}
			id={timer.id}
			title={timer.title}
			elaspsed={timer.elapsed}
			runningSince={timer.runningSince}
		/>
	));
	return (
		<div
			style={{
				border: "1px solid lightGreen",
				padding: 10,
				display: "flex",
				gap: 10,
				flexDirection: "column",
			}}
		>
			{timer}
		</div>
	);
};

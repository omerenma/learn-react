import React, { useState } from "react";
import { Timer } from "./Timer";
import { TimerForms } from "./TimerForms";

export const EditableTimer = ({
	editFormOpen,
	id,
	title,
	project,
	elaspsed,
	runningSince,
}) => {
	const [editformOpen, setEditformOpen] = useState(false);
	return (
		<div>
			{editformOpen ? (
				<TimerForms title={title} project={project} id={id} />
			) : (
				<Timer
					id={id}
					elaspsed={elaspsed}
					running={runningSince}
					title={title}
					project={project}
					runningSince={runningSince}
				/>
			)}
		</div>
	);
};

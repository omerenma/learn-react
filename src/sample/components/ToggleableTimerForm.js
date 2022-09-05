import React, { useState } from "react";
import { TimerForms } from "./TimerForms";
export const ToggleableForm = () => {
	// Initial state of TimersForm && function to to toggle the state
	const [isOpen, setIsOpen] = useState(false);
	// toddle is a function that sets the state of the TimersForm either to open || close
	const toggle = () => setIsOpen((prev) => !prev);

	return (
		<div>
			{isOpen ? (
				<TimerForms isOpen={isOpen} toggle={toggle} />
			) : (
				<div
					style={{
						border: "1px solid red",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "5px 0",
						position: "relative",
						top: 4,
					}}
				>
					<button onClick={() => toggle()}>+</button>
				</div>
			)}
		</div>
	);
};

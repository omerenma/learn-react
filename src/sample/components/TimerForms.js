import React, { useState } from "react";

export const TimerForms = ({
	id,
	title,
	project,
	isOpen,
	toggle,
	onFormClose,
	onFormSubit,
}) => {
	const [titleName, setTitle] = useState(title || "");
	const [projectName, setProject] = useState(project || "");
	const submitForm = () => {
		const data_submit = {
			id,
			titleName,
			projectName,
		};
		onFormSubit(data_submit);
	};
	return (
		<div style={styles.container}>
			<div style={styles.input_div}>
				<div style={{ alignSelf: "start" }}>
					<label style={styles.label}>Title</label>
				</div>
				<div style={{ alignSelf: "start" }}>
					<input
						type="text"
						style={styles.input}
						name="titleName"
						value={titleName}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
			</div>
			<div style={styles.input_div}>
				<div style={{ alignSelf: "start" }}>
					<label style={styles.label}>Project</label>
				</div>
				<div style={{ alignSelf: "start" }}>
					<input
						type="text"
						style={styles.input}
						value={projectName}
						name="projectName"
						onChange={(e) => setProject(e.target.value)}
					/>
				</div>
			</div>
			<div style={styles.btn}>
				<button
					style={{
						backgroundColor: "transparent",
						border: "1px solid lightBlue",
						padding: 5,
						width: 100,
					}}
					onSubmit={() => submitForm()}
				>
					{id ? "Update" : "Create"}
				</button>

				<button
					style={{
						backgroundColor: "transparent",
						border: "1px solid tomato",
						padding: 5,
						width: 100,
					}}
					//onClick={() => toggle(!isOpen)}
					onClick={() => toggle(!isOpen)}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

const styles = {
	container: {
		// margin: "200px auto",
		width: 200,
		height: "auto",
		border: "1px solid grey",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 15,
		paddingBottom: 15,
	},
	label: {
		textAlign: "center",
		color: "black",
		fontWeight: "bold",
		fontSize: 12,
	},
	input_div: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: 200,
		height: 25,
		border: "1px solid #efefef",
	},
	btn: {
		marginTop: 10,
		display: "flex",
		justifyContent: "space-around",
		gap: 5,
	},
};

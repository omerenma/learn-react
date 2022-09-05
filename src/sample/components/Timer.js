import React from "react";
import { Typography } from "@mui/material";
import { Edit, Delete } from "../icons/icons";
import { EditableTimer } from "./EditableTimer";

export const Timer = ({ title, project, elaspsed }) => {
	return (
		<div style={styles.container}>
			<Typography>{title}</Typography>
			<Typography>{project}</Typography>
			<h2 style={{ color: "#efefef", fontWeight: "bold" }}>01 : 30 : 56 </h2>
			<Typography>{elaspsed}</Typography>
			{/* <EditableTimer /> */}

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					alignSelf: "flex-end",
					position: "relative",
					right: 20,
					bottom: 5,
					gap: 5,
				}}
			>
				<div>
					<Delete fontSize="2px" />
				</div>
				<div>
					<Edit />
				</div>
			</div>
			<botton style={styles.start}>Start</botton>
		</div>
	);
};

const styles = {
	container: {
		// margin: "150px auto",
		color: "black",
		width: 200,
		// height: 150,
		border: "0.1px solid grey",
		display: "flex",
		flexDirection: "column",
		borderRadius: 3,
	},
	start: {
		border: "1.5px solid lightGreen",
		backgroundColor: "transparent",
		color: "#000",
		fontSize: 10,
		padding: 5,
		borderBottomLeftRadius: 3,
		borderBottomRightRadius: 3,
	},
};

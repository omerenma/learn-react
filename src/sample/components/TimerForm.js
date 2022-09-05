import React from "react";
import { Typography } from "@mui/material";
import { EditableTimer } from "./EditableTimer";
import { Edit, Delete } from "../icons/icons";

// import {Timers} from './Timer'

export const TimerForm = () => {
	return (
		<div style={styles.container}>
			<div style={{ alignSelf: "start", marginLeft: 7 }}>
				<Typography sx={{ fontWeight: 600 }}>Mou the lawn</Typography>
				<Typography
					sx={{
						color: "#efefef",
						fontWeight: 600,
						position: "relative",
						left: 3,
					}}
				>
					House Chores
				</Typography>
			</div>
			{/* <div><Timers /></div> */}
			<EditableTimer />
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

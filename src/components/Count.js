import React from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";


export const Count = ({ count, increament, decreament }) => {
	return (
		<div>
			<div style={{ position: "relative", top: 15 }}>
				<ExpandLess onClick={() => increament()} />
			</div>
			{count}
			<div style={{ position: "relative", bottom: 10 }}>
				<ExpandMore onClick={(e) => decreament(e)} />
			</div>
		</div>
	);
};

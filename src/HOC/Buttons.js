import React from "react";
import withSimpleButtonHOC from "./WithSimpleHOC";

const Buttons = ({title}) => {
	return <button>{title}</button>
};

export default withSimpleButtonHOC(Buttons);

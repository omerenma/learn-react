import React, { useState } from "react";
import {
	AppBar,
	Box,
	Container,
	Grid,
	Toolbar,
	Typography,
	Paper,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
} from "@mui/material";
import { ExpandMore, ExpandLess, ExpandLessSharp } from "@mui/icons-material";
import { Transition } from "react-transition-group";

const Header = () => {
	const [open, setOpen] = useState(false);
	const toggleExpand = () => setOpen((prev) => !prev);
	const expandless = () => setOpen(false);
	const duration = 3000;

	return (
		<AppBar position="sticky" sx={{ backgroundColor: "white" }}>
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					sx={{ display: "flex", justifyContent: "space-between" }}
				>
					<div>
						<Typography sx={{ color: "#000" }}>LOGO</Typography>
					</div>
					<Box className="nav">
						<List className="nav-ul">
							<ListItemButton
								onMouseEnter={toggleExpand}
								onMouseLeave={expandless}
							>
								<ListItemIcon>
									{open ? (
										<ExpandLess sx={{ transition: "5s ease-in" }} />
									) : (
										<ExpandMore sx={{ transition: "5s ease-in" }} />
									)}
								</ListItemIcon>
								<ListItemText primary="Product" />
							</ListItemButton>

							<Collapse
								in={open}
								timeout="auto"
                unmountOnExit="false"
								sx={{ position: "absolute", top: 65, background:"#fff", border:'1px solid grey', height:100}}
							>
								<List component="div" disablePadding sx={{display:'flex', justifyContent:'spaceAround', alignItems:'center'}}>
									<ListItemButton sx={{ pl: 2 }}>
										<ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
										<ListItemText primary="Starred" />
									</ListItemButton>
									<ListItemButton sx={{ pl: 2 }}>
										<ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
										<ListItemText primary="Starred" />
									</ListItemButton>
									<ListItemButton sx={{ pl: 2 }}>
										<ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
										<ListItemText primary="Starred" />
									</ListItemButton>
								</List>
							</Collapse>

							<ListItemButton>
								<ListItemIcon></ListItemIcon>
								<ListItemText primary="Product" />
							</ListItemButton>

							<ListItemButton>
								<ListItemIcon></ListItemIcon>
								<ListItemText primary="Product" />
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon></ListItemIcon>
								<ListItemText primary="Product" />
							</ListItemButton>
							{/* <li onMouseEnter={handleHove}>
								Products
								<ul
									style={{
                    listStyle:'none',
										display: isVisible === false ? "none" : "block",
										width: "300px",
										height: "200px",
										position: "absolute",
										top: 70,
										left: 600,
										border: "1px solid grey",
                    transition:"5s ease-in"
									}}
								>
									<li>Hover</li>
								</ul>
							</li>
							<li>Products</li>
							<li>Products</li>
							<li>Products</li> */}
						</List>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;

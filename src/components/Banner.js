import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const images = [
	{
		name: "https://images.unsplash.com/photo-1661103631568-1b80030e6ca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
	},
	{
		nmae: "https://images.unsplash.com/photo-1657299156538-e08595d224ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		name: "https://images.unsplash.com/photo-1661124019452-51cb02408432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80",
	},
];

const Banner = () => {
	return (
		<Carousel axis="horizontal" autoPlay="true" width={"100%"} labels="false" ariaLabel="false" >
			{images.map((img) => (
				<div key={img.name}>
					<img
						src={img.name}
						alt="Carousel"
						width="100%"
                        
						style={{
							display: "flex",
							flexDirection: "row",
                            height:500
						}}
					/>
				</div>
			))}
		</Carousel>
	);
};
export default Banner;

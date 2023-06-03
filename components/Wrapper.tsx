import React, { useState } from "react";
import Blob from "./Blob";
import Tiles from "./Tiles";

interface WrapperProps {
	children: JSX.Element | JSX.Element[] | "() => JSX.Element";
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	const [coordinations, setCoordinations] = useState<{
		xAxis: number;
		yAxis: number;
	}>({ xAxis: 0, yAxis: 0 });
	const mouseMoveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = event;
		document.documentElement.style.setProperty("--xaxis", clientX + "px");
		document.documentElement.style.setProperty("--yaxis", clientY + "px");
	};
	return (
		<div
			className="wrapper"
			onMouseMove={mouseMoveHandler}
		>
			<Blob />
			<Tiles />
			{children}
		</div>
	);
};

export default Wrapper;

import React, { useState } from "react";

interface MouseOverProps {
	letter: string;
}

const MouseOver: React.FC<MouseOverProps> = ({ letter }) => {
	const [size, setSize] = useState(1);
	const [font, setFont] = useState("");
	let styles = {
		fontSize: `${size}em`,
		lineHeight: 0.5,
		fontFamily: font,
	};
	const mouseOverHandler = () => {
		setSize((size) => size + Math.random());
		setFont("'Roboto Condensed', sans-serif");
	};
	return (
		<span
			onMouseOver={mouseOverHandler}
			style={styles}
		>
			{letter}
		</span>
	);
};

export default MouseOver;

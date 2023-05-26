import React, { useEffect, useState } from "react";

interface MouseOverProps {
	letter: string;
}

const MouseOver: React.FC<MouseOverProps> = ({ letter }) => {
	const [size, setSize] = useState(1);
	const [font, setFont] = useState("");
	let styles = {
		fontSize: `${size}em`,
		lineHeight: 1,
		fontFamily: font,
	};
	const mouseOverHandler = () => {
		setSize((size) => size + Math.random());
	};
	useEffect(() => {
		const timeout1 = setTimeout(
			() => setSize((size) => size + 1),
			2000 * Math.random()
		);
		const timeout2 = setTimeout(
			() => setFont("'Roboto Condensed', sans-serif"),
			2000 * Math.random()
		);
		return () => {
			clearTimeout(timeout1);
			clearTimeout(timeout2);
		};
	}, []);
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

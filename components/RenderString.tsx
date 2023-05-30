import React from "react";
import LoadFont from "./LoadFont";

interface RenderStringProps {
	letters: string;
	fontFamily: "default" | "mono";
	fontSize: "sm" | "md" | "lg";
	fontWeight: "normal" | "medium" | "bold";
}

const RenderString: React.FC<RenderStringProps> = ({
	letters,
	fontFamily,
	fontSize,
	fontWeight,
}) => {
	const Span = letters.split("").map((letter, index) => (
		<LoadFont
			key={index}
			letter={letter}
			fontFamily={fontFamily}
			fontSize={fontSize}
			fontWeight={fontWeight}
		/>
	));

	return <>{Span}</>;
};

export default RenderString;

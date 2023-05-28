import { useLoadStyle } from "@/hooks/useLoadStyle";
import React, { useEffect, useState } from "react";

interface LoadFontProps {
	letter: string;
	fontFamily: "default" | "mono";
	fontSize: "sm" | "md" | "lg";
	fontWeight: "normal" | "medium" | "bold";
}

const LoadFont: React.FC<LoadFontProps> = ({
	letter,
	fontSize,
	fontFamily,
	fontWeight,
}) => {
	let size = ".875rem";
	let font = "unset";
	let weight = 400;

	switch (fontSize) {
		case "sm":
			size = ".875rem";
			break;
		case "md":
			size = "1rem";
			break;
		case "lg":
			size = "3rem";
			break;
	}

	switch (fontFamily) {
		case "default":
			font = ' "Inter", sans-serif';
			break;
		case "mono":
			font = ' "IBM Plex Mono", monospace';
			break;
	}

	switch (fontWeight) {
		case "normal":
			weight = 400;
			break;

		case "medium":
			weight = 500;
			break;

		case "bold":
			weight = 600;
			break;
	}

	let styles = useLoadStyle({
		fontSize: size,
		fontFamily: font,
		fontWeight: weight,
	});
	return <span style={styles}>{letter}</span>;
};

export default LoadFont;

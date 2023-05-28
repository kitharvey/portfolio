import { useEffect, useState } from "react";

export const useLoadStyle = (styleValue: React.CSSProperties) => {
	const [style, setStyle] = useState<React.CSSProperties>({});

	const timeDelay = 20000;
	useEffect(() => {
		const timeout = setTimeout(() => {
			setStyle(styleValue);
		}, timeDelay * Math.random());

		return () => {
			clearTimeout(timeout);
		};
	}, [styleValue]);

	return style;
};

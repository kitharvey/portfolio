import { useEffect, useState } from "react";

export const useLoadStyle = (styleValue: React.CSSProperties) => {
	const [style, setStyle] = useState<React.CSSProperties>({});

	const min = 2000;
	const max = 5000;
	useEffect(() => {
		const timeout = setTimeout(() => {
			setStyle(styleValue);
		}, Math.floor(Math.random() * (max - min) + min));

		return () => {
			clearTimeout(timeout);
		};
	}, [styleValue]);

	return style;
};

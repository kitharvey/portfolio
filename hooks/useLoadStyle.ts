import { useEffect, useState } from "react";

export const useLoadStyle = (styleValue: React.CSSProperties) => {
	const [style, setStyle] = useState<React.CSSProperties>({});

	const delay = 10000;
	useEffect(() => {
		const timeout = setTimeout(() => {
			setStyle(styleValue);
		}, delay);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return style;
};

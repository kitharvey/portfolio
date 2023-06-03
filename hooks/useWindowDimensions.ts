import { useEffect, useState } from "react";

const getNumberOfTiles = () => {
	const { clientWidth: width, clientHeight: height } = document.body;
	const tileSize = 100;
	const columns = Math.floor(width / tileSize);
	const rows = Math.floor(height / tileSize);
	return { columns, rows };
};

const useTilesNumber = () => {
	const [tiles, setTiles] = useState<number>(0);

	useEffect(() => {
		function handleResize() {
			const { columns, rows } = getNumberOfTiles();
			document.documentElement.style.setProperty("--columns", columns + "");
			document.documentElement.style.setProperty("--rows", rows + "");
			setTiles(columns * rows);
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return tiles;
};

export default useTilesNumber;

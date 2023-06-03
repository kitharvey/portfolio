import React, { useEffect, useState } from "react";

interface TilesProps {}

const getNumberOfTiles = () => {
	const { clientWidth: width, clientHeight: height } = document.body;
	const tileSize = 50;
	const columns = Math.floor(width / tileSize);
	const rows = Math.floor(height / tileSize);
	return { columns, rows };
};

const Tiles: React.FC<TilesProps> = ({}) => {
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

	return (
		<div className="tiles">
			{Array(tiles)
				.fill(0)
				.map((_tile, index) => (
					<div
						key={index}
						className="tile"
					></div>
				))}
		</div>
	);
};

export default Tiles;

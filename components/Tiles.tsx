import useTilesNumber from "@/hooks/useTilesNumber";
import React from "react";

interface TilesProps {}

const Tiles: React.FC<TilesProps> = ({}) => {
	const tiles = useTilesNumber();

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

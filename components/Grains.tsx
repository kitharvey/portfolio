import React from "react";

const Grains: React.FC = ({}) => {
	return (
		<svg>
			<filter id="grainy">
				<feTurbulence
					type="turbulence"
					baseFrequency="0.65"
				/>
			</filter>
		</svg>
	);
};

export default Grains;

import React from "react";
import Link from "next/link";
import RenderString from "./RenderString";
import { useLoadStyle } from "@/hooks/useLoadStyle";

const Home: React.FC = ({}) => {
	const name = "Kit Harvey";
	const subname = "self-taught front-end developer";
	const style = useLoadStyle({ columnGap: "1em" });
	return (
		<div id="home">
			<div>
				<h1>
					<RenderString
						letters={name}
						fontFamily="default"
						fontSize="lg"
						fontWeight="bold"
					/>
				</h1>
				<p>
					<RenderString
						letters={subname}
						fontFamily="default"
						fontSize="md"
						fontWeight="normal"
					/>
				</p>
			</div>
			<div>
				<Link
					href="https://docs.google.com/document/d/1Tx2Juuh6GJFa-CyOJjWkIc0hYZkQy_EAEnXNrR9Ds60/edit?usp=sharing"
					target="__blank"
				>
					<RenderString
						letters="Résumé"
						fontFamily="default"
						fontSize="sm"
						fontWeight="medium"
					/>
				</Link>
			</div>
			<div>
				<p>
					<RenderString
						letters="Follow me on"
						fontFamily="default"
						fontSize="sm"
						fontWeight="normal"
					/>
				</p>
				<div
					className="display-flex"
					style={style}
				>
					<Link
						href="https://github.com/kitharvey"
						target="__blank"
					>
						<RenderString
							letters="GitHub"
							fontFamily="default"
							fontSize="sm"
							fontWeight="medium"
						/>
					</Link>
					<Link
						href="https://www.linkedin.com/in/kitharvey/"
						target="__blank"
					>
						<RenderString
							letters="LinkedIn"
							fontFamily="default"
							fontSize="sm"
							fontWeight="medium"
						/>
					</Link>
					<Link
						href="https://twitter.com/kithrvy/"
						target="__blank"
					>
						<RenderString
							letters="Twitter"
							fontFamily="default"
							fontSize="sm"
							fontWeight="medium"
						/>
					</Link>
					<Link
						href="https://www.frontendmentor.io/profile/kitharvey"
						target="__blank"
					>
						<RenderString
							letters="Frontend Mentor"
							fontFamily="default"
							fontSize="sm"
							fontWeight="medium"
						/>
					</Link>
				</div>
			</div>
			<div>
				<p>
					<RenderString
						letters="Email me via"
						fontFamily="default"
						fontSize="sm"
						fontWeight="normal"
					/>
				</p>
				<p>
					<Link
						href="mailto:kitharveycaubalejo@gmail.com"
						target="__blank"
					>
						<RenderString
							letters="kitharveycaubalejo@gmail.com"
							fontFamily="default"
							fontSize="sm"
							fontWeight="medium"
						/>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Home;

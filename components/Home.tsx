import React from "react";
import Link from "next/link";

const Home: React.FC = ({}) => {
	return (
		<div
			id="home"
			className="section home"
		>
			<div className="main-text">
				<h1 className="name">I&apos;m Kit Harvey.</h1>
				<p className="description">
					I&apos;m a self-taught front-end developer.
				</p>
			</div>
			<div className="links">
				<Link
					href="https://docs.google.com/document/d/1Tx2Juuh6GJFa-CyOJjWkIc0hYZkQy_EAEnXNrR9Ds60/edit?usp=sharing"
					target="__blank"
				>
					View Résumé
				</Link>
			</div>
			<div className="accounts">
				<p>Follow me on</p>
				<div className="links">
					<Link
						href="https://github.com/kitharvey"
						target="__blank"
					>
						GitHub
					</Link>
					<Link
						href="https://www.linkedin.com/in/kitharvey/"
						target="__blank"
					>
						LinkedIn
					</Link>
					<Link
						href="https://twitter.com/kithrvy/"
						target="__blank"
					>
						Twitter
					</Link>
					<Link
						href="https://www.frontendmentor.io/profile/kitharvey"
						target="__blank"
					>
						Frontend Mentor
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;

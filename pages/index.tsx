import HeadTitle from "@/components/HeadTitle";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<HeadTitle title="" />
			<div id="page" className="home">
				<div className="main-text">
					<h1 className="name">I&apos;m Kit Harvey.</h1>
					<p className="des">
						I&apos;m a self-taught front-end developer.
					</p>
				</div>
				<div className="main-buttons-container">
					<div className="main-buttons">
						<Link
							href="https://docs.google.com/document/d/1Tx2Juuh6GJFa-CyOJjWkIc0hYZkQy_EAEnXNrR9Ds60/edit?usp=sharing"
							target="__blank"
							
						>
							View Resume
						</Link>
					</div>
					<div className="main-buttons">
						<Link href="/contact">Hire Me</Link>
					</div>
				</div>
			</div>
		</>
	);
}

import HeadTitle from "@/components/HeadTitle";
import Nav from "@/components/Nav";
import "@/styles/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadTitle title="" />
			{/* <Nav /> */}
			<div className="wrapper">
				<div className="container">
					<main>
						<Component {...pageProps} />
					</main>
				</div>
				<svg>
					<filter id="grainy">
						<feTurbulence
							type="turbulence"
							baseFrequency={0.65}
						/>
					</filter>
				</svg>
			</div>
		</>
	);
}

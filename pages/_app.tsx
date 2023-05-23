import Nav from "@/components/Nav";
import "@/styles/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<div className="wrapper">
				<div className="container">
					<Nav />
					<Component {...pageProps} />
				</div>
				<svg>
					<filter id="grainy">
						<feTurbulence
							type="turbulence"
							baseFrequency={0.5}
						/>
					</filter>
				</svg>
			</div>
		</>
	);
}

import Nav from "@/components/Nav";
import "@/styles/style.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<div className="wrapper">
				<div className="container">
					<Nav />
					<Component {...pageProps} />
				</div>
			</div>
			<Analytics />
		</>
	);
}

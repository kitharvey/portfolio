import Nav from "@/components/Nav";
import "@/styles/style.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Blob from "@/components/Blob";
import Wrapper from "@/components/Wrapper";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Wrapper>
				<div className="container">
					<Nav />
					<Component {...pageProps} />
				</div>
			</Wrapper>
			<Analytics />
		</>
	);
}

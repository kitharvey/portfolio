import Nav from "@/components/Nav";
import "@/styles/scss/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="wrapper">
			<Nav />
			<Component {...pageProps} />
		</div>
	);
}

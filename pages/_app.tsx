import HeadTitle from "@/components/HeadTitle";
import "@/styles/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadTitle />
			<div className="wrapper">
				<div className="container">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	);
}

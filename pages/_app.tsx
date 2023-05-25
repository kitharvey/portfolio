import HeadTitle from "@/components/HeadTitle";
import "@/styles/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadTitle title="" />
			<div className="container">
				<Component {...pageProps} />
			</div>
		</>
	);
}

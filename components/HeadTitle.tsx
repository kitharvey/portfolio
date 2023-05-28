import Head from "next/head";
import React from "react";

const metaIMG = "/port.gif";
const metaDescription =
	"I'm a self-taught front-end developer. I help clients and companies build their web user interfaces using ReactJS, NextJS, TypeScript and Sass.";

const HeadTitle: React.FC = () => {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<title>Kit Harvey</title>
			<link
				rel="shortcut icon"
				type="image/png"
				href="/images/favicon.ico"
				sizes="50x32"
			/>
			<meta
				name="title"
				content="Kit Harvey"
			/>
			<meta
				name="description"
				content={metaDescription}
			/>
			<meta
				name="image"
				content={metaIMG}
			/>
			<meta
				name="og:title"
				content="Kit Harvey"
			/>
			<meta
				name="og:description"
				content={metaDescription}
			/>
			<meta
				name="og:image"
				content={metaIMG}
			/>
			<meta
				name="twitter:title"
				content="Kit Harvey"
			/>
			<meta
				name="twitter:description"
				content={metaDescription}
			/>
			<meta
				name="twitter:image"
				content={metaIMG}
			/>
		</Head>
	);
};

export default HeadTitle;

import { Html, Head, Main, NextScript } from "next/document";
import { montserrat, mulish } from "./_app";

export default function Document() {
	return (
		<Html lang="en" className={`${mulish.variable} ${montserrat.variable}`}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

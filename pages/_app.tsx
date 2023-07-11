import Layout from "@/components/Common/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Mulish, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
	style: ["italic", "normal"],
	subsets: ["latin-ext", "latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-montserrat",
});
export const mulish = Mulish({
	style: ["italic", "normal"],
	subsets: ["latin-ext", "latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-mulish",
});
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

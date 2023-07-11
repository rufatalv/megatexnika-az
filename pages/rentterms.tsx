import Breadcrumbs from "@/components/Common/Breadcrumb";
import FAQ from "@/components/Rentpage/FAQ";
import Hero from "@/components/Rentpage/Hero";
import Head from "next/head";
import Image from "next/image";

export default function rentterms() {
	return (
		<div className="relative">
			<Head>
				<title> Mega Texnika | İcarə şərtləri</title>
				<meta name="description" content="Mega Texnika website" />
				<meta
					property="og:description"
					content="Mega Texnika website"
				/>
				<meta property="og:type" content="website" />
				<meta name="twitter:title" content="Mega Texnika" />
				<meta
					name="twitter:description"
					content="Mega Texnika website"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="robots" content="index, follow" />
			</Head>
			<Breadcrumbs
				items={[
					{
						label: "Ana səhifə",
						path: "/",
					},
					{
						label: "İcarə şərtləri",
						path: "/rentterms",
					},
				]}
			/>
			<div className="container py-12 md:py-24 lg:py-32 px-5 lg:px-0">
				<Hero />
				<FAQ />
			</div>
		</div>
	);
}

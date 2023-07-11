"use client";
import Breadcrumbs from "@/components/Common/Breadcrumb";
import Button from "@/components/Common/Button";
import { Products } from "@/components/Homepage";
import { getProducts, graphcms } from "@/graphcms";
import { Product } from "@/types";
import { gql } from "graphql-request";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
const QUERY = gql`
	query ($slug: String!) {
		product(where: { slug: $slug }) {
			title
			slug
			category
			description
			monthPrice
			dailyPrice
			year
			cardThumb {
				url
			}
			cardImages {
				url
			}
		}
	}
`;

export async function getStaticProps({ params }: GetStaticPropsContext) {
	const slug = params?.slug as string;
	const data = await graphcms.request<{ product: Product }>(QUERY, { slug });
	const product = data.product;
	const products = await getProducts();
	return {
		props: {
			product,
			products,
		},
		revalidate: 10,
	};
}
export const getSluglist = async () => {
	const query = gql`
		query Slugs {
			products {
				slug
			}
		}
	`;
	const result = await graphcms.request<{ products: { slug: string }[] }>(
		query
	);

	return result;
};

export async function getStaticPaths() {
	const { products } = await getSluglist();
	return {
		paths: products.map((product) => ({ params: { slug: product.slug } })),
		fallback: "blocking",
	};
}

export default function ProductCase({
	product,
	products,
}: {
	product: Product;
	products: Product[];
}) {
	const [activeImage, setActiveImage] = useState(0);
	return (
		<div className="relative">
			<Head>
				<title> Mega Texnika | {product.title} </title>
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
						label: "Texnikalar",
						path: "/products",
					},
					{
						label: product.title,
						path: "/product/" + product.slug,
					},
				]}
			/>
			<div className="lg:container justify-center pt-8 pb-12 px-5 xl:px-0 flex flex-col md:flex-row gap-5">
				<div className="w-full md:w-7/12 xl:w-5/12 flex flex-wrap flex-row-reverse sm:flex-nowrap gap-3">
					<div className="flex flex-wrap sm:flex-nowrap w-auto sm:flex-col gap-5 order-2 md:order-1 md:gap-0 justify-around sm:justify-between">
						{product.cardImages.map((image, idx) => (
							<div
								className={`sm:w-20 h-24 shadow-shadow cursor-pointer transition-all duration-500 border ${
									activeImage === idx
										? "border-yellow"
										: "transparent"
								}`}
								onClick={() => setActiveImage(idx)}
								key={idx}>
								<Image
									src={image.url}
									width={72}
									height={95}
									className="w-full h-full object-scale-down"
									alt="imageUrl"
								/>
							</div>
						))}
					</div>
					<div className="w-full md:w-auto shadow-shadow">
						<Image
							src={product.cardImages[activeImage].url}
							width={1280}
							height={1280}
							alt="Image"
							className="h-full w-full object-scale-down"
						/>
					</div>
				</div>
				<div className="w-full md:w-5/12 xl:w-5/12 flex flex-col justify-between shadow-shadow bg-white px-5 py-5 md:px-12 md:py-12">
					<div className="flex justify-between">
						<h1 className="text-xl font-semibold text-lightblue-600 font-montserrat">
							{product.title}
						</h1>
						<h3 className="font-mulish text-sm text-lightgray-600">
							{product.year}
						</h3>
					</div>
					<h4 className="font-mulish text-darkgray-400 text-sm mb-7">
						{product.category}
					</h4>
					<p className="text-lightblue-700 font-mulish text-sm leading-5">
						{product.description}
					</p>
					<div className="flex flex-col gap-5 mt-14 xl:mt-20">
						<div className="flex justify-between">
							<h1 className="font-montserrat font-semibold text-lightblue-600 text-base">
								Günlük icarə:
							</h1>
							<h2 className="text-yellow text-xl font-semibold font-montserrat">
								{product.dailyPrice} AZN
							</h2>
						</div>
						<div className="flex justify-between">
							<h1 className="font-montserrat font-semibold text-lightblue-600 text-base">
								Aylıq icarə:
							</h1>
							<h2 className="text-yellow text-xl font-semibold font-montserrat">
								{product.monthPrice} AZN
							</h2>
						</div>
					</div>
					<Button
						onClick={() => {}}
						className="text-darkgray-300 font-mulish font-bold mt-14 xl:mt-20 text-xs bg-yellow w-full hover:bg-darkgray-300 hover:text-white transition-all duration-500">
						Günlük icarə et
					</Button>
				</div>
			</div>
			<Products products={products} />
		</div>
	);
}

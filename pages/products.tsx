"use client";
import Breadcrumbs from "@/components/Common/Breadcrumb";
import ProductCard from "@/components/ProductsPage/ProductCard";
import { getProducts } from "@/graphcms";
import { Product } from "@/types";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export async function getStaticProps() {
	const products = await getProducts();
	return {
		props: {
			products,
		},
		revalidate: 10,
	};
}
export default function Products({ products }: { products: Product[] }) {
	const [activeProduct, setActiveProduct] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(products);
	const router = useRouter();
	const { category } = router.query;

	useEffect(() => {
		let capitalizedCategory = "";

		if (Array.isArray(category)) {
			capitalizedCategory = category[0]
				? category[0].charAt(0).toUpperCase() + category[0].slice(1)
				: "";
		} else {
			capitalizedCategory = category
				? category.charAt(0).toUpperCase() + category.slice(1)
				: "";
		}

		setActiveProduct(capitalizedCategory);

		if (capitalizedCategory === "") {
			setFilteredProducts(products);
		} else {
			const filtered = products.filter(
				(p) => p.categoryLatin === capitalizedCategory
			);
			setFilteredProducts(filtered);
		}
	}, [category, products]);

	const handleChangeFilter = (product: string) => {
		setActiveProduct(product);
		if (product === "") {
			setFilteredProducts(products);
			router.push("/products");
		} else {
			const filtered = products.filter(
				(p) => p.categoryLatin === product
			);
			setFilteredProducts(filtered);
			router.push(`/products?category=${encodeURIComponent(product)}`);
		}
	};
	return (
		<div className="relative">
			<Head>
				<title> Mega Texnika | Texnikalar </title>
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
				]}
			/>
			<div className="container pt-4 pb-12 px-5 lg:px-0">
				<h1 className="text-3xl text-center mb-8 md:mb-10 lg:mb-16 md:text-2xl lg:text-5xl xl:text-[50px] xl:leading-[70px] font-montserrat font-bold text-lightblue-600">
					Texnikalar
				</h1>
				<ul className="grid grid-cols-1 min-[540px]:grid-cols-2 sm:grid-cols-5 gap-5 text-center lg:flex text-xs lg:text-sm mb-32 justify-around xl:justify-between rounded-[30px] lg:border lg:border-darkgray-100">
					<li
						onClick={() => handleChangeFilter("")}
						className={`py-2 xl:py-3 lg:flex items-center transition-all min-[540px]:col-span-2 sm:col-span-2 shadow-shadow lg:shadow-none duration-300 cursor-pointer lg:px-4 xl:px-8 font-mulish font-bold hover:bg-yellow lg:rounded-[30px] ${
							activeProduct === "" && "bg-yellow text-white"
						}`}>
						Hamısı
					</li>
					<li
						onClick={() => handleChangeFilter("Traktorlar")}
						className={`py-2 xl:py-3 lg:flex items-center transition-all shadow-shadow lg:shadow-none duration-300 cursor-pointer lg:px-4 xl:px-8 font-mulish font-bold hover:bg-yellow lg:rounded-[30px] ${
							activeProduct === "Traktorlar"
								? "bg-yellow text-white"
								: ""
						}`}>
						Traktorlar
					</li>
					<li
						onClick={() => handleChangeFilter("Qaldirici sebetler")}
						className={`py-2 xl:py-3 lg:flex items-center transition-all shadow-shadow lg:shadow-none duration-300 cursor-pointer lg:px-4 xl:px-8 font-mulish font-bold hover:bg-yellow lg:rounded-[30px] ${
							activeProduct === "Qaldirici sebetler"
								? "bg-yellow text-white"
								: ""
						}`}>
						Qaldırıcı səbətlər
					</li>
					<li
						onClick={() => handleChangeFilter("Forkliftler")}
						className={`py-2 xl:py-3 lg:flex items-center transition-all shadow-shadow lg:shadow-none duration-300 cursor-pointer lg:px-4 xl:px-8 font-mulish font-bold hover:bg-yellow lg:rounded-[30px] ${
							activeProduct === "Forkliftler"
								? "bg-yellow text-white"
								: ""
						}`}>
						Forkliftlər
					</li>
					<li
						onClick={() => handleChangeFilter("Avtokran")}
						className={`py-2 xl:py-3 lg:flex items-center transition-all shadow-shadow lg:shadow-none duration-300 cursor-pointer md:px-2 lg:px-4 xl:px-8 font-mulish font-bold hover:bg-yellow lg:rounded-[30px] ${
							activeProduct === "Avtokran"
								? "bg-yellow text-white"
								: ""
						}`}>
						Avtokranlar
					</li>
					<li
						onClick={() => handleChangeFilter("Katok")}
						className={`py-2 xl:py-3 lg:flex items-center transition-all shadow-shadow lg:shadow-none duration-300 cursor-pointer lg:px-4 xl:px-8 font-mulish font-bold hover:bg-yellow lg:rounded-[30px] ${
							activeProduct === "Katok"
								? "bg-yellow text-white"
								: ""
						}`}>
						Katok
					</li>
					<li
						onClick={() => handleChangeFilter("Shacman")}
						className={`py-2 xl:py-3 lg:flex items-center transition-all shadow-shadow lg:shadow-none duration-300 cursor-pointer lg:px-4 xl:px-8 font-mulish font-bold hover:bg-yellow lg:rounded-[30px] ${
							activeProduct === "Shacman"
								? "bg-yellow text-white"
								: ""
						}`}>
						Shacman
					</li>
					<li
						onClick={() => handleChangeFilter("Pompa")}
						className={`py-2 xl:py-3 lg:flex items-center transition-all shadow-shadow lg:shadow-none duration-300 cursor-pointer lg:px-4 xl:px-8 font-mulish font-bold hover:bg-yellow lg:rounded-[30px] ${
							activeProduct === "Pompa"
								? "bg-yellow text-white"
								: ""
						}`}>
						Pompa
					</li>
					<li
						onClick={() => handleChangeFilter("Bobcat")}
						className={`py-2 xl:py-3 lg:flex items-center transition-all shadow-shadow lg:shadow-none duration-300 cursor-pointer lg:px-4 xl:px-8 font-mulish font-bold hover:bg-yellow lg:rounded-[30px] ${
							activeProduct === "Bobcat"
								? "bg-yellow text-white"
								: ""
						}`}>
						Bobcat
					</li>
				</ul>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
					{filteredProducts.map((product, idx) => (
						<ProductCard product={product} key={idx} />
					))}
				</div>
			</div>
		</div>
	);
}

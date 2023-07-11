import {
	About,
	Brands,
	Categories,
	Contacts,
	Hero,
	News,
	Products,
	SEO,
} from "@/components/Homepage";
import { getCategories, getProducts, getPosts } from "@/graphcms";
import { Category, Post, Product } from "@/types";
import Head from "next/head";

export async function getStaticProps() {
	const categories: Category[] = await getCategories();
	const products: Product[] = await getProducts();
	const posts: Post[] = await getPosts();
	return {
		props: {
			categories,
			products,
			posts,
		},
		revalidate: 10,
	};
}

export default function Home({
	categories,
	products,
	posts,
}: {
	categories: Category[];
	products: Product[];
	posts: Post[];
}) {
	return (
		<>
			<Head>
				<title> Mega Texnika | Home Page</title>
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
			<Hero />
			<Categories data={categories} />
			<About />
			<Products products={products} />
			<Brands />
			<News posts={posts} />
			<Contacts />
			<SEO />
		</>
	);
}

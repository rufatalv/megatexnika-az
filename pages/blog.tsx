import Blog from "@/components/Blogpage/Blog";
import BlogInfo from "@/components/Blogpage/BlogInfo";
import Breadcrumbs from "@/components/Common/Breadcrumb";
import { getPosts } from "@/graphcms";
import { Post } from "@/types";
import Head from "next/head";

export async function getStaticProps() {
	const posts: Post[] = await getPosts();
	return {
		props: {
			posts,
		},
		revalidate: 10,
	};
}

export default function blog({ posts }: { posts: Post[] }) {
	return (
		<div className="relative">
			<Head>
				<title> Mega Texnika | Blog</title>
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
						label: "Blog",
						path: "/blog",
					},
				]}
			/>
			<BlogInfo />
			<Blog posts={posts} />
		</div>
	);
}

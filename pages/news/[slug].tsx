import Breadcrumbs from "@/components/Common/Breadcrumb";
import { graphcms } from "@/graphcms";
import { Post } from "@/types";
import { gql } from "graphql-request";
import moment from "moment";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/image";

const QUERY = gql`
	query ($slug: String!) {
		post(where: { slug: $slug }) {
			title
			slug
			createdAt
			description
			image {
				url
			}
			content {
				html
			}
		}
	}
`;

export async function getStaticProps({ params }: GetStaticPropsContext) {
	const slug = params?.slug as string;
	const data = await graphcms.request<{ post: Post }>(QUERY, { slug });
	const post = data.post;

	return {
		props: {
			post,
		},
		revalidate: 10,
	};
}

export const getSluglist = async () => {
	const query = gql`
		query Slugs {
			posts {
				slug
			}
		}
	`;

	const result = await graphcms.request<{ posts: { slug: string }[] }>(query);

	return result;
};

export async function getStaticPaths() {
	const { posts } = await getSluglist();
	return {
		paths: posts.map((post) => ({ params: { slug: post.slug } })),
		fallback: "blocking",
	};
}

interface PostPageProps {
	post: Post;
}

export default function PostPage({ post }: PostPageProps) {
	return (
		<div className="relative">
			<Head>
				<title> Mega Texnika | {post.title} </title>
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
					{
						label: post.title,
						path: "/news/" + post.slug,
					},
				]}
			/>
			<div className="h-[800px] absolute left-0 z-[5] top-0  w-auto">
				<Image
					src="/images/circleHero.svg"
					alt="circleHero"
					width={500}
					height={500}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="container justify-between gap-8 relative z-10 py-12 md:py-24 lg:py-32 px-5 lg:px-0 flex flex-col md:flex-row">
				<div className="md:w-5/12 lg:w-1/2 flex flex-col self-center">
					<h1 className="text-3xl md:text-2xl lg:text-5xl xl:text-[50px] xl:leading-[70px] font-montserrat font-bold text-lightblue-600">
						{post.title}
					</h1>
					<p className="text-lightblue-700 mt-4 font-mulish text-sm">
						{moment(post.publishedAt).format("DD.MM.YYYY")}
					</p>
					<div
						className="font-mulish mt-5 text-sm leading-5 text-darkgray-300"
						dangerouslySetInnerHTML={{
							__html: post.content.html,
						}}></div>
				</div>
				<div className="md:w-6/12 lg:w-1/2">
					<div className="md:p-5 h-[350px] sm:h-full lg:h-full xl:h-auto shadow-shadow bg-white">
						<Image
							src={post.image.url}
							width={700}
							height={700}
							alt="PostImage"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

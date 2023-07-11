import { gql, GraphQLClient } from "graphql-request";

import { Category, Post, Product } from "@/types";

export const graphcms = new GraphQLClient(
	"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljjuoi9v0vpw01tc2ybnc5el/master"
);

export const getPosts = async (): Promise<Post[]> => {
	const QUERY = gql`
		query {
			posts {
				title
				slug
				publishedAt
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
	const { posts } = await graphcms.request<{ posts: Post[] }>(QUERY);

	return posts;
};

export const getCategories = async (): Promise<Category[]> => {
	const QUERY = gql`
		query {
			categories {
				title
				slug
				image {
					url
				}
			}
		}
	`;
	const { categories } = await graphcms.request<{ categories: Category[] }>(
		QUERY
	);

	return categories;
};
export const getProducts = async (): Promise<Product[]> => {
	const QUERY = gql`
		query {
			products {
				title
				slug
				category
				categoryLatin
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
	const { products } = await graphcms.request<{ products: Product[] }>(QUERY);

	return products;
};

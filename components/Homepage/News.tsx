import { Post } from "@/types";
import NewsCard from "./NewsCard";

export default function News({ posts }: { posts: Post[] }) {
	return (
		<div className="container px-5 lg:px-0">
			<h1 className="text-lightblue-600 font-montserrat font-bold text-3xl mb-8">
				Yeniliklər
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
				{posts.map((post, idx) => (
					<NewsCard data={post} key={idx} />
				))}
			</div>
		</div>
	);
}

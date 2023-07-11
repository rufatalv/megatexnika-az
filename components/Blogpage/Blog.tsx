import { Post } from "@/types";
import BlogPost from "./BlogPost";

export default function Blog({ posts }: { posts: Post[] }) {
	return (
		<div className="container px-5 lg:px-0">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5 pb-10">
				{posts.map((post, idx) => (
					<BlogPost key={idx} post={post} />
				))}
			</div>
		</div>
	);
}

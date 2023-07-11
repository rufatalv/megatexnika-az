import { Post } from "@/types";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";

export default function BlogPost({ post }: { post: Post }) {
	const router = useRouter();
	return (
		<div
			className="shadow-shadow cursor-pointer lg:max-w-[315px] flex flex-col"
			onClick={() => router.push("/news/" + post.slug)}>
			<div className="w-full cursor-pointer h-[228px]">
				<Image
					src={post.image.url}
					alt="image"
					width={315}
					height={228}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="p-5 cursor-pointer py-8">
				<h1 className="font-montserrat text-lightblue-600 font-semibold text-lg lg:text-[25px]">
					{post.title}
				</h1>
				<p className="text-lightblue-700 mt-4 font-mulish text-xs">
					{moment(post.publishedAt).format("DD.MM.YYYY")}
				</p>
			</div>
		</div>
	);
}

import { Post } from "@/types";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NewsCard({ data }: { data: Post }) {
	const router = useRouter();
	return (
		<div
			className="shadow-shadow cursor-pointer lg:max-w-[315px] flex flex-col"
			onClick={() => router.push("/news/" + data.slug)}>
			<div className="w-full cursor-pointer h-[228px]">
				<Image
					src={data.image.url}
					alt="image"
					width={315}
					height={228}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="p-5 cursor-pointer py-8">
				<h1 className="font-montserrat text-darkgray-100 font-medium text-base">
					{data.title}
				</h1>
				<p className="text-lightblue-700 mt-4 font-mulish text-sm ">
					{data.description}
				</p>
				<p className="text-lightblue-700 mt-4 font-mulish text-xs">
					{moment(data.publishedAt).format("DD.MM.YYYY")}
				</p>
			</div>
		</div>
	);
}

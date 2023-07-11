import { Category } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
export default function CategoryItem({ data }: { data: Category }) {
	const router = useRouter();
	return (
		<div
			className="bg-white flex flex-col hover:bg-yellow hover:text-white transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 items-center justify-center font-montserrat text-[22px] text-lightblue-600 capitalize shadow-shadow font-semibold cursor-pointer overflow-hidden"
			onClick={() => router.push(`/products?category=${data.slug}`)}>
			<h1 className="text-center cursor-pointer font-semibold text-xs min-[390px]:text-base md:text-lg py-8 md:pt-[51px] md:pb-10">
				{data.title}
			</h1>
			<div className="w-full h-full object-cover hidden md:block">
				<Image
					src={data.image.url}
					width={500}
					height={500}
					alt="Image"
				/>
			</div>
		</div>
	);
}

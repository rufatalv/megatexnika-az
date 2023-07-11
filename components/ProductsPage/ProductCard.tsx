import { Product } from "@/types";
import Image from "next/image";
import Button from "../Common/Button";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
	const router = useRouter();
	return (
		<div className="shadow-shadow w-full xl:max-w-[315px] bg-white">
			<div className="w-full xl:h-full xl:max-w-[315px] xl:max-h-[274px]">
				<Image
					src={product.cardThumb.url}
					width={315}
					height={274}
					alt="image"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="xl:mt-7 p-4 xl:p-[30px] flex flex-col">
				<h3 className="font-montserrat text-lightblue-600 font-semibold text-base xl:text-lg">
					<Link href={"/product/" + product.slug}>
						{product.title}
					</Link>
				</h3>
				<h5 className="text-darkgray-400 font-mulish text-sm">
					{product.category}
				</h5>
				<h5 className="text-lightgray-600 font-mulish text-sm">
					{product.year}
				</h5>
				<p className="font-montserrat ml-auto text-yellow text-base xl:text-lg font-semibold">
					{product.monthPrice} AZN/ay
				</p>
				<p className="font-montserrat ml-auto text-yellow text-base xl:text-lg font-semibold">
					{product.dailyPrice} AZN/gün
				</p>
				<Button
					className="px-[55px] mt-7 bg-white w-full md:bg-transparent self-start
							 md:border-darkgray-300 border md:hover:bg-darkgray-300 md:hover:border-white md:hover:text-white transition-all duration-200 ease-out"
					onClick={() => router.push("/product/" + product.slug)}>
					İcarə et
				</Button>
			</div>
		</div>
	);
}

import Image from "next/image";
import Button from "../Common/Button";
import { useRouter } from "next/router";

export default function Hero() {
	const router = useRouter();
	const handleButtonClick = () => {
		router.push("/products");
	};
	return (
		<div className="relative">
			<div className="pb-12 md:py-24 lg:py-32 container px-0 md:px-5 lg:px-0">
				<div className="flex flex-col md:flex-row relative z-10">
					<div className="md:w-1/2 absolute px-5 pb-12 md:p-0 h-full flex flex-col justify-end items-start md:items-start md:static">
						<h1 className="text-3xl md:text-4xl text-white lg:text-[50px] lg:leading-[70px] font-montserrat font-bold md:text-lightblue-600">
							Ağır texnikanızı bizdən satın alın
						</h1>
						<p className="md:text-darkgray-300 text-white max-w-[470px] text-sm leading-5 mt-2 md:mt-7 font-mulish">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry&#39;s standard dummy text ever since the
							1500s, when an unknown printer took a galley of type
							and scrambled
						</p>
						<Button
							className="px-[55px] mt-7 md:mt-10 bg-white md:bg-transparent self-center md:self-start
							 border-darkgray-300 border hover:bg-darkgray-300 hover:border-white hover:text-white transition-all duration-200 ease-out"
							onClick={handleButtonClick}>
							Ətraflı
						</Button>
					</div>
					<div className="md:w-1/2 md:p-4 h-[600px] md:h-auto md:shadow-shadow">
						<Image
							src="/images/heroImage.png"
							width={700}
							className="w-full h-full object-cover"
							height={700}
							alt="heroImage"
						/>
					</div>
				</div>
				<Image
					src={"/images/circleHero.svg"}
					className="absolute left-0 -z-10 top-0 hidden lg:block"
					width={500}
					alt="circleImage"
					height={500}
				/>
			</div>
		</div>
	);
}

import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../Common/Button";

export default function About() {
	const router = useRouter();
	const handleButtonClick = () => {
		router.push("/about");
	};
	return (
		<div className="relative">
			<div className="container pb-12 md:pb-24 lg:pb-48 lg:px-0 flex gap-16 justify-between">
				<div className="hidden md:flex first-letter:md:w-4/12 flex-col justify-end">
					<div className="md:p-4 h-3/4 md:shadow-shadow">
						<Image
							src="/images/aboutImageLeft.png"
							width={700}
							className="w-full h-full hidden md:block object-cover"
							height={700}
							alt="aboutImage"
						/>
					</div>
				</div>
				<div className="md:w-8/12 relative flex flex-col justify-end md:justify-normal gap-12">
					<div className="md:p-4 h-[590px] lg:h-[620px] md:h-auto md:shadow-shadow">
						<Image
							src="/images/aboutImage.png"
							width={700}
							className="w-full h-full object-cover"
							height={700}
							alt="aboutImage"
						/>
					</div>
					<div className="absolute md:static px-5 md:px-0 md:pl-10 mb-8">
						<h1 className="text-3xl md:text-2xl text-white lg:text-5xl xl:text-[50px] xl:leading-[70px] font-montserrat font-bold md:text-lightblue-600">
							Mega Texnika-da sınaqdan keçirilmiş texnikalar
						</h1>
						<p className="md:text-darkgray-300 text-white max-w-[670px] text-sm leading-5 mt-2 md:mt-7 font-mulish">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry&#39;s standard dummy text ever since the
							1500s, when an unknown printer took a galley of type
							and scrambled
						</p>
						<Button
							className="px-[55px] mt-7 bg-white md:bg-transparent self-start
							 md:border-darkgray-300 hover:bg-darkgray-300 hover:text-white transition-all duration-200 ease-out"
							onClick={handleButtonClick}>
							Haqqımızda
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

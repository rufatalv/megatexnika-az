import Breadcrumbs from "@/components/Common/Breadcrumb";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function About() {
	const router = useRouter();
	const handleButtonClick = () => {
		router.push("/about");
	};
	return (
		<div className="relative">
			<Head>
				<title> Mega Texnika | Haqqımızda</title>
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
						label: "Haqqımızda",
						path: "/about",
					},
				]}
			/>
			<div className="container pt-4 pb-12 px-5 lg:px-0">
				<div className="text-center flex flex-col justify-center items-center md:mt-10 mb-10 md:mb-20">
					<h1 className="text-3xl md:text-4xl block lg:text-[80px] font-montserrat font-bold text-lightblue-600">
						megaTexnika
					</h1>
					<h3 className="text-xl text-yellow mt-6 md:mt-8 mb-2 md:mb-4 font-medium font-mulish">
						Haqqımızda
					</h3>
					<p className="text-sm md:max-w-[522px] text-darkgray-300 font-mulish">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry&#39;s standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled
					</p>
				</div>
				<div className="md:p-5 md:shadow-shadow h-96 md:h-auto w-full mb-12 md:mb-24 lg:mb-32">
					<Image
						alt="aboutImageHero"
						src={"/images/aboutImageHero.png"}
						width={1400}
						height={600}
						className="w-full h-full object-cover md:object-top"
					/>
				</div>
				<div className="flex gap-16 justify-between">
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
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry&#39;s standard dummy text ever
								since the 1500s, when an unknown printer took a
								galley of type and scrambled
							</p>
						</div>
					</div>
				</div>
				<div className="flex gap-[72px] mt-12 relative md:mt-[102px] items-end md:items-center justify-between">
					<div className="md:w-6/12 absolute md:static px-5 pb-12 w-full flex flex-col gap-2 md:gap-3">
						<h1 className="text-3xl md:text-4xl text-white lg:text-[50px] lg:leading-[70px] font-montserrat font-bold md:text-lightblue-600">
							Niyə bizi seçməlisiniz
						</h1>
						<p className="md:text-darkgray-300 text-white md:max-w-[510px] text-sm leading-5 font-mulish">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry&#39;s standard dummy text ever since the
							1500s, when an unknown printer took a galley of type
							and scrambled
						</p>
						<p className="md:text-darkgray-300 text-white md:max-w-[510px] mt-1 md:mt-3 text-sm leading-5 font-mulish">
							It is a long established fact that a reader will be
							distracted by the readable content of a page when
							looking at its layout. The point of using Lorem
							Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using
							&#39;Content here, content here&#39;, making it look
							like readable English
						</p>
					</div>
					<div className="w-full h-[597px] md:h-auto md:w-6/12 flex flex-col">
						<div className="md:p-4 h-full md:shadow-shadow">
							<Image
								src="/images/aboutImageSelect.png"
								width={700}
								className="w-full h-full object-cover"
								height={700}
								alt="aboutImage"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

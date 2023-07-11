import Button from "@/components/Common/Button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function contacts() {
	return (
		<div className="relative">
			<Image
				src={"/images/circleHero.svg"}
				alt="circleHero"
				width={500}
				height={300}
				className="absolute left-0 top-0 z-5"
			/>
			<div className="container relative z-10 py-12 md:py-24 justify-between lg:py-32 px-5 lg:px-0 flex flex-col-reverse gap-16 md:gap-0 md:flex-row">
				<div className="w-full md:w-6/12 flex flex-col gap-14">
					<h1 className="font-montserrat text-3xl font-medium text-lightblue-600">
						Bizə yazın!
					</h1>
					<form
						action=""
						className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<input
							type="text"
							className="focus:outline-none font-mulish text-darkgray-400 text-xs bg-transparent border pl-[23px] py-3 w-full border-darkgray-300 rounded-[30px] font-semibold"
							name="Ad"
							id="Ad"
							placeholder="Ad, Soyad"
						/>
						<input
							type="text"
							className="focus:outline-none font-mulish text-darkgray-400 text-xs bg-transparent border pl-[23px] py-3 w-full border-darkgray-300 rounded-[30px] font-semibold"
							name="Company"
							id="Company"
							placeholder="Şirkətin adı"
						/>
						<input
							type="text"
							className="focus:outline-none font-mulish text-darkgray-400 text-xs bg-transparent border pl-[23px] py-3 w-full border-darkgray-300 rounded-[30px] font-semibold"
							name="Email"
							id="Email"
							placeholder="E-mail"
						/>
						<input
							type="text"
							className="focus:outline-none font-mulish text-darkgray-400 text-xs bg-transparent border pl-[23px] py-3 w-full border-darkgray-300 rounded-[30px] font-semibold"
							name="Telefon"
							id="Telefon"
							placeholder="Telefon"
						/>
						<textarea
							name="Message"
							className="focus:outline-none resize-none md:col-span-2 font-mulish text-darkgray-400 text-xs bg-transparent border pl-[23px] py-3 w-full border-darkgray-300 rounded-[30px] font-semibold"
							placeholder="Mesaj*"
							id=""
							cols={30}
							rows={10}></textarea>
						<Button
							onClick={() => {}}
							className="bg-yellow text-darkgray-300 hover:bg-darkgray-300 hover:text-yellow transition-all duration-300 md:col-span-2">
							Göndər
						</Button>
					</form>
				</div>
				<div className="w-full md:w-5/12 md:px-8 lg:px-16 md:bg-white md:py-12 lg:py-[72px] md:shadow-shadow">
					<h1 className="font-montserrat mb-14 md:text-center text-3xl font-medium text-lightblue-600">
						Əlaqə
					</h1>
					<h4 className="text-lightblue-700 font-mulish text-base">
						Fətəli Xan Xoyski 111A, Bakı Azərbaycan
					</h4>
					<div className="flex flex-col xl:flex-row text-lightblue-700 xl:items-center gap-6 mt-6 justify-between font-mulish text-base">
						<Link href={"#"}>+994(51) 123 45 67</Link>
						<Link href={"#"}>+994(12) 123 45 67</Link>
					</div>
					<div className="mt-6">
						<Link
							href={"#"}
							className="text-lightblue-700 font-mulish text-base">
							info@megatexnika.az
						</Link>
					</div>
					<h4 className="text-lightblue-700 font-mulish text-base mt-12">
						Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00
					</h4>
					<div className="flex gap-8 text-2xl mt-7 text-darkgray-300">
						<Link href="#">
							<FaInstagram />
						</Link>
						<Link href="#">
							<FaFacebookF />
						</Link>
						<Link href="#">
							<FaTwitter />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

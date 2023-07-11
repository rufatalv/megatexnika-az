import Image from "next/image";
import Button from "../Common/Button";

export default function Contacts() {
	return (
		<div className="bg-lightgray-200 mt-24">
			<div className="container relative py-24 px-5 lg:px-0 flex md:justify-between gap-12">
				<div className="w-full lg:w-5/12 flex flex-col gap-8">
					<div>
						<h1 className="font-montserrat text-3xl font-bold text-lightblue-600 mb-7">
							Bizimlə əlaqə saxla!
						</h1>
						<p className="text-darkgray-300 mt-4 font-mulish text-sm leading-5 ">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry&#39;s standard dummy text ever since the
							1500s, when an unknown printer took a galley of type
							and scrambled
						</p>
					</div>
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
						<Button
							onClick={() => {}}
							className="bg-yellow text-darkgray-300 hover:bg-darkgray-300 hover:text-yellow transition-all duration-300 md:col-span-2">
							Göndər
						</Button>
					</form>
				</div>
				<div className="hidden lg:block lg:w-8/12 relative">
					<div className="w-full h-full">
						<Image
							src={"/images/contactImage.png"}
							alt="Contact Image"
							width={791}
							height={500}
							className="absolute right-0 bottom-0 hidden lg:block"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

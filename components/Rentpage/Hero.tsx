import Image from "next/image";

export default function Hero() {
	return (
		<div className="flex flex-col md:flex-row md:gap-16">
			<div className="lg:w-4/12 xl:w-5/12 flex flex-col">
				<h1 className="text-3xl mb-6 md:mb-24 lg:mb-32 md:text-2xl lg:text-5xl xl:text-[50px] xl:leading-[70px] font-montserrat font-bold text-lightblue-600">
					İcarə şərtləri
				</h1>
				<div className="hidden h-full md:block p-5 bg-white shadow-shadow">
					<Image
						src={"/images/leftRent.png"}
						height={800}
						width={400}
						className="w-full h-full object-cover"
						alt="imageLeft"
					/>
				</div>
			</div>
			<div className="lg:w-8/12 xl:w-7/12 flex flex-col gap-4 md:gap-8">
				<div className="lg:p-5 h-[450px] md:h-auto bg-white shadow-shadow">
					<Image
						src={"/images/mainRent.png"}
						height={800}
						width={400}
						className="w-full h-full object-cover"
						alt="imageRent"
					/>
				</div>
				<p className="text-darkgray-300 self-center max-w-[670px] text-sm leading-5 mt-2 md:mt-7 font-mulish">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the
					industry&#39;s standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled
					it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was
					popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with
					desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum
				</p>
				<p className="text-darkgray-300 self-center max-w-[670px] text-sm leading-5 mt-2 md:mt-7 font-mulish">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the
					industry&#39;s standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled
					it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was
					popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with
					desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum
				</p>
			</div>
		</div>
	);
}

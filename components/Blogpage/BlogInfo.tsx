import Image from "next/image";

export default function BlogInfo() {
	return (
		<div className="container py-12 md:py-24 lg:py-32 px-5 lg:px-0">
			<div className="flex flex-col md:flex-row justify-between gap-4">
				<div className="md:w-[40%] flex flex-col justify-center">
					<h1 className="text-3xl md:text-2xl lg:text-5xl xl:text-[50px] xl:leading-[70px] font-montserrat font-bold text-lightblue-600">
						Yeniliklər
					</h1>
					<p className="text-darkgray-300 max-w-[670px] text-sm leading-5 mt-2 md:mt-7 font-mulish">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry&#39;s standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged
					</p>
				</div>
				<div className="md:w-[60%]">
					<div className="md:p-5 md:shadow-shadow bg-white">
						<Image
							src={"/images/blogPage.png"}
							width={500}
							height={800}
							alt="blogPage"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

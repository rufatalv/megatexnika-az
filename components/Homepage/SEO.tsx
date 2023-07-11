import Image from "next/image";

export default function SEO() {
	return (
		<div className="container md:px-5 lg:px-0 lg:mb-24">
			<div className="flex gap-[72px] relative md:mt-[102px] items-end md:items-center justify-between">
				<div className="md:w-6/12 absolute md:static px-5 pb-12 w-full flex flex-col gap-2 md:gap-3">
					<h1 className="text-3xl md:text-4xl text-white lg:text-[50px] lg:leading-[70px] font-montserrat font-bold md:text-lightblue-600">
						Niyə bizi seçməlisiniz
					</h1>
					<p className="md:text-darkgray-300 text-white md:max-w-[510px] text-sm leading-5 font-mulish">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry&#39;s standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled
					</p>
					<p className="md:text-darkgray-300 text-white md:max-w-[510px] mt-1 md:mt-3 text-sm leading-5 font-mulish">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is
						that it has a more-or-less normal distribution of
						letters, as opposed to using &#39;Content here, content
						here&#39;, making it look like readable English
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
	);
}

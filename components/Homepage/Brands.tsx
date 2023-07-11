import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function Brands() {
	return (
		<div className="relative">
			<div className="container px-5 md:pb-24 lg:pb-32 lg:px-0">
				<h1 className="text-lightblue-600 md:text-center font-montserrat font-bold text-3xl mb-8 md:mb-12">
					Markalar
				</h1>
				<Swiper
					slidesPerView={7}
					spaceBetween={83}
					breakpoints={{
						320: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						480: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						640: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						992: {
							slidesPerView: 7,
							spaceBetween: 80,
						},
					}}
					className="mb-12 brands flex items-center">
					<SwiperSlide className="cursor-pointer">
						<Image
							width={120}
							height={65}
							alt="Image"
							src="/images/brands/Hyundai.png"
						/>
					</SwiperSlide>
					<SwiperSlide className="cursor-pointer">
						<Image
							width={120}
							height={65}
							alt="Image"
							src="/images/brands/Hitachi.png"
						/>
					</SwiperSlide>
					<SwiperSlide className="cursor-pointer">
						<Image
							width={120}
							height={65}
							alt="Image"
							src="/images/brands/BobcatBrand.png"
						/>
					</SwiperSlide>
					<SwiperSlide className="cursor-pointer">
						<Image
							width={120}
							height={65}
							alt="Image"
							src="/images/brands/Komatsu.png"
						/>
					</SwiperSlide>
					<SwiperSlide className="cursor-pointer">
						<Image
							width={120}
							height={65}
							alt="Image"
							src="/images/brands/caseconstruction.png"
						/>
					</SwiperSlide>
					<SwiperSlide className="cursor-pointer">
						<Image
							width={120}
							height={65}
							alt="Image"
							src="/images/brands/cat.png"
						/>
					</SwiperSlide>
					<SwiperSlide className="cursor-pointer">
						<Image
							width={120}
							height={65}
							alt="Image"
							src="/images/brands/liugong.png"
						/>
					</SwiperSlide>
					<SwiperSlide className="cursor-pointer">
						<Image
							width={120}
							height={65}
							alt="Image"
							src="/images/brands/Hyundai.png"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

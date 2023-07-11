"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Product } from "@/types";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ProductCard from "./ProductCard";
import Button from "../Common/Button";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function Products({ products }: { products: Product[] }) {
	const [_, setInit] = useState<boolean>();
	const router = useRouter();
	const swiper = useSwiper();
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<div className="container px-5 lg:px-0">
			<h1 className="text-lightblue-600 font-montserrat font-bold text-3xl mb-8">
				Texnikalar
			</h1>
			<Swiper
				slidesPerView={4}
				spaceBetween={20}
				className="productsSwiper relative"
				onInit={() => setInit(true)}
				modules={[Navigation, Pagination, Autoplay]}
				autoplay={{
					delay: 2500,
				}}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
						centeredSlides: true,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 4,
						loop: true,
						spaceBetween: 40,
					},
				}}>
				{products.map((product, idx) => (
					<SwiperSlide key={idx}>
						<ProductCard product={product} />
					</SwiperSlide>
				))}
				<div className="absolute flex justify-between w-full top-1/2 z-20">
					<div
						ref={prevRef}
						className="swiper-button-next cursor-pointer p-2 bg-white border border-gray-400/90 border-opacity-25 rounded-full">
						<FaArrowLeft
							className="text-black opacity-30"
							size={12}
						/>
					</div>
					<div
						ref={nextRef}
						className="swiper-button-prev cursor-pointer p-2 bg-white border border-gray-400/90 border-opacity-25 rounded-full">
						<FaArrowRight
							className="text-black opacity-30"
							size={12}
						/>
					</div>
				</div>
			</Swiper>
			<div className="flex items-center mb-12 md:mb-24 lg:mb-32">
				<Button
					className="px-[55px] mt-7 bg-white  mx-auto md:bg-transparent self-start
							 border-darkgray-300 border hover:bg-darkgray-300 hover:border-white hover:text-white transition-all duration-200 ease-out"
					onClick={() => router.push("/products")}>
					Hamısına bax
				</Button>
			</div>
		</div>
	);
}

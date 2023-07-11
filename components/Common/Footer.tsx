import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
	return (
		<div className="relative">
			<div className="before:bg-footer-bg before:absolute before:bg-cover before:top-0 z-[5] before:left-0 before:content-[''] before:w-full before:h-full"></div>
			<div className=" relative z-10 flex flex-col">
				<div className="flex flex-wrap gap-4 md:gap-0 md:grid md:flex-nowrap container px-5 lg:px-0 md:grid-cols-[1fr_2fr_2fr] lg:grid-cols-[2fr_1fr_2fr_2fr] xl:grid-cols-[2fr_1fr_2fr_2fr] md:justify-between py-[72px] md:py-16 lg:py-20">
					<div className="w-full md:w-auto md:col-span-2 lg:col-span-1 mb-20 md:mb-0 md:hidden lg:block">
						<Image
							src={"/images/footerLogo.png"}
							width={145}
							height={35}
							alt="logo"
						/>
					</div>
					<ul className="w-2/6 md:w-auto flex flex-col gap-4 mb-12 md:mb-0 font-montserrat text-sm text-darkgray-300">
						<li>
							<Link href="#">Haqqımızda</Link>
						</li>
						<li>
							<Link href="#">Texnikalar</Link>
						</li>
						<li>
							<Link href="#">İcarə şərtləri</Link>
						</li>
						<li>
							<Link href="#">Blog</Link>
						</li>
						<li>
							<Link href="#">Əlaqə</Link>
						</li>
					</ul>
					<ul className="w-3/6 md:w-auto flex flex-col gap-4 font-montserrat text-sm text-darkgray-300">
						<li>
							<Link href="#">
								Fətəli Xan Xoyski 111A, Bakı Azərbaycan
							</Link>
						</li>
						<li>
							<Link href="#">+994(51) 123 45 67</Link>
						</li>
						<li>
							<Link href="#">+994(12) 123 45 67</Link>
						</li>
						<li>
							<Link href="#">info@lmegatexnika.az</Link>
						</li>
					</ul>
					<ul className="w-full md:w-auto flex flex-col gap-4 font-montserrat text-sm lg:text-base text-darkgray-300">
						<li>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</li>
						<ul className="text-2xl flex gap-9">
							<li>
								<Link href="#">
									<FaInstagram />
								</Link>
							</li>
							<li>
								<Link href="#">
									<FaFacebookF />
								</Link>
							</li>
							<li>
								<Link href="#">
									<FaTwitter />
								</Link>
							</li>
						</ul>
					</ul>
				</div>
				<div className="flex justify-between font-montserrat  container px-5 lg:px-0 text-[10px] border-t border-yellow md:border-none md:text-xs pb-7 pt-7 md:pt-0 text-darkgray-300">
					<div>© 2022 Megatexnika / Müəllif hüquqları</div>
					<div>
						Design by <span className="font-bold">JEDAİ</span>
					</div>
				</div>
			</div>
		</div>
	);
}

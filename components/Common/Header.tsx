"use client";
import Image from "next/image";
import Toolbar from "./Toolbar";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdown, setIsDropdown] = useState(false);
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY >= 120) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		}
		document
			.querySelectorAll("#link")
			.forEach((link) =>
				link.addEventListener("click", () => setIsMenuOpen(false))
			);
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			<Toolbar />
			<header className="font-montserrat sticky top-0 z-[70] bg-white text-black">
				<div
					className={`py-5 relative z-50 transition-all duration-400  ${
						scroll
							? "shadow-shadow md:py-8"
							: "md:pb-[30px] md:pt-[50px]"
					}`}>
					<div className="container relative px-5 z-40 lg:px-0 flex justify-between">
						<Link id="link" href={"/"}>
							<Image
								src={"/images/logo.png"}
								width={168}
								height={38}
								alt="Logo"
							/>
						</Link>
						<ul
							className={`${
								isMenuOpen ? "flex md:flex" : "hidden md:flex"
							} absolute md:static h-screen bg-white md:bg-transparent md:h-auto w-full text-lg md:text-sm md:w-auto py-8 px-5 md:px-0 md:py-0 left-0 top-[150%] flex-col md:flex-row gap-8 md:items-center md:gap-6 lg:gap-[54px]`}>
							<li>
								<Link id="link" href={"/"}>
									Əsas səhifə
								</Link>
							</li>
							<li>
								<Link id="link" href={"/about"}>
									Haqqımızda
								</Link>
							</li>
							<li className="relative group">
								<Link
									href={"/products"}
									className="flex items-center group gap-1">
									Texnikalar
									<FaChevronDown
										size={12}
										onClick={() =>
											setIsDropdown(!isDropdown)
										}
										className={`text-yellow transition-all duration-300 md:group-hover:rotate-180 ${
											isDropdown
												? "rotate-180 md:rotate-0"
												: "rotate-0"
										}`}
									/>
								</Link>
								<ul
									className={`md:absolute flex flex-col ${
										isDropdown
											? "flex md:bg-white md:flex"
											: "hidden md:flex"
									} md:clip-path md:top-14 md:group-hover:clip-open transition-all duration-700 ease-in-out md:bg-white w-full text-base text-lightblue-600 md:text-sm md:w-48 p-6 md:border md:border-yellow gap-4`}>
									<li className="hover:text-yellow transition-all">
										<Link
											id="link"
											href="/products?category=Avtokran">
											Avtokranlar
										</Link>
									</li>
									<li className="hover:text-yellow transition-all">
										<Link
											id="link"
											href="/products?category=Traktorlar">
											Traktorlar
										</Link>
									</li>
									<li className="hover:text-yellow transition-all">
										<Link
											id="link"
											href="/products?category=Qaldirici%20sebetler">
											Qaldırıcı səbətlər
										</Link>
									</li>
									<li className="hover:text-yellow transition-all">
										<Link
											id="link"
											href="/products?category=Forkliftler">
											Forkliftlər
										</Link>
									</li>
									<li className="hover:text-yellow transition-all">
										<Link
											id="link"
											href="/products?category=Katok">
											Katok
										</Link>
									</li>
									<li className="hover:text-yellow transition-all">
										<Link
											id="link"
											href="/products?category=Shacman">
											Shacman
										</Link>
									</li>
									<li className="hover:text-yellow transition-all">
										<Link
											id="link"
											href="/products?category=Bobcat">
											Bobcat
										</Link>
									</li>
									<li className="hover:text-yellow transition-all">
										<Link
											id="link"
											href="/products?category=Pompa">
											Pompa
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link id="link" href={"/rentterms"}>
									İcarə şərtləri
								</Link>
							</li>
							<li>
								<Link id="link" href={"/blog"}>
									Blog
								</Link>
							</li>
							<li>
								<Link id="link" href={"/contacts"}>
									Əlaqə
								</Link>
							</li>
						</ul>
						<ul className="hidden lg:flex text-sm items-center gap-1">
							<li className="border-r border-darkgray-300 font-semibold pr-1">
								<Link href="#">Az</Link>
							</li>
							<li className="border-r border-darkgray-300 pr-1">
								<Link href="#">En</Link>
							</li>
							<li className="">
								<Link href="#">Ru</Link>
							</li>
						</ul>
						<div
							className="text-2xl flex md:hidden items-center cursor-pointer"
							onClick={() => setIsMenuOpen(!isMenuOpen)}>
							{isMenuOpen ? (
								<RxCross1 className="text-yellow" size={24} />
							) : (
								<RxHamburgerMenu
									className="text-yellow"
									size={24}
								/>
							)}
						</div>
					</div>
					{isMenuOpen && (
						<Image
							src={"/images/circleHeader.svg"}
							height={400}
							width={400}
							className="absolute block md:hidden z-10 top-3/4 right-0"
							alt="logo"
						/>
					)}
				</div>
			</header>
		</>
	);
}

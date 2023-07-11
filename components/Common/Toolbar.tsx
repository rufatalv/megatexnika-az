"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Toolbar({ styles }: { styles?: string }) {
	return (
		<div className={`bg-yellow font-montserrat ${styles}`}>
			<div className="container px-5 lg:px-0 flex items-center gap-6 md:gap-0 justify-between text-darkgray-300 text-xs py-3 font-medium">
				<h2>
					<Link href={"tel:+994121234567"}>+994(12) 123 45 67</Link> |
					Fətəli Xan Xoyski 111A, Bakı Azərbaycan
				</h2>
				<div className="flex gap-6">
					<Link href={"#"}>
						<FaFacebookF size={14} />
					</Link>
					<Link href={"#"}>
						<FaTwitter size={14} />
					</Link>
					<Link href={"#"}>
						<FaInstagram size={14} />
					</Link>
				</div>
			</div>
		</div>
	);
}

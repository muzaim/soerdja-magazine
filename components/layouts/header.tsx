import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
	return (
		<header className="w-full relative">
			<div className="px-4 md:px-8 lg:px-16">
				<div className="flex flex-col gap-4 py-4 sm:h-20 sm:flex-row sm:items-center sm:justify-between sm:py-0">
					<Link href="/" className="text-base font-bold font-poppins sm:text-lg">
						Soerdja Magazine
					</Link>
					<ul className="flex flex-wrap items-center gap-3 text-sm sm:gap-5 sm:text-base">
						<Link href="/magazines" className="">
							Magazines
						</Link>
						<Link href="/podcast">Podcast</Link>
						<div className="hidden sm:block">-</div>
						<div className="flex items-center justify-end gap-4 sm:gap-5">
							<a
								href="#"
								className="text-black hover:text-gray-400 transition"
							>
								<FaFacebookF size={18} />
							</a>
							<a
								href="#"
								className="text-black hover:text-gray-400 transition"
							>
								<FaInstagram size={18} />
							</a>
							<a
								href="#"
								className="text-black hover:text-gray-400 transition"
							>
								<FaTwitter size={18} />
							</a>
							<a
								href="#"
								className="text-black hover:text-gray-400 transition"
							>
								<FaYoutube size={18} />
							</a>
						</div>
					</ul>
				</div>
				<span className="block border-b border-black-300 w-full"></span>
			</div>
		</header>
	);
};

export default Header;

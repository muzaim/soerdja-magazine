import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="bg-black text-white flex flex-col justify-between px-4 py-12 md:px-8 lg:px-16">
			<div className="flex-1 flex items-center justify-center">
				<div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
					<h3 className="md:col-span-6 font-bold text-4xl uppercase leading-tight sm:text-5xl lg:text-[5rem]">
						Design News <br />
						To Your Inbox
					</h3>

					<div className="md:col-span-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-4 py-3 border-b border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-gray-300"
						/>
						<button className="bg-white text-black font-bold px-6 py-3 uppercase tracking-wide hover:bg-gray-200 transition sm:ml-4">
							Subscribe
						</button>
					</div>
				</div>
			</div>

			<div className="border-t border-gray-700 py-8 mt-12">
				<div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto text-sm uppercase tracking-wide sm:grid-cols-2 lg:grid-cols-4">
					<div>
						<h4 className="font-bold mb-3 text-lg">
							Free Magazine
						</h4>
						<ul className="space-y-2 text-gray-400">
							<li>Art</li>
							<li>Design</li>
							<li>Magazine</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-3 text-lg">Explore</h4>
						<ul className="space-y-2 text-gray-400">
							<li>Magazine</li>
							<li>Podcast</li>
							<li>Authors</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-3 text-lg">More</h4>
						<ul className="space-y-2 text-gray-400">
							<li>Style</li>
							<li>Licensing</li>
							<li>Changelog</li>
						</ul>
					</div>
					<div className="flex items-center justify-start gap-4 lg:justify-end">
						<a
							href="#"
							className="text-gray-400 hover:text-white transition"
						>
							<FaFacebookF size={20} />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-white transition"
						>
							<FaInstagram size={20} />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-white transition"
						>
							<FaTwitter size={20} />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-white transition"
						>
							<FaYoutube size={20} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

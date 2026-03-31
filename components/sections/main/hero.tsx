import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div className="bg-white-30 text-black p-0 w-full flex flex-col">
			<h1 className="w-full text-center font-serif text-6xl font-bold uppercase leading-none tracking-tight sm:text-8xl md:text-[10rem] lg:text-[16rem]">
				art & life
			</h1>

			<div className="bg-black px-4 py-3 text-center text-white sm:px-5 md:flex md:min-h-12 md:items-center md:justify-center md:gap-4">
				<span className="font-bold">News Ticker+++</span>
				<span className="mt-1 block text-sm sm:text-base md:mt-0">
					Step into a world where time stands still, and every
					sculpture tells a story of artistry, tradition, and history.
					Ancient sculptures whisper the stories of art and history,
					frozen in time yet alive in imagination.
				</span>
			</div>

			<div className="bg-white-30 text-black grid grid-cols-1 gap-6 px-0 py-5 md:grid-cols-2 md:p-5">
				<h3 className="font-serif text-4xl font-bold uppercase leading-none sm:text-5xl md:text-6xl lg:text-[7rem]">
					Dont Close <br />
					Your Eyes
				</h3>
				<div className="flex flex-col justify-between text-gray-600">
					<span className="text-sm leading-7 sm:text-base">
						In the quiet halls of time, Ancient sculptures stand as
						guardians of forgotten stories, Their carved forms
						whispering secrets of artistry and human devotion, Each
						curve and contour reflecting the culture, passion, and
						history of civilizations past, Inviting us to journey
						through the echoes of creativity that shaped our world.
					</span>

					<div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
						<div className="flex flex-col gap-2 text-sm sm:text-base md:flex-row md:flex-wrap md:gap-3">
							<div className="flex gap-2 text-black">
								<span className="font-bold ">Text</span>
								<span>Bung Tedjo</span>
							</div>
							<div className="flex gap-2 text-black">
								<span className="font-bold">Place</span>
								<span>Soerabadja</span>
							</div>
							<div className="flex gap-2 text-black">
								<span className="font-bold">Date</span>
								<span>March,1 1956</span>
							</div>
						</div>
						<button className="w-max bg-white-30 text-black border px-5 py-2 rounded-full">
							Label
						</button>
					</div>
				</div>
			</div>

			<div className="mt-5 mb-5 h-[320px] overflow-hidden sm:h-[420px] md:h-[520px] lg:h-[700px]">
				<Image
					src="/img/hero.png"
					width={2000}
					height={400}
					alt="hero"
					className="w-full h-full object-cover object-center"
					data-aos="fade-up"
				/>
			</div>
		</div>
	);
};

export default Hero;

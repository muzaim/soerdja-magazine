import Image from "next/image";
import Link from "next/link";
import React from "react";

const podcasts = [
	{
		id: 1,
		title: "The Rise of Street Culture",
		date: "3 March 2023",
		duration: "45 min",
		img: "/img/podcast/podcast1.png",
	},
	{
		id: 2,
		title: "Voices from the Past",
		date: "10 March 2023",
		duration: "52 min",
		img: "/img/podcast/podcast2.png",
	},
	{
		id: 3,
		title: "Art in Motion",
		date: "17 March 2023",
		duration: "38 min",
		img: "/img/podcast/podcast3.png",
	},
];

const LatestPodcast = () => {
	return (
		<div className=" h-full w-full pb-40">
			<div className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
				<h1 className="text-4xl font-bold uppercase sm:text-5xl lg:text-[6rem]">
					Latest Podcast
				</h1>
				<Link
					href={`/podcast`}
					className="font-semibold text-black hover:text-gray-700 transition-colors duration-300 uppercase"
				>
					All episodes &raquo;
				</Link>
			</div>
			<div>
				<div className="flex flex-col gap-4 lg:flex-row">
					{podcasts.map((podcast) => (
						<div
							key={podcast.id}
							className="w-full p-5 flex flex-col gap-4 border border-gray-400 sm:p-6 lg:w-1/3"
							data-aos="fade-up"
							data-aos-delay={(podcast.id * 200).toString()}
						>
							<Image
								src={podcast.img}
								width={500}
								height={500}
								alt={podcast.title}
								className="object-cover"
							/>
							<h1 className="font-bold text-xl text-black hover:underline leading-snug">
								{podcast.title}
							</h1>
							<div className="flex flex-col text-sm text-gray-600 gap-2 sm:flex-row sm:gap-4">
								<p>
									<span className="font-semibold text-black">
										Date:
									</span>{" "}
									{podcast.date}
								</p>
								<p>
									<span className="font-semibold text-black">
										Duration:
									</span>{" "}
									{podcast.duration}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LatestPodcast;

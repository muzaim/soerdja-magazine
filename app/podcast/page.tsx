import Image from "next/image";
import Link from "next/link";
import React from "react";

const podcasts = [
	{
		id: 1,
		title: "The New York Times",
		image: "/img/podcast/podcast1.png",
		date: "2023",
		duration: "20 min",
	},
	{
		id: 2,
		title: "Art & Culture Talks",
		image: "/img/podcast/podcast2.png",
		date: "2023",
		duration: "35 min",
	},
	{
		id: 3,
		title: "History Revisited",
		image: "/img/podcast/podcast3.png",
		date: "2022",
		duration: "25 min",
	},
	{
		id: 4,
		title: "Future of Design",
		image: "/img/podcast/podcast4.png",
		date: "2022",
		duration: "40 min",
	},
	{
		id: 5,
		title: "Street Art Voices",
		image: "/img/podcast/podcast5.png",
		date: "2021",
		duration: "18 min",
	},
];

const Podcast = () => {
	return (
		<>
			<div className="px-4 md:px-8 lg:px-16">
				<div className="space-y-6">
					<div className="w-full">
						<h1 className="w-full text-center font-bold uppercase leading-none font-serif text-5xl sm:text-7xl md:text-[15vw]">
							Podcast
						</h1>
					</div>
					{podcasts.map((podcast, index) => (
						<div
							key={podcast.id}
							className="
      group
      flex flex-col gap-4
      rounded-2xl border border-gray-200
      p-4 md:p-5
      hover:shadow-lg transition-all duration-300
      bg-white
    "
						>
							{/* Top: image + index */}
							<div className="flex items-center gap-4">
								<div className="relative">
									<Image
										src={podcast.image}
										width={300}
										height={300}
										alt={podcast.title}
										className="
            w-24 h-24
            rounded-xl object-cover
            group-hover:scale-105 transition
          "
									/>
									<span className="
          absolute -top-2 -left-2
          w-8 h-8
          rounded-full bg-black text-white
          text-xs font-bold flex items-center justify-center
        ">
										{index + 1}
									</span>
								</div>

								<div className="flex-1 flex flex-col gap-2">
									<Link
										href={`/podcast/${podcast.id}`}
										className="font-semibold text-base md:text-lg leading-snug hover:underline"
									>
										{podcast.title}
									</Link>

									<div className="flex items-center gap-3 text-xs text-gray-500">
										<span>{podcast.date}</span>
										<span>•</span>
										<span>{podcast.duration}</span>
									</div>
								</div>
							</div>

							{/* Bottom: CTA */}
							<div className="flex items-center justify-between pt-2">
								<button
									className="
          flex items-center gap-2
          px-5 py-2.5
          rounded-full
          bg-black text-white
          text-sm font-semibold uppercase
          hover:bg-gray-900
          transition
        "
								>
									▶ Play Episode
								</button>

								<span className="text-xs text-gray-400 hidden md:block">
									Listen now
								</span>
							</div>
						</div>
					))}


				</div>
			</div>
		</>
	);
};

export default Podcast;

import Image from "next/image";

type Podcast = {
	id: number | string;
	title: string;
	img: string;
	date: string;
	duration: string;
};

type PodcastCardProps = {
	podcast: Podcast;
	index: number;
};

export default function PodcastCard({ podcast, index }: PodcastCardProps) {
	return (
		<div
			className="w-full p-5 flex flex-col gap-4 border border-gray-400 sm:p-6 lg:w-1/3"
			data-aos="fade-up"
			data-aos-delay={(index * 200).toString()}
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
			<div className="flex flex-col text-sm text-gray-600 gap-2 sm:flex-row sm:gap-6">
				<p>
					<span className="font-semibold text-black">Date:</span>{" "}
					{podcast.date}
				</p>
				<p>
					<span className="font-semibold text-black">Duration:</span>{" "}
					{podcast.duration}
				</p>
			</div>
		</div>
	);
}

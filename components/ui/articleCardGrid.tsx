import Image from "next/image";
import Link from "next/link";

type ArticleCardGridProps = {
	article: {
		id: number;
		title: string;
		summary: string;
		cover: string;
		date: string;
		category: string;
	};
	index: number;
};

const ArticleCardGrid = ({ article, index }: ArticleCardGridProps) => {
	return (
		<div
			className="
		  group flex flex-col
		  rounded-2xl border border-gray-200
		  bg-white p-6 md:p-8
		  hover:shadow-xl transition-all duration-300
		"
			data-aos="fade-up"
			data-aos-delay={(index * 200).toString()}
		>
			{/* Top meta */}
			<div className="flex items-center justify-between mb-6">
				<span className="text-xs text-gray-500 uppercase tracking-wide">
					{new Date(article.date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</span>

				<span className="
			px-4 py-1
			rounded-full border border-gray-300
			text-xs font-semibold uppercase
			group-hover:bg-black group-hover:text-white
			transition
		  ">
					{article.category}
				</span>
			</div>

			{/* Cover */}
			<div className="overflow-hidden rounded-xl mb-6">
				<Image
					src={article.cover}
					width={400}
					height={500}
					alt={article.title}
					className="
			  w-full object-cover
			  group-hover:scale-105 transition duration-500
			"
				/>
			</div>

			{/* Title */}
			<h2 className="font-bold text-xl md:text-2xl font-poppins leading-snug mb-4">
				{article.title}
			</h2>

			{/* Summary */}
			<p className="text-gray-600 text-sm leading-relaxed line-clamp-4 mb-6">
				{article.summary}
			</p>

			{/* Footer */}
			<div className="mt-auto flex items-center justify-between text-xs text-gray-500">
				<div className="flex gap-6">
					<span>
						<span className="font-semibold text-gray-900">Duration:</span>{" "}
						20 min
					</span>
				</div>

				<Link
					href={`/magazines/${article.id}`}
					className="
			  font-semibold text-black
			  flex items-center gap-1
			  hover:gap-2 transition-all
			"
				>
					Read More
					<span>&rarr;</span>
				</Link>
			</div>
		</div>

	);
};

export default ArticleCardGrid;

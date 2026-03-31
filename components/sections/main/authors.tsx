import AuthorCard from "@/components/ui/authorCard";
import React from "react";

const authors = [
	{
		id: 1,
		name: "Jakob",
		job: "Artist",
		city: "Berlin",
		img: "/img/authors/author1.png",
	},
	{
		id: 2,
		name: "Sophia",
		job: "Photographer",
		city: "Paris",
		img: "/img/authors/author2.png",
	},
	{
		id: 3,
		name: "Liam",
		job: "Writer",
		city: "London",
		img: "/img/authors/author3.png",
	},
	{
		id: 4,
		name: "Emma",
		job: "Designer",
		city: "New York",
		img: "/img/authors/author4.png",
	},
	{
		id: 5,
		name: "Noah",
		job: "Painter",
		city: "Tokyo",
		img: "/img/authors/author5.png",
	},
	{
		id: 6,
		name: "Olivia",
		job: "Musician",
		city: "Amsterdam",
		img: "/img/authors/author6.png",
	},
];

const Authors = () => {
	return (
		<div className=" h-full w-full pb-40">
			<div className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
				<h1 className="text-5xl font-bold uppercase sm:text-6xl lg:text-[8rem]">Authors</h1>
				<span className="font-semibold text-base uppercase sm:text-lg">
					All authors &raquo;
				</span>
			</div>
			<div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{authors.map((author, idx) => (
						<AuthorCard
							key={author.id.toString()}
							author={author}
							idx={idx}
							total={authors.length}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Authors;

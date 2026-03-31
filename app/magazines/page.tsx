"use client";

import Link from "next/link";
import React from "react";
import { useArticlesStore } from "@/store/articleStore";
import ArticleCardGrid from "../../components/ui/articleCardGrid";

const Magazine = () => {
	const articles = useArticlesStore((state) => state.articles);

	return (
		<>
			<div className="px-4 md:px-8 lg:px-16">
				<div className="w-full">
					<h1 className="w-full text-center font-bold uppercase leading-none font-serif text-5xl sm:text-7xl md:text-[13vw]">
						magazines
					</h1>
					<div className="flex flex-col gap-4 pb-4 md:flex-row md:items-center md:justify-between">
						<h1 className="uppercase text-lg font-bold tracking-wide sm:text-xl">
							Categories
						</h1>

						<Link
							href="/magazines/add"
							className="px-5 py-2 border border-black rounded-full text-sm font-medium uppercase hover:bg-black hover:text-white transition-colors duration-300"
						>
							Add New Articles
						</Link>
					</div>
				</div>
				<div className="mb-40">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
						{articles.map((article, index) => (
							<ArticleCardGrid
								key={article.id}
								article={article}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Magazine;

"use client";

import ArticleCardGrid from "@/components/ui/articleCardGrid";
import { useArticlesStore } from "@/store/articleStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LatestArticle = () => {
	const articles = useArticlesStore((state) => state.articles);
	const [randomArticles, setRandomArticles] = useState<typeof articles>([]);

	useEffect(() => {
		if (articles.length > 0) {
			const shuffled = [...articles].sort(() => Math.random() - 0.5);
			setRandomArticles(shuffled.slice(0, 3));
		}
	}, [articles]);

	return (
		<div className=" h-full w-full pb-40">
			<div className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
				<h1 className="text-4xl font-bold uppercase sm:text-5xl lg:text-[6rem]">
					Latest Article
				</h1>
				<Link
					href={`/magazines`}
					className="font-semibold text-black hover:text-gray-700 transition-colors duration-300 uppercase"
				>
					all articles &raquo;
				</Link>
			</div>
			<div>
				<div className="flex">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						{randomArticles.map((article, index) => (
							<ArticleCardGrid
								key={article.id}
								article={article}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestArticle;

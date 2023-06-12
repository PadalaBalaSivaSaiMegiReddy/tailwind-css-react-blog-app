import React from "react";
import ArticleCard from "../../../components/ArticleCard";

function Articles() {
	return (
		<section className="container flex flex-wrap mx-auto md:gap-x-5 gap-y-5 px-5 py-10 ">
			<p>hi</p>

			<ArticleCard className="w-full md:[(calc50%-20px)]" />
			<ArticleCard className="w-full md:[(calc50%-20px)]" />
		</section>
	);
}

export default Articles;

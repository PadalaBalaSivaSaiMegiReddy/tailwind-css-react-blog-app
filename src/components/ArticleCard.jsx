import React from "react";
import images from "../constants/images";

function ArticleCard({ className }) {
	return (
		<div
			className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
		>
			<img
				src={images.Post1Image}
				alt="title"
				className="w-full object-cover object-center h-auto"
			/>
			<div className="p-5">
				<h3 className="font-roboto text-xl font-bold text-dark-soft ">
					Future of work
				</h3>
				<p className="text-dark-light mt-3 text-sm">Majority of people will work in jobs that doesn't exist today</p>
			</div>
		</div>
	);
}

export default ArticleCard;

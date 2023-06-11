import React from "react";
import images from "../constants/images";
import { BsCheckLg } from "react-icons/bs";
function ArticleCard({ className }) {
	return (
		<div
			className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
		>
			<img
				src={images.Post1Image}
				alt="title"
				className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
			/>
			<div className="p-5">
				<h3 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px] ">
					Future of work
				</h3>

				<p className="text-dark-light mt-3 text-sm md:text-lg">
					Majority of people will work in jobs that doesn't exist today
				</p>
				<div className="flex justify-between flex-nowrap items-center mt-6 ">
					<div className="flex items-center gap-2">
						<img src={images.PostProfileImage} alt="post profile" />
						<div className="col flex-col">
							<h4 className="font-bold italic text-dark-soft text-sm">
								Viola Manisa
							</h4>
						</div>
						<div className=" flex items-center gap-x-2 md:gap-x-2.5">
							<span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
								<BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
							</span>
							<span className=" italic text-dark-light text-xs ">
								Verified writer
							</span>
						</div>
					</div>
					<span className="font-bold text-dark-light italic text-sm ">
						02 May
					</span>
				</div>
			</div>
		</div>
	);
}

export default ArticleCard;

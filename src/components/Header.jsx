import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import images from "../constants/images";
import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

const NavItemsInfo = [
	{ name: "Home", type: "link" },
	{ name: "Article", type: "link" },
	{ name: "Pages", type: "dropdown", items: ["About Us", "Contact Us"] },
	{ name: "Pricing", type: "link" },
	{ name: "FAQs", type: "link" },
];

const NavItem = ({ item }) => {
	return (
		<li className=" relative group">
			{item.type === "link" ? (
				<>
					<a href="/" className="px-4 py-2 ">
						{item.name}
					</a>
					<span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100 ">
						/
					</span>
				</>
			) : (
				<>
					<a href="/" className="px-4 py-2 flex items-center">
						{item.name}
						<MdKeyboardArrowDown />
					</a>
					<div className="hidden transition-all duration-500 pt-4 absolute right-0 bottom-0 transform translate-y-full group-hover:block w-max">
						<ul className="flex flex-col shadow-lg rounded-lg overflow-hidden ">
							{item.items.map((page) => (
								<a
									href="/"
									className=" hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
								>
									{page}
								</a>
							))}
						</ul>
					</div>
				</>
			)}
		</li>
	);
};

export default function Header() {
	const [navIsVisible, setnavIsVisible] = useState(false);

	const navVisibilityHandler = () => {
		setnavIsVisible((curState) => {
			return !curState;
		});
	};
	return (
		<section>
			<header className="container mx-auto px-5 flex justify-between py-4 items-center ">
				<div>
					<img className="w-16" src={images.Logo} alt="logo" />
				</div>
				<div className="lg:hidden z-50">
					{navIsVisible ? (
						<AiOutlineClose
							onClick={navVisibilityHandler}
							className="w-6 h-6"
						/>
					) : (
						<AiOutlineMenu onClick={navVisibilityHandler} className="w-6 h-6" />
					)}
				</div>
				<div
					className={` ${
						navIsVisible ? "-right-0 " : "-right-full"
					} transition-all duration-300 mt-[56] lg:mt-0  bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
				>
					<ul className=" text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold ">
						{NavItemsInfo.map((item) => (
							<NavItem key={item.name} item={item} />
						))}
					</ul>

					<button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-3 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300  ">
						Sign in
					</button>
				</div>
			</header>
		</section>
	);
}

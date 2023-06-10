import React from "react";
import images from "../../../constants/images";

function Hero() {
	return (
		<section>
			<div>
				<h1>Read the most interesting articles</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa
					minima ullam! Animi corrupti sit similique est mollitia ducimus.
					Illum.
				</p>
			</div>
			<div>
				<div>
					<input type="text" />
				</div>
				<button>Search</button>
			</div>
			<div>
				<div>
					<span>Popular Tags:</span>
					<ul>
						<li>Design</li>
						<li>User Experience</li>
						<li>User interfaces</li>
					</ul>
				</div>
			</div>
			<div>
				<img src={images.HeroImage} alt="users are reading articles  " />
			</div>
		</section>
	);
}

export default Hero;

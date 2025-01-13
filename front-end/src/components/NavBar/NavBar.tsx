import React from "react";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav>
			<a
				href='#'
				className='logo'>
				Sound<span className='red'>Design</span>
			</a>
			<ul>
				<li>
					<a href='#'>Course Details</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Blog</a>
				</li>
				<li>
					<a href='#'>Testimonial</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="flex-grow  bg-white">
			<h1 className="px-16 py-8  text-4xl  font-extrabold md:px-4">
				Welcome to your Dashboard
			</h1>
			<div className="grid px-16 mt-4 grid-cols-4 grid-rows-4 gap-8 md:grid-cols-2 sm:grid-cols-1 md:px-4">
				<Link
					to="/admin/teachers"
					className="text-center flex transition-all duration-150 ease-linear justify-center items-center hover:scale-110 rounded-md bg-sec_dark text-white text-3xl font-bold  aspect-video"
				>
					Teacher
				</Link>
				<Link
					to="/admin/students"
					className="text-center flex transition-all duration-150 ease-linear justify-center items-center hover:scale-110 rounded-md bg-sec_dark text-white text-3xl font-bold  aspect-video"
				>
					Students
				</Link>
				<Link
					to="/admin/feedbacks"
					className="text-center flex transition-all duration-150 ease-linear justify-center items-center hover:scale-110 rounded-md bg-sec_dark text-white text-3xl font-bold  aspect-video"
				>
					Feedback
				</Link>
			</div>
		</div>
	);
};

export default Home;

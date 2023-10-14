import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="flex flex-col min-h-screen">
			<nav className="flex justify-between px-8 py-2 items-center bg-accent bg-sec_dark text-white">
				<Link to={"/admin"} className="font-bold">
					Dashboard
				</Link>
				<div className="w-10 aspect-square rounded-full bg-blue-500 "></div>
			</nav>
			<div className="w-full  flex-grow">
				<Outlet />
			</div>
		</div>
	);
};

export default AdminDashboard;

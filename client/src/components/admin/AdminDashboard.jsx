import React from "react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import back from "../../assets/back.svg";	

const AdminDashboard = () => {
	const [toggle, setToggle] = useState(false);
	const { pathname } = useLocation();

	return (
		<div className="flex flex-col min-h-screen">
			<nav className="flex justify-between px-8 py-2 items-center bg-accent bg-sec_dark text-white">
				<Link to={"/admin"} className="font-bold">
					{pathname == "/admin" ? (
						<p>Dashboard</p>
					) : (
						<p className="flex items-center">
							<img className="w-8" src={back} alt="" />
							Back to Dashboard
						</p>
					)}
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

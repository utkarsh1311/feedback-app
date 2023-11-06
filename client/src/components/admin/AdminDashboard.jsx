import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import back from "../../assets/back.svg";

const AdminDashboard = () => {
	const pathname = useLocation();

	// redirect user to / if user in not signed in
	useEffect(() => {
		if (!localStorage.getItem("user")) {
			navigate("/");
		}
	}, []);

	const navigate = useNavigate();
	return (
		<div className="flex flex-col min-h-screen">
			<nav className="flex justify-between px-8 py-2 items-center bg-accent bg-sec_dark text-white">
				<div onClick={() => navigate(-1)} className="font-bold">
					{pathname == "/admin" ? (
						<p>Dashboard</p>
					) : (
						<p className="flex items-center ">
							<img className="w-8" src={back} alt="" />
							Go Back
						</p>
					)}
				</div>
				<div className="w-10 aspect-square rounded-full bg-blue-500 "></div>
				<button
					onClick={() => {
						localStorage.removeItem("user");
						navigate("/");
					}}
				>
					Logout
				</button>
			</nav>
			<div className="w-full  flex-grow">
				<Outlet />
			</div>
		</div>
	);
};

export default AdminDashboard;

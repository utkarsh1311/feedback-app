import React from "react";
import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import back from "../../assets/back.svg";	

const AdminDashboard = () => {
	const [toggle, setToggle] = useState(false);
	const pathname = useLocation()

	const navigate = useNavigate()
	return (
		<div className="flex flex-col min-h-screen">
			<nav className="flex justify-between px-8 py-2 items-center bg-accent bg-sec_dark text-white">
				<div onClick={()=>navigate(-1)} className="font-bold">
					{pathname == "/admin" ? (
						<p>Dashboard</p>
					) : (
						<p className="flex items-center">
							<img className="w-8" src={back} alt="" />
							Go Back
						</p>
					)}
				</div>
				<div className="w-10 aspect-square rounded-full bg-blue-500 "></div>
				<button onClick={(()=>localStorage.clear())}>Logout</button>
			</nav>
			<div className="w-full  flex-grow">
				<Outlet />
			</div>
		</div>
	);
};

export default AdminDashboard;

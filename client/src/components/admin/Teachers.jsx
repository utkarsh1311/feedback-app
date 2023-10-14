import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Teachers = () => {
	const [teachers, setTeachers] = useState([
		{
			id: 1,
			name: "Sumit Vyas",
			email: "teacher1@gmail.com",
		},
		{
			id: 2,
			name: "Amit Jaiswal",
			email: "teacher2@gmail.com",
		},
		{
			id: 3,
			name: "Sasuke Uchiha",
			email: "teacher2@gmail.com",
		},
		{
			id: 4,
			name: "Jiraya",
			email: "teacher2@gmail.com",
		},
		{
			id: 5,
			name: "Tsunade",
			email: "teacher2@gmail.com",
		},
		{
			id: 6,
			name: "Teacher 6",
			email: "teacher2@gmail.com",
		},
	]);

	return (
		<div className=" bg-primary col-span-5 py-8 px-16 md:px-8 sm:px-4 ">
			<div className="flex justify-between sm:flex-col flex-wrap gap-4 border-b-2 border-b-black pb-8">
				<h1 className="text-4xl font-bold ">Teachers</h1>
				<input
					className=" rounded-md w-1/2 md:w-full border-2  border-gray-400 px-4 py-2 focus:outline-none md:order-3"
					type="text"
				/>
				<button className=" px-4 py-2 bg-sec_dark text-white rounded-md md:order-2">
					Add Teacher
				</button>
			</div>
			<div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
				{teachers.map((teacher, i) => (
					<Link className="" to={`/admin/teachers/${i}`}>
						<div className="bg-sec_dark rounded-md  p-4 flex basis-10 justify-between border-2 border-gray-400">
							<div>
								<h1 className="text-xl font-bold text-white">{teacher.name}</h1>
								<p className="text-gray-400">{teacher.email}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Teachers;

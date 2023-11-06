import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Teachers = () => {
	const [query, setQuery] = useState("");

	const [teachers, setTeachers] = useState([]);

	useEffect(() => {
		const getTeachers = async () => {
			const res = await axios.get(`http://localhost:3001/teachers`);
			console.log(res.data);
			setTeachers(res.data);
		};

		getTeachers();
	}, []);

	return (
		<div className=" bg-primary col-span-5 py-8 px-16 md:px-8 sm:px-4 ">
			<div className="flex justify-between sm:flex-col flex-wrap gap-4 border-b-2 border-b-black pb-8">
				<h1 className="text-4xl font-bold ">Teachers</h1>
				<input
					onChange={e => setQuery(e.target.value.toLowerCase())}
					className=" rounded-md w-1/2 md:w-full border-2  border-gray-400 px-4 py-2 focus:outline-none md:order-3"
					type="text"
				/>
				<Link
					to={"/admin/addTeacher"}
					className=" px-4 py-2 bg-sec_dark text-white rounded-md md:order-2"
				>
					Add Teacher
				</Link>
			</div>
			<div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
				{teachers
					?.filter(t => t.name.toLowerCase().startsWith(query))
					.map(teacher => (
						<Link
							key={teacher.id}
							className=""
							to={`/admin/teachers/${teacher.id}`}
						>
							<div className=" bg-primary shadow-md rounded-md  p-4 flex basis-10 justify-between border-2 border-gray-400">
								<div>
									<h1 className="text-xl font-bold ">
										{teacher.name}
									</h1>
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

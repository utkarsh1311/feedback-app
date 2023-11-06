import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loader from "../../assets/Loader.svg";

const TeacherDetails = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [assignedStudents, setassignedStudents] = useState([]);
	const [student, setStudent] = useState({ name: "", email: " " });
	const [teacher, setTeacher] = useState();
	const [isOpen, setisOpen] = useState(false);
	console.log(assignedStudents)

	useEffect(() => {
		const getTeacher = async () => {
			try {
				setLoading(true);
				const res = await axios.get(`http://localhost:3001/teachers/${id}`);
				console.log(res.data);
				setTeacher(res.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};

		getTeacher();
	}, []);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async data => {
		// combine data and assignedStudents in one object
		try {
			await axios.put(`http://localhost:3001/teachers/${id}`, {
				...data,
				assignedStudents,
			});
			console.log({ ...data, assignedStudents });
			setassignedStudents([]);
			reset();
			navigate(-1);
		} catch (error) {
			alert("Something went wrong");
			console.log(error);
		}
	};
	const [Isopen, setIsopen] = React.useState(false);

	const toggle = () => {
		setIsopen(!Isopen);
	};

	const handleStudentDelete = async e => {
		const index = e.target.id;
		const newStudents = teacher.assignedStudents.filter(
			(student, i) => i != index,
		);
		await axios.put(`http://localhost:3001/teachers/${id}`, {
			...teacher,
			assignedStudents: newStudents,
		});
		setTeacher({ ...teacher, assignedStudents: newStudents });
	};

	return (
		<>
			{loading ? (
				<img src={Loader} alt="" />
			) : (
				<>
					{teacher ? (
						<div className="col-span-5 p-4 h-full  rounded-md">
							<div className="flex justify-between items-center border-b-2 border-b-black py-4 px-10">
								<h1 className="text-4xl font-bold ">Teacher Details</h1>

								<label className="relative inline-flex items-center cursor-pointer">
									<input type="checkbox" value="" className="sr-only peer" />
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
									<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
										Active
									</span>
								</label>
							</div>
							<div className="grid grid-cols-2 my-4 gap-6">
								<div className="px-10 ">
									<h1 className="text-2xl mb-6">Personal Details</h1>
									<div>
										<form
											onSubmit={handleSubmit(onSubmit)}
											className=" flex flex-col gap-4"
										>
											<div className="flex flex-col">
												<label className="font-semibold" htmlFor="name">
													Name
												</label>
												<input
													defaultValue={teacher?.name}
													{...register("name", {
														required: "Name is required.",
													})}
													placeholder="Enter your name"
													required
													type="text"
													id="name"
													className="w-full outline-none  border-2  focus:outline-none p-3 rounded-lg text-sm "
												/>
											</div>
											<div className="flex flex-col">
												<label className="font-semibold" htmlFor="phone">
													Phone Number
												</label>
												<input
													id="phone"
													defaultValue={teacher?.phoneNumber}
													{...register("phone", {
														required: "Phone Number is required.",
													})}
													placeholder="Enter phone number"
													required
													type="text"
													className="w-full outline-none border-2  focus:outline-none p-3 rounded-lg text-sm "
												/>
											</div>

											<div className="flex flex-col">
												<label className="font-semibold" htmlFor="email">
													E-mail
												</label>
												<input
													id="email"
													defaultValue={teacher?.email}
													{...register("email", {
														required: "Email is required.",
														pattern: {
															value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
															message: "Email is not valid.",
														},
													})}
													placeholder="Enter the email address"
													required
													type="text"
													className="w-full outline-none border-2  focus:outline-none p-3 rounded-lg text-sm "
												/>
												{errors.email && (
													<p className="text-sm font-semibold text-red-600">
														{errors.email.message}
													</p>
												)}
											</div>
											<div className="flex flex-col">
												<label className="font-semibold" htmlFor="password">
													Password
												</label>
												<input
													id="password"
													defaultValue={teacher?.password}
													{...register("password", {
														required: "Password is required",
														minLength: { value: 8, message: "Too small" },
													})}
													placeholder="Enter password"
													required
													type="text"
													className="w-full outline-none border-2  focus:outline-none p-3 rounded-lg text-sm "
												/>
												{errors.password && (
													<p className="text-sm font-semibold text-red-600">
														{errors.password.message}
													</p>
												)}
											</div>
										</form>
									</div>
								</div>
								<div className="px-10">
									<div className="flex justify-between">
										<h1 className="text-2xl ">Assigned students</h1>
										<button
											className="px-2 py-1 bg-sec_dark text-white rounded-md text-xs"
											onClick={toggle}
										>
											Assign Student
										</button>
									</div>
									<div>
										<table className="w-full mt-6 bg-primary border-separate  border-spacing-2 rounded-md ">
											<thead className="">
												<tr className="text-left border-4 border-black">
													<th className="px-4 py-2">Name</th>
													<th className="px-4 py-2">Email</th>
													<th className="px-4 py-2">Action</th>
												</tr>
											</thead>
											<tbody>
												{teacher?.assignedStudents.map((student, index) => {
													return (
														<tr className="border-y border-gray-300">
															<td className="px-4 py-2">{student.name}</td>
															<td className="px-4 py-2">{student.email}</td>
															<td className="px-4 py-2">
																<button
																	id={index}
																	onClick={handleStudentDelete}
																	className="px-2 py-1 bg-sec_dark text-white rounded-md text-xs"
																>
																	Remove
																</button>
															</td>
														</tr>
													);
												})}
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-span-5 flex justify-center items-center mt-10">
								<button className=" px-4 py-2 bg-sec_dark text-white rounded-md">
									Update Details
								</button>
							</div>

							{/* modal */}

							<div
								className={` left-[42%] top-[25%] bg-white ${
									Isopen ? " scale-100" : " scale-0"
								} p-10 z-50 absolute rounded-xl transition-all duration-200`}
							>
								<div className="flex">
									<button
										className=" scale-75 p-2 bg-sec_dark ml-auto text-white rounded-md "
										onClick={toggle}
									>
										<img src={close} alt="" />
									</button>
								</div>
								<div className="flex ">
									<form
										onSubmit={handleSubmit(onSubmit)}
										className=" flex flex-col gap-4"
									>
										<div className="flex flex-col">
											<label className="font-semibold" htmlFor="studentname">
												Student Name
											</label>
											<input
												id="studentname"
												value={student.name}
												onChange={e =>
													setStudent({ ...student, name: e.target.value })
												}
												placeholder="Enter Student name"
												required
												type="text"
												className="w-full outline-none focus:outline-none p-3 rounded-lg text-sm "
											/>
										</div>
										<div className="flex flex-col">
											<label className="font-semibold" htmlFor="studentemail">
												Student Email
											</label>
											<input
												value={student.email}
												onChange={e =>
													setStudent({ ...student, email: e.target.value })
												}
												id="studentemail"
												placeholder="Enter Student email"
												required
												type="email"
												className="w-full outline-none focus:outline-none p-3 rounded-lg text-sm "
											/>
										</div>
										<button
											onClick={() => {
												if (student.name && student.email) {
													setassignedStudents([...assignedStudents, student]);
													setStudent({ name: "", email: "" });
													setIsopen(false);
												}
											}}
											type="submit"
											value="Submit Details"
											className=" px-4 py-2 bg-sec_dark text-white rounded-md cursor-pointer"
										>
											{" "}
											SUbmit
										</button>
									</form>
								</div>
							</div>
							<div
								className={`${
									Isopen
										? "absolute bottom-0 right-0 backdrop-blur top-0 left-0"
										: "hidden"
								}`}
							></div>
						</div>
					) : (
						<div className="font-bold text-6xl">
							User doesn't exist. Please check the URL.
						</div>
					)}
				</>
			)}
		</>
	);
};

export default TeacherDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";

const FormFeedback = () => {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		const getStudents = async () => {
			const studentsFromServer = await axios.get(
				"http://localhost:3001/students",
			);
			setStudents(studentsFromServer.data);
		};
		getStudents();
	}, []);

	const subjects = [
		// array of subjects only
		"Select Subject",
		"Maths",
		"Science",
		"English",
		"Hindi",
		"Social Science",
	];
	return (
		<div className="flex flex-col items-center rounded-lg  justify-center flex-grow-1 py-4 text-black">
			<form
				className="grid grid-cols-2 gap-6 font-primary  w-full p-10"
				action=""
			>
				<div className="flex flex-col gap-6">
					<div>
						<label className="font-semibold" htmlFor="student">
							Student Name
						</label>
						<select
							required
							className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block py-3 px-6 border-r-[24px] border-transparent"
						>
							{students.map(student => (
								<option className="text-lg" value={student.id} key={student.id}>
									{student.name}
								</option>
							))}
						</select>
					</div>
					<div>
						<label className="font-semibold" htmlFor="subject">
							Subject
						</label>
						<select
							required
							className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block py-3 px-6 border-r-[24px] border-transparent focus:outline-none"
						>
							{subjects.map(option => (
								<option key={option.id} className="text-lg" value={option.id}>
									{option}
								</option>
							))}
						</select>
					</div>
					<div>
						<label className="font-semibold" htmlFor="topics">
							Topics Covered
						</label>
						<input
							placeholder="Topics Covered"
							required
							type="text"
							className="w-full outline-none bg-gray-50 focus:outline-none p-3 rounded-lg text-sm border"
						/>
					</div>
					<div className="flex gap-6">
						<div>
							<label className="font-semibold" htmlFor="duration">
								Duration
							</label>
							<div className="flex gap-4">
								<input
									required
									placeholder="hours"
									className="w-1/2 p-2 bg-gray-50 rounded-lg  border outline-none focus:outline-none"
									type="number"
								/>
								<input
									placeholder="minutes"
									className="w-1/2 p-2 bg-gray-50 rounded-lg border outline-none focus:outline-none"
									type="number"
								/>
							</div>
						</div>
						<div>
							<label className="font-semibold" htmlFor="test score">
								Test Score
							</label>
							<input
								placeholder=" Test Score"
								required
								className="w-full bg-gray-50 p-2 rounded-lg border outline-none focus:outline-none"
								type="text"
							/>
						</div>
					</div>
				</div>
				<div>
					<label className="font-semibold" htmlFor="feedback">
						Feedback
					</label>
					<textarea
						required
						placeholder="Submit your feedback here"
						className="border-2 border-gray-00 w-full p-4 focus:outline-none bg-gray-50 rounded-lg"
						name=""
						id=""
						cols="30"
						rows="12"
					></textarea>
				</div>
			</form>
			<button className="bg-sec_dark w-1/3 rounded-md p-2 text-white font-semibold">
				Submit
			</button>
		</div>
	);
};

export default FormFeedback;

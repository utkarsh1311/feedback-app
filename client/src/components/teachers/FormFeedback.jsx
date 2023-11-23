import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormFeedback = () => {
	const [students, setStudents] = useState([]);

	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm();

	useEffect(() => {
		const getStudents = async () => {
			const studentsFromServer = await axios.get(
				"http://localhost:3001/students",
			);
			setStudents(studentsFromServer.data);
		};
		getStudents();
	}, []);

	const onSubmit = data => {
		console.log(data);
	};
	const subjects = [
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
			>
				<div className="flex flex-col gap-6">
					<div>
						<label className="font-semibold" htmlFor="student">
							Student Name
						</label>
						<select
							{...register("student")}
							id="student"
							className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block py-3 px-6 border-r-[24px] border-transparent"
						>
							{students.map(student => (
								<option
									className="text-lg"
									value={student.id}
									key={student.name}
								>
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
							{...register("subject")}
							id="subject"
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
							{...register("topics")}
							id="topics"
							placeholder="Topics Covered"
							required
							type="text"
							className="w-full outline-none bg-gray-50 focus:outline-none p-3 rounded-lg text-sm border"
						/>
					</div>
					<div className="flex gap-6">
						<div>
							<label className="font-semibold" htmlFor="duration">
								Date
							</label>
							<div className="flex gap-4">
								<input
									{...register("date", {
										required: "Date is required.",
										type: "date",
									})}
									id="date"
									required
									placeholder="date"
									className="w-1/2 p-2 bg-gray-50 rounded-lg  border outline-none focus:outline-none flex-grow"
									type="date"
								/>
							</div>
						</div>
						<div>
							<label className="font-semibold" htmlFor="duration">
								Duration
							</label>
							<div className="flex gap-4">
								<input
									{...register("hours", {
										required: "Hours is required.",
										type: "number",
									})}
									id="hours"
									required
									placeholder="hours"
									className="w-1/2 p-2 bg-gray-50 rounded-lg  border outline-none focus:outline-none flex-grow"
									type="number"
								/>
							</div>
						</div>
						<div>
							<label className="font-semibold" htmlFor="test score">
								Test Score
							</label>
							<input
								{...register("testScore", {
									required: "Test Score is required.",
									type: "number",
								})}
								id="testScore"
								placeholder=" Test Score"
								required
								className="w-full bg-gray-50 p-2 rounded-lg border outline-none focus:outline-none"
								type="number"
							/>
						</div>
					</div>
				</div>
				<div>
					<label className="font-semibold" htmlFor="feedback">
						Feedback
					</label>
					<textarea
						{...register("feedback", { required: true })}
						placeholder="Submit your feedback here"
						className="border-2 border-gray-00 w-full p-4 focus:outline-none bg-gray-50 rounded-lg"
						id="feedback"
						cols="30"
						rows="12"
					></textarea>
				</div>
			</form>
			<button
				onClick={handleSubmit(onSubmit)}
				className="bg-sec_dark w-1/3 rounded-md p-2 text-white font-semibold"
				type="submit"
				// value="submit"
			>
				{" "}
				Submit{" "}
			</button>
		</div>
	);
};

export default FormFeedback;

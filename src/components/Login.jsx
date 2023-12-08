import loginImg from "../assets/login.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log(data);
		localStorage.setItem("user", JSON.stringify(data));
		if (
			data.email == import.meta.env.VITE_ADMIN_MAIL &&
			data.password == import.meta.env.VITE_ADMIN_PASSWORD
		) {
			navigate("/admin");
		} else if (
			data.email == import.meta.env.VITE_TEACHER_MAIL &&
			data.password == import.meta.env.VITE_TEACHER_PASSWORD
		) {
			navigate("/teacher");
		} else {
			return <Login />;
		}
	};
	return (
		<div className="w-screen h-screen bg-gray-100 flex justify-center items-center px-10 text-gray-600">
			<div className=" bg-gray-300 flex rounded-md border-2  border-gray-200 overflow-hidden">
				<div className="w-1/2 object-fill md:hidden">
					<img className="" src={loginImg} alt="login form image" />
				</div>
				<div className="flex-grow px-8 py-10  justify-center flex flex-col">
					<h2 className="text-5xl bold uppercase mb-6 font-extrabold ">
						Login{" "}
					</h2>
					<form
						action=""
						className="flex flex-col gap-4"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="flex flex-col w-full">
							<label htmlFor="email">Email</label>
							<input
								placeholder="example@mail.com"
								{...register("email", {
									required: "Email is required.",
									pattern: {
										value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
										message: "Email is not valid.",
									},
								})}
								type="text"
								name="email"
								id="email"
								className="h-10 px-4 py-2 outline-none border-none rounded-md outline-1 font-semibold outline-gray-300 "
							/>
							{errors.email && (
								<p className="text-sm font-semibold text-red-600 mt-1">
									{errors.email.message}
								</p>
							)}
						</div>
						<div className="flex flex-col">
							<label htmlFor="password">Password</label>
							<input
								{...register("password", {
									required: "Password is required",
									minLength: { value: 8, message: "Too small" },
								})}
								type="password"
								name="password"
								placeholder="********"
								id="password"
								className="h-10 px-4 py-2 outline-none border-none rounded-md outline-1 font-semibold outline-gray-300 "
							/>
							{errors.password && (
								<p className="text-sm font-semibold text-red-600 mt-1">
									{errors.password.message}
								</p>
							)}
						</div>
						<div className="">
							<button
								className="w-full rounded-md bg-blue-400 hover:bg-blue-500 py-2 font-semibold text-lg text-white duration-150 ease-in transition-colors"
								type="submit"
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

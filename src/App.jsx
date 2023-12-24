import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AddTeacher from "./components/admin/AddTeacher";
import AdminDashboard from "./components/admin/AdminDashboard";
import Feedback from "./components/admin/Feedback";
import Home from "./components/admin/Home";
import TeachersDetails from "./components/admin/TeacherDetails";
import Teachers from "./components/admin/Teachers";
import TeacherDashboard from "./components/teachers/TeacherDashboard";
import TeacherFeedback from "./components/teachers/TeacherFeedback";
import TeacherHome from "./components/teachers/TeacherHome";

function App() {
	return (
		<div className="w-screen h-full font-primary text-gray-600">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/admin" element={<AdminDashboard />}>
					<Route index element={<Home />} />
					<Route path="teachers" element={<Teachers />} />
					<Route path="teachers/:id" element={<TeachersDetails />} />
					<Route path="feedbacks" element={<Feedback />} />
					<Route path="addTeacher" element={<AddTeacher />} />
				</Route>
				<Route path="/teacher" element={<TeacherDashboard />}>
					{/*  />
					<Route path="teachers" element={<Teachers />} />

					<Route path="students" element={<Students />} />
					<Route path="feedbacks" element={<Feedback />} /> */}
					<Route index element={<TeacherHome />} />
					<Route path="feedback" element={<TeacherFeedback />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

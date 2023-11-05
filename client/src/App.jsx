import { Routes, Route } from "react-router-dom";
import Home from "./components/admin/Home";
import Login from "./components/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import Teachers from "./components/admin/Teachers";
import Students from "./components/admin/Students";
import Feedback from "./components/admin/Feedback";
import TeachersDetails from "./components/admin/TeacherDetails";	
import AddTeacher from "./components/admin/AddTeacher";

function App() {
	return (
		<div className="w-screen h-full font-primary text-gray-600">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/admin" element={<AdminDashboard />}>
					<Route index element={<Home />} />
					<Route path="teachers" element={<Teachers />} />
					<Route path="teachers/:id" element={<TeachersDetails />} />
					<Route path="students" element={<Students />} />
					<Route path="feedbacks" element={<Feedback />} />
					<Route path="addTeacher" element={<AddTeacher />} />
				</Route>
				<Route path="/teachers" element={<AdminDashboard />}>
					<Route index element={<Home />} />
					<Route path="teachers" element={<Teachers />} />

					<Route path="students" element={<Students />} />
					<Route path="feedbacks" element={<Feedback />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

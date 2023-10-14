import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import Teachers from "./components/Teachers";
import Students from "./components/Students";
import Feedback from "./components/Feedback";

function App() {
	return (
		<div className="w-screen h-full font-primary text-gray-600">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/admin" element={<AdminDashboard />}>
					<Route index element={<Home />} />
					<Route path="teachers" element={<Teachers />} />
					<Route path="students" element={<Students />} />
					<Route path="feedbacks" element={<Feedback />} />
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

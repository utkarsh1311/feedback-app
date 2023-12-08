import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
console.log(BASE_URL);
const adminToken = import.meta.env.VITE_ADMIN_TOKEN;

const config = {
	headers: {
		Authorization: `Bearer ${adminToken}`,
	},
};

const teacherLogin = async teacher => {
	const res = await axios.post(`${BASE_URL}/teacher/login`, teacher);
	return res.data;
};

const getAllTeachers = async () => {
	const res = await axios.get(`${BASE_URL}/teachers`, config);
	return res.data;
};

const getTeacherById = async id => {
	const res = await axios.get(`${BASE_URL}/teachers/${id}`, config);
	return res.data;
};

const createTeacher = async teacher => {
	const res = await axios.post(`${BASE_URL}/teachers`, teacher, config);
	return res.data;
};

const updateTeacher = async (id, teacher) => {
	const res = await axios.put(`${BASE_URL}/teachers/${id}`, teacher, config);
	return res.data;
};

const deleteTeacher = async id => {
	const res = await axios.delete(`${BASE_URL}/teachers/${id}`, {
		...config,
	});
	return res.data;
};

export default {
	teacherLogin,
	getAllTeachers,
	getTeacherById,
	createTeacher,
	updateTeacher,
	deleteTeacher,
};

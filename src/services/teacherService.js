import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const teacherLogin = async teacher => {
	const res = await axios.post(`${BASE_URL}/teachers/login`, teacher);
	return res.data;
};

const getAllTeachers = async config => {
	const res = await axios.get(`${BASE_URL}/teachers`, config);
	return res.data;
};

const getTeacherById = async (id, config) => {
	const res = await axios.get(`${BASE_URL}/teachers/${id}`, config);
	return res.data;
};

const createTeacher = async (teacher, config) => {
	const res = await axios.post(`${BASE_URL}/teachers`, teacher, config);
	return res.data;
};

const updateTeacher = async (id, teacher, config) => {
	const res = await axios.put(`${BASE_URL}/teachers/${id}`, teacher, config);
	return res.data;
};

const deleteTeacher = async (id, config) => {
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

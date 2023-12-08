import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const teacherToken = import.meta.env.VITE_TEACHER_TOKEN;

const config = {
	headers: {
		Authorization: `Bearer ${teacherToken}`,
	},
};

const getAllFeedbacks = async () => {
	const res = await axios.get(`${BASE_URL}/feedbacks`, config);
	return res.data;
};

const getFeedbackById = async (id) => {
  const res = await axios.get(`${BASE_URL}/feedbacks/${id}`, config);
  return res.data;
};

const createFeedback = async (feedback) => {
  const res = await axios.post(`${BASE_URL}/feedbacks`, feedback, config);
  return res.data;
};

const updateFeedback = async (id, feedback) => {
  const res = await axios.put(`${BASE_URL}/feedbacks/${id}`, feedback, config);
  return res.data;
}

const deleteFeedback = async (id) => {
  const res = await axios.delete(`${BASE_URL}/feedbacks/${id}`, config);
  return res.data;
}

export default {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};

import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const adminToken = import.meta.env.VITE_ADMIN_TOKEN;

const config = {
	headers: {
		Authorization: `Bearer ${adminToken}`,
	},
};

const adminLogin = async admin => {
	const res = await axios.post(`${BASE_URL}/admin/login`, admin);
	return res.data;
};

export default {
	adminLogin,
};

import axios from "axios";

import { MemoApi } from "@/apis/memos";

const axiosInstance = axios.create({
	baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use((config) => {
	return config;
});

axiosInstance.interceptors.response.use(
	(response) => {
    console.log(response.headers)
		return response;
	},
	(error) => {
		return Promise.reject(error);
	},
);

const client = {
	memos: new MemoApi(axiosInstance),
};

export default client;
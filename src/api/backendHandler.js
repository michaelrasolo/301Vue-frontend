import axios from "axios"

const backendApi = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
})

backendApi.interceptors.request.use((request) => {
	request.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
	return request
})
export default backendApi
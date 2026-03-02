import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",  // ✅ Your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Attach token automatically (if exists)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
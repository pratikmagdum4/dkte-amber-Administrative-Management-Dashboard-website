
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// export const BASE_URL = import.meta.env.VITE_API_BASE_URL||5000;
export const BASE_URL = "http://localhost:5000";
export default api;

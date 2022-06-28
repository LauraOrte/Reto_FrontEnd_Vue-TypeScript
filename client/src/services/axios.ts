
import { AxiosInstance } from "axios";
import axios from "axios";

const axiosIntance: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",

    }
});

export default axiosIntance;
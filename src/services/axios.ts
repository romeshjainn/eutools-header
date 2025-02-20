import axios from "axios";
import Cookies from "js-cookie";
import { SERVER_URL } from "../constants/env";

const API = axios.create({
  baseURL: SERVER_URL + "/api",
  withCredentials: true, // Ensures cookies are sent
  headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use(
  (config) => {
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = "/unauthorized";
    }
    if (error?.response?.status === 403) {
      Cookies.remove("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;

import axios from "axios";

export const baseURL = process.env.BASE_URL;

export const instance = axios.create({
  baseURL: "http://localhost:4000",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "access_token"
  )}`;
  return config;
});

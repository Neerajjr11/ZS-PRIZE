import axios from "axios";

const { REACT_APP_PROD_API } = process.env;

const API = axios.create({ baseURL: `${REACT_APP_PROD_API}` });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("token")) {
        req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return req;
});

export const signIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);
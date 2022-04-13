import axios, { AxiosRequestHeaders } from "axios";
import proxy from "@/configs/host";
export const request = axios.create({
    baseURL: proxy.development.API,
    timeout: 4000,
    withCredentials: true,
});
request.interceptors.request.use(
    config => {
        const token = localStorage.getItem("ncm-tk-dra");
        config.params = {
            ...config.params,

            realIP: "192.168.130.132",
            id: "11121",
        };

        if (token !== null) {
            (config.headers as AxiosRequestHeaders)["Authorization"] = token;
        }
        return config;
    },
    err => {
        console.log(err);

        return Promise.reject(err);
    },
);
request.interceptors.response.use<any>(
    res => {
        if (res.status === 200) {
            return res.data;
        }
        return Promise.reject(res?.data);
    },
    err => {
        console.log(err);
        Promise.reject(err);
    },
);

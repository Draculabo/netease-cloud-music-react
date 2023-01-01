import axios, { AxiosAdapter, AxiosRequestHeaders } from "axios";
import proxy from "@/configs/host";
import { cacheAdapterEnhancer } from "./cacheAdapter";

export const request = axios.create({
    baseURL: proxy.development.API,
    timeout: 10000,
    withCredentials: true,
    adapter: cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter, {
        cache: true,
        expire: 30000,
    }),
});
request.interceptors.request.use(
    config => {
        const token = localStorage.getItem("ncm-tk-dra");
        config.params = {
            ...config.params,
            realIP: "192.168.130.132",
        };

        if (token !== null) {
            (config.headers as AxiosRequestHeaders)["Authorization"] = token;
        }
        return Promise.resolve(config);
    },
    err => {
        console.log(err);

        return Promise.reject(err);
    },
);
request.interceptors.response.use(
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

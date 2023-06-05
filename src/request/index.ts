import axios from "axios";

const service = axios.create({
    baseURL: "/api",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    }
})

// 请求拦截：在header中添加token
service.interceptors.request.use(function (config) {
    // header 可能为空
    config.headers = config.headers || {}

    // 防止csrf攻击
    config.headers.token = localStorage.getItem("token") || ""

    return config
})

// 响应拦截
service.interceptors.response.use(function (response) {
    const code: number = response.data.code;
    // 200 表示成功
    if (code !== 200) {
        return Promise.reject(response.data);
    }
    return response.data;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
})

export default service;
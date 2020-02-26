import axios from 'axios'
import { Message } from "element-ui";
import store from '@/store'
import { getToken, getUserName } from "@/utils/user";

const service = axios.create({
    baseURL: 'http://39.106.169.248:8080',
    timeout: 5000,
});
axios.defaults.headers.post["Content-type"] = "application/json"

// 添加请求拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token)
            // config.headers.Authorization = `yxy ${store.state.token}`
            config.headers['Authorization'] = getToken()
        return config
    }, error => {
        return Promise.reject(error);
    });

// 添加响应拦截器
service.interceptors.response.use(
    response => {
        const data = response.data
        if (data.code !== 0) {
            Message.error(data.message);
            return Promise.reject(data);
        } else {
            Message.success(data.message);
            return data;
        }//在被.then之前处理
    }, error => {
        return Promise.reject(error);
    });

export default service;

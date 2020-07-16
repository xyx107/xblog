import axios from 'axios'
import { Message } from "element-ui";
import store from '@/store'
import cookie from "cookie_js";
import { getToken, getUserName } from "@/utils/user";

const service = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    timeout: 15000,//
});
axios.defaults.headers.post["Content-type"] = "application/json"

// 添加请求拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token){
            // config.headers.Authorization = `yxy ${cookie.get("token")}`
            config.headers['Authorization'] = `Bearer ${cookie.get("token")}`
        }
            
        console.log(config)
        return config
    }, error => {
        return Promise.reject(error);
    });

// 添加响应拦截器
service.interceptors.response.use(
    response => {
        const data = response
        console.log(data)
        if (data.code !== 0) {
            Message.error(data.message);
            return Promise.reject(data);
        } else {
            return data;
        }//在被.then之前处理
    }, error => {
        return Promise.reject(error);
    });

export default service;

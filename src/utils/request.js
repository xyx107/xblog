import axios from 'axios'
import { Message } from "element-ui";
import store from '@/store'
import { getToken, getUserName } from "@/utils/user";

const service =axios.create({
    baseURL: 'http://39.106.169.248:8080',
    timeout: 1000,
});
axios.defaults.headers.post["Content-type"] = "application/json"
 // 添加请求拦截器
service.interceptors.request.use(function (config) {
    // config.headers.Authorization = `Bearer ${store.state.token}`
     console.log(config.headers)
    config.headers['Authorization'] =' getToken()'
    config.headers['UserName'] = getUserName()
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    let data = response.data
    // console.log(data.data.token)
    if(data.code !== 0) {
        Message.error(data.message);
        return Promise.reject(data);
    }else{
        Message.success(data.message);
        return Promise.resolve(data); // return resolve(response);
    }
}, function (error) {
    return Promise.reject(error);
});



export default service;
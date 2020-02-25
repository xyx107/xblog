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
service.interceptors.request.use(function (config) {
    // config.headers.Authorization = `yxy ${store.state.token}`
    config.headers['Authorization'] = getToken()
    // config.headers['UserName'] = getUserName()
    return config//Promise.reject(config);
}, function (error) {
    return Promise.reject(error);
});

// // 添加响应拦截器
// service.interceptors.response.use(function (response) {
//     let data = response.data
//     // 业务需求

//     if(data.code !== 0) {
//         Message.error(data.message);
//         return Promise.reject(data);
//     }else{
//         return response;
//         // return Promise.resolve(data);
//     }

// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });

//     let data = response.data
//     if (data.code == 0) {
//         Message.success(data.message);
//         console.log(data)
//         return data; // return resolve(response);
//     } else {
//         Message.error(data.message);
//         return Promise.reject(data);//这三个promise是异步的
//     }
// }, function (error) {
//     return Promise.reject(error);
// });


service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response.data
    // 业务需求

    if(data.code !== 0) {
        Message.error(data.message);
        return Promise.reject(data);
    }else{
        return response;
        // return Promise.resolve(data);
    }

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;

// import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/user";

const service = axios.create({
  // baseURL: process.env.VUE_APP_API_URL || '/index',
  // baseURL: "http://127.0.0.1:8080",
  baseURL: "http://localhost:3000",

  timeout: 15000
});
axios.defaults.headers.post["Content-type"] = "application/json";

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    if (store.state.user.token) {
      // config.headers.Authorization = `yxy ${getToken()}`
      config.headers.Authorization = '$2b$04$6XBd5vAVhRJg29H9OjNjZekKv33oBLpjZDE45rlAHo9tu/ZAXEh2m'
      // config.headers["Authorization"] = "yxy"+" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTQ4NzA4NzEsImlkIjoyLCJuYmYiOjE1OTQ4NzA4NzEsInVzZXJuYW1lIjoiYXJjaGVyeCJ9.daIrS2tlQSa1DGfMd8Qm61G89KvtFJ4ABRh2TTK1CVw";
    }
    // console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    const data = response.data;
    // console.log(data);
    if (data.code !== 0) {
      // Message.error(data.message);
      return Promise.reject(data);
    } else {
      return data;
    } //在被.then之前处理
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;

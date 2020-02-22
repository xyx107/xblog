// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
import store from "./store/index.js";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import './assets/iconfont/iconfont.css'
import axios from 'axios'
import "@/utils/component.js"//全局组件

Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.prototype.HOST = '/api'
// axios.defaults.baseURL = '/api',配置请求的根路径
// axios.defaults.withCredentials = true
Vue.use(VueResource)
Vue.http.options.credentials = true

Vue.use(VueRouter)
Vue.use(ElementUI)

//创建路由
const router = new VueRouter({
  mode: "history",
  routes: Routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

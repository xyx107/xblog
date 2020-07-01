// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index.js";
import VueResource from 'vue-resource'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/global.css'
import './assets/iconfont/iconfont.css'
import "@/utils/component.js"//全局组件

import VueShowdown from 'vue-showdown'
import Markdown from 'vue-meditor'

import echarts from 'echarts'
import 'echarts/lib/chart/line'

import bmap from 'vue-baidu-map'

// import VueFetch, { $fetch } from './utils/fetch'

// Vue.use(VueFetch, {
//   baseUrl: 'http://localhost:3000/',
// })
Vue.prototype.$echarts = echarts;

Vue.use(bmap, {
  ak: 'anjbBExPuXW4tkbhblI9UpXkOgIw95OW'
})

Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.prototype.HOST = '/api'
// axios.defaults.baseURL = '/api',配置请求的根路径
// axios.defaults.withCredentials = true
Vue.use(VueResource)
Vue.http.options.credentials = true
Vue.use(ElementUI)
Vue.use(VueShowdown,{
  options: {
    emoji: true
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

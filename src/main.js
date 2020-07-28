// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index.js";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/global.css'
import './assets/iconfont/iconfont.css'
import "@/utils/component.js"

// import VueShowdown from 'vue-showdown'
// import Simplemde from 'simplemde'
// Vue.use(Simplemde)

// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts;

// import axios from 'axios'
// Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

// Vue.prototype.HOST = '/api'
// axios.defaults.baseURL = '/api',配置请求的根路径
// axios.defaults.withCredentials = true

// import VueFetch, { $fetch } from './utils/fetch'
// Vue.use(VueFetch, {
//   baseUrl: 'http://localhost:3000/',
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

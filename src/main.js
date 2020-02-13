// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import './assets/font_2t8t9n829gi/iconfont.css'

import axios from 'axios'
//配置请求的根路径
axios.defauls.baseURL = ''
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(VueResource)
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
  router
})

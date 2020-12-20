import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'

import 'normalize.css/normalize.css'

import echarts from 'echarts'
import 'echarts/map/js/china.js'
import 'echarts/lib/chart/line'

import './utils/comment.js'
import './assets/global.css'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

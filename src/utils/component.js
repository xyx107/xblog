import Vue from 'vue'

import BlogHeader from '@/views/article/BlogHeader'
import Footer from '@/views/article/Footer'
import ManageHeader from '@/views/layout/components/ManageHeader'
import ManageFooter from '@/views/layout/components/ManageFooter'

Vue.component('blog-header', BlogHeader )
Vue.component('blog-footer', Footer )



Vue.component('manage-header', ManageHeader )
Vue.component('manage-footer', ManageFooter )
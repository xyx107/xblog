import Vue from 'vue'

import BlogHeader from '@/components/article/BlogHeader'
import Footer from '@/components/article/Footer'
import ManageHeader from '@/components/layout/ManageHeader'
import ManageFooter from '@/components/layout/ManageFooter'

Vue.component('blog-header', BlogHeader )
Vue.component('blog-footer', Footer )



Vue.component('manage-header', ManageHeader )
Vue.component('manage-footer', ManageFooter )
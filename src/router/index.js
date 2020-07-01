import Vue from 'vue'
import Router from 'vue-router'
import store from "@/store/index";
import { getToken, removeToken, removeUserName } from "@/utils/user";
Vue.use(Router)

import Login from '@/views/login/Login'
import Forgetpw from '@/views/login/Forgetpw'
import Register from '@/views/login/Register'

import User from '@/views/layout/User.vue'
import MdEdit from '../views/layout/MdEdit'
import Main from '../views/layout/components/Main'
import Comment from '../views/layout/Comment'
// import AddBlog from '../views/layout/AddBlog'
import Category from '../views/layout/Category'
import ManageArtilce from '../views/layout/ManageArtilce'

import AddBlog from '../views/layout/AddBlog'
import '@/views/layout/index'
import File from '../views/article/File'
import About from '../views/article/About'
import Friend from '../views/article/Friend'
import ShowBlogs from '../views/article/ShowBlogs'
import SingleBlog from '../views/article/SingleBlog'
import MessageBoard from '../views/article/MessageBoard'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: '/article'
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/forgetpw",
            component: Forgetpw
        },
        {
            path: "/mdedit",
            name: "mdedit",
            component: MdEdit
        },
        {
            path: "/addblog",
            name: "addblog",
            component: AddBlog
        },
        {
            path: "/article",
            name: "article",
            component: () => import('@/views/article/'),
            // component: ShowBlogs,
            children: [

                { path: "/file", name: "file", component: File },
                { path: "/messageboard", name: "messageboard", component: MessageBoard },
                { path: "/about", name: "about", component: About },
                { path: "/friend", name: "friend", component: Friend },
            ]
        },
        {
            path: '/article/:id',
            component: SingleBlog
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import('@/views/layout/components/SideBar'),
            children: [
                { path: "/main", name: "main", component: Main },
                { path: "/user", name: "user", component: User },
                { path: "/comment", name: "comment", component: Comment },
                { path: "/category", name: "category", component: Category },
                { path: "/manageartilce", name: "manageartilce", component: ManageArtilce },
            ]
        },
        
    ]

})

const whiteRouter = ['/login', '/register', '/forgetpw','/article', '/addblog']//路由白名单

router.beforeEach((to, from, next) => {
    if(getToken()) {
        if (to.path === '/login') {
            removeToken()
            removeUserName()
            store.commit('user/SET_TOKEN', '')
            store.commit('Suser/ET_USERNAME', '')
            next()
        }else {
            next()
        }
    }else {
        if(whiteRouter.indexOf(to.path) !== -1) {
            next()
        }else {
            next('/login')
        }
    }
}) 

export default router


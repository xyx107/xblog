import Vue from 'vue'
import Router from 'vue-router'
import store from "@/store/index";
import { getToken, removeToken, removeUserName } from "@/utils/user";
Vue.use(Router)

import Login from '@/components/login/Login'
import Forgetpw from '@/components/login/Forgetpw'
import Register from '@/components/login/Register'

import User from '@/components/layout/User.vue'
import MdEdit from '../components/layout/MdEdit'
import Outline from '../components/layout/Outline'
import Comment from '../components/layout/Comment'
import AddBlog from '../components/layout/AddBlog'
import Category from '../components/layout/Category'
import ManageArtilce from '../components/layout/ManageArtilce'

import File from '../components/article/File'
import About from '../components/article/About'
import Friend from '../components/article/Friend'
import ShowBlogs from '../components/article/ShowBlogs'
import SingleBlog from '../components/article/SingleBlog'
import MessageBoard from '../components/article/MessageBoard'

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
            path: "/article",
            name: "article",
            component: ShowBlogs,
            children: [
                // { path: "/bloglist", name: "bloglist", component: BlogList },
                { path: "/file", name: "file", component: File },
                { path: "/messageboard", name: "messageboard", component: MessageBoard },
                { path: "/about", name: "about", component: About },
                { path: "/friend", name: "friend", component: Friend },
            ]
        },
        {
            path: "/outline",
            name: "outline",
            component: Outline,
            children: [
                { path: "/user", name: "user", component: User },
                { path: "/addblog", name: "addblog", component: AddBlog },
                { path: "/comment", name: "comment", component: Comment },
                { path: "/category", name: "category", component: Category },
                { path: "/manageartilce", name: "manageartilce", component: ManageArtilce },
            ]
        },
        {
            path: "/mdedit",
            name: "mdedit",
            component: MdEdit
        },
        {
            path: '/article/:id',
            component: SingleBlog
        }
    ]

})

const whiteRouter = ['/login', '/register', '/forgetpw']//路由白名单

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


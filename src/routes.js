import Login from './components/login/Login'
import Forgetpw from './components/login/Forgetpw'
import Register from './components/login/Register'

import Outline from './components/layout/Outline'
import MdEdit from './components/layout/MdEdit'
import Category from './components/layout/Category.vue'
import Comment from './components/layout/Comment.vue'
import User from './components/layout/User.vue'
import ManageArtilce from './components/layout/ManageArtilce'

import File from './components/article/File'
import ShowBlogs from './components/article/ShowBlogs'
import SingleBlog from './components/article/SingleBlog'
import MessageBoard from './components/article/MessageBoard'
import About from './components/article/About'
import Friend from './components/article/Friend'
import BlogList from './components/article/BlogList'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
//  const router = new VueRouter({
//     routes:
    export default  [
        {
            path: "/",
            redirect: '/login'
        },
        {
            path: "/login",
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
                { path: "/category", name: "category", component: Category },
                // { path: "/mdedit", name: "mdedit", component: MdEdit },
                { path: "/comment", name: "comment", component: Comment },
                { path: "/user", name: "user", component: User },
                { path: "/manageartilce", name: "manageartilce", component: ManageArtilce },
            ]
        },
        // {
        //     path: "/file",
        //     name: "file",
        //     component: File
        // },
        // {
        //     path: "/messageboard",
        //     name: "messageboard",
        //     component: MessageBoard
        // },
        // {
        //     path: "/about",
        //     name: "about",
        //     component: About
        // },
        // {
        //     path: "/friend",
        //     name: "friend",
        //     component: Friend
        // },
        {
            path: "/mdedit",
            name: "mdedit",
            component: MdEdit
        },
        // {
        //     path: "/edit",
        //     name: "edit",
        //     component: Article
        // },
        {
            path: '/article/:id',
            component: SingleBlog
        }
    ]
//  })
// //导航守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') return next();
//     let hadToken = window.localStorage.getItem;
//     if (!hadToken) return next('/login');
//     //否则
//     next();
// })
// console.log(routes)
// export default router
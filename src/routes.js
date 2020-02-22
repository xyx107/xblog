import ShowBlogs from './components/article/ShowBlogs.vue'
import Article from './components/article/Article.vue'
import SingleBlog from './components/article/SingleBlog'
import Login from './components/login/Login'
import Forgetpw from './components/login/Forgetpw'
import Register from './components/login/Register'
import Markdown from './components/article/Markdown'
import File from './components/article/File'
import MessageBoard from './components/article/MessageBoard'
import About from './components/article/About'
import Friend from './components/article/Friend'

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
            component: ShowBlogs
        },
        {
            path: "/file",
            name: "file",
            component: File
        },
        {
            path: "/messageboard",
            name: "messageboard",
            component: MessageBoard
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/friend",
            name: "friend",
            component: Friend
        },
        {
            path: "/markdown",
            name: "markdown",
            component: Markdown
        },
        {
            path: "/edit",
            name: "edit",
            component: Article
        },
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
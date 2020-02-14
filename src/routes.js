import ShowBlogs from './components/ShowBlogs.vue'
import Article from './components/Article.vue'
import SingleBlog from './components/SingleBlog'
import Login from './components/Login'
import Forgetpw from './components/Forgetpw'
import Register from './components/Register'

export default [
    // {
    //     path: "/", 
    //     component: ShowBlogs
    // },
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
        component: Register
     },
     {
        path: "/forgetpw", 
        component: Forgetpw
     },
     
    {
        path: "/add",
        component: Article
    },
    {
        path: '/blog/:id',
        component: SingleBlog
    }
]
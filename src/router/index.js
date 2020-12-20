import Vue from "vue";
import Router from "vue-router";
import store from "@/store/index";
import { getToken, removeToken, removeUserName } from "@/utils/user";
Vue.use(Router);

import Login from "@/views/login/Login";
import Register from "@/views/login/Register";

import MdEdit from "../views/layout/EditBlog";
// import AddBlog from '../views/layout/AddBlog'

const router = new Router({
  mode: "history",
  // base: '/xblog/',
  routes: [
    {
      path: "/",
      redirect: "/article"
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/components/404"),
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
    // {
    //   path: "/forgetpw",
    //   component: Forgetpw
    // },
    {
      path: "/article",
      name: "article",
      component: () => import("@/views/article/"),
      // component: ShowBlogs,
      children: [
        { path: "/file", name: "file", component: () => import('@/views/article/File')},
        { path: "/messageboard", name: "messageboard", component: () => import('@/views/article/MessageBoard')},
        { path: "/about", name: "about", component: () => import('@/views/article/About')},
        { path: "/friend", name: "friend", component: () => import('@/views/article/Friend') }
      ]
    },
    {
      path: "/article/:id",
      component: () => import('@/views/article/SingleBlog')
    },
    {
      path: "/addblog",
      name: "addblog",
      component: () => import('@/views/layout/AddBlog')
    },
    {
      path: "/mdedit/:id",
      name: "mdedit",
      component: MdEdit
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/layout/components/SideBar"),
      children: [
        { path: "/user", name: "user", component: () => import('@/views/layout/User')},
        { path: "/comment", name: "comment", component: () => import('@/views/layout/Comment')},
        { path: "/category", name: "category", component: () => import('@/views/layout/Category')},
        { path: "/manageartilce",  name: "manageartilce", component: () => import('@/views/layout/ManageArtilce')},
        
      ]
    }
  ]
});

const whiteRouter = ["/login", "/register", "/article", "/admin", "/friend"]; //路由白名单

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

//   if (getToken()) {
//     //判断用户是否登录
//     if (Object.keys(from.query).length === 0) {
//       //判断路由来源是否有query，处理不是目的跳转的情况
//       next();
//     } else {
//       let redirect = from.query.redirect; //如果来源路由有query
//       if (to.path === redirect) {
//         //这行是解决next无限循环的问题
//         next();
//       } else {
//         next({ path: redirect }); //跳转到目的路由
//       }
//     }
//   } else {
//     if (to.path === "/login") {
//         removeToken()
//         removeUserName()
//         store.commit('user/SET_TOKEN', '')
//         store.commit('Suser/ET_USERNAME', '')
//         next()
//     } else {
//       next({
//         path: "/login",
//         query: { redirect: to.fullPath } //将目的路由地址存入login的query中
//       });
//     }
//   }
});

export default router;

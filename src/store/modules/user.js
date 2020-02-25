import { Login, logout, getInfo } from '@/api/login'
import service from '@/utils/request.js'
import { getToken,getUserName, setUserName,setToken, removeToken } from '@/utils/user'
// import router, { resetRouter } from '@/router'

const state = {
  token: '111',//getToken()//从cookie中取出token作为state.token，每次vuex都会刷新。
  name: '',
  username: getUserName(),
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token //把data.token传给state.token，改变state.token值。
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {  // 可以回调处理事情 
    login({ commit }, Data) {
        return new Promise((resolve, reject) => {
            Login(Data).then((response) => {
                console.log(111)
                const { data } = response.data
                commit('SET_TOKEN', data.data.token);
                commit('SET_NAME', data.username);
                setToken(data.token);
                setUserName(data.username);
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }


  // login({ commit }, userInfo) {  
  //   //let data = 
  //   Login(userInfo)
    
  //   console.log(data)
  //   commit('SET_TOKEN', data.token);
  //   commit('SET_USERNAME', data.username);
  //   setToKen(data.token);
  //   setUserName(data.username);
  //   let promise = new Promise((resolve, reject) => {
  //     resolve()
  //   })
  //   promise.then((response) => {
  //     console.log(111)
  //     let data = response.data.data
  //     commit('SET_TOKEN', data.token);
  //     commit('SET_USERNAME', data.username);
  //     setToKen(data.token);
  //     setUserName(data.username);
  //     resolve(response)
  // }).catch(error => {
  //     reject(error)
  // })
// }
  // login({ commit }, userInfo) {
  //   //console.log(content)
  //   //第一个参数content指向了上面的东西，state,getters,commit等，也可以用结构的方法写{state,getters}
  //   //第二个参数是调用action时传入的第二个参数
  //   return new Promise((resolve, reject) => {
  //     Login(userInfo).then((response) => {
  //       console.log(111)
  //       const { data } = response.data
  //       commit('SET_TOKEN', data.token) //data.token传给state.token 
  //       setToken(data.token) //存到cookie中
  //       commit('SET_USERNAME', data.username);
  //       setUserName(data.username);
  //       resolve()//login.vue里的.then执行
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

//   // get user info
//   getInfo({ commit, state }) {
//     return new Promise((resolve, reject) => {
//       getInfo(state.token).then(response => {
//         const { data } = response

//         if (!data) {
//           reject('Verification failed, please Login again.')
//         }

//         const { roles, name, avatar, introduction } = data

//         // roles must be a non-empty array
//         if (!roles || roles.length <= 0) {
//           reject('getInfo: roles must be a non-null array!')
//         }

//         commit('SET_ROLES', roles)
//         commit('SET_NAME', name)
//         commit('SET_AVATAR', avatar)
//         commit('SET_INTRODUCTION', introduction)
//         resolve(data)
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

//   // user logout
//   logout({ commit, state, dispatch }) {
//     return new Promise((resolve, reject) => {
//       logout(state.token).then(() => {
//         commit('SET_TOKEN', '')
//         commit('SET_ROLES', [])
//         removeToken()
//         resetRouter()

//         // reset visited views and cached views
//         // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
//         dispatch('tagsView/delAllViews', null, { root: true })

//         resolve()
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

//   // remove token
//   resetToken({ commit }) {
//     return new Promise(resolve => {
//       commit('SET_TOKEN', '')
//       commit('SET_ROLES', [])
//       removeToken()
//       resolve()
//     })
//   },

//   // dynamically modify permissions
//   changeRoles({ commit, dispatch }, role) {
//     return new Promise(async resolve => {
//       const token = role + '-token'

//       commit('SET_TOKEN', token)
//       setToken(token)

//       const { roles } = await dispatch('getInfo')

//       resetRouter()

//       // generate accessible routes map based on roles
//       const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

//       // dynamically add accessible routes
//       router.addRoutes(accessRoutes)

//       // reset visited views and cached views
//       dispatch('tagsView/delAllViews', null, { root: true })

//       resolve()
//     })
//   }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


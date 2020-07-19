import { Login, logout, GetCode } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/user'
// import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),//从cookie中取出token作为state.token，每次vuex都会刷新。
  // name: '',
  // username: getUserName(),
  // avatar: '',
  // introduction: '',
  // roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token //把data.token传给state.token，改变state.token值。
  },
  // SET_INTRODUCTION: (state, introduction) => {
  //   state.introduction = introduction
  // },
  // SET_NAME: (state, name) => {
  //   state.name = name
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // },
  // SET_ROLES: (state, roles) => {
  //   state.roles = roles
  // }
}

const actions = {  // 可以回调处理事情 
  login({ commit }, loginForm) {
    return new Promise((resolve, reject) => {
      Login(loginForm).then(response => {
        commit('SET_TOKEN', response.data.token)
        setToken(response.data.token)
        resolve(response)
      }).catch(error => {
        reject(error)
        console.log(error)
      })
    })
  },
  logout({ commit}) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN','')
      removeToken()
      resolve()
    }).catch(error => {
      reject(error)
      console.log(error)
    })
  }

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


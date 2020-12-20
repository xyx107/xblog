import { Login } from '@/api/login'
import { getToken, setToken, removeToken, getUserName, setUserName, removeUserName } from '@/utils/user'
// import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),//从cookie中取出token作为state.token，每次vuex都会刷新。
  userName: getUserName(),
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
  SET_NAME: (state, username) => {
    state.username = username
  },
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
      Login(loginForm).then(res => {
        commit('SET_TOKEN', res.token)
        commit('SET_NAME', loginForm.username)
        setToken(res.token)
        setUserName(loginForm.username)
        console.log('aaa',res)
        resolve(res)
      }).catch(error => {
        reject(error)
        console.log('bbb', error)
      })
    })
  },
  logout({ commit}) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN','')
      commit('SET_NAME','')
      removeToken()
      removeUserName()
      resolve()
    }).catch(error => {
      reject(error)
      console.log(error)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


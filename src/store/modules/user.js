import {getToken,setToken} from 'utils/auth'
import {login, getUserinfo} from 'api/user'

const state= {
  token: getToken(),
  userinfo: {},
  path: 0
}

const mutations = {
  setToken: (state,token) => state.token = token,
  setUserinfo: (state,userinfo) => state.userinfo = userinfo,
  setPath: (state,path) => state.path = path,
}

const actions = {
  login({commit},user) {
    return new Promise((resolve,reject) => {
      login(user).then(res => {
        setToken(res.token)
        resolve(res.success)
      })
    })
  },
  getUserinfo({commit}){
    getUserinfo().then(res => {
      commit('setUserinfo',res.userinfo)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
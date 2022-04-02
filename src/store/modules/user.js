import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'

const state = {
  token: getToken(), // 设置token为共享状态
  userInfo: {}
}

const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token) // 同步给缓存
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUserInfo(state, result) {
    state.userInfo = result
  },
  removeUseInfo(state) {
    state.userInfo = {}
  }
}

const actions = {
  async login(context, data) {
    const result = await login(data)

    context.commit('setToken', result)

    setTimeStamp()
  },
  async getUserInfo(context, data) {
    const result = await getUserInfo()
    const baseInfo = await getUserDetailById(result.userId)

    context.commit('setUserInfo', { ...result, ...baseInfo })

    return result
  },
  logout(context) {
    context.commit('removeToken')
    context.commit('removeUseInfo')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login } from '@/api/user'

const state = {
  token: getToken() // 设置token为共享状态
}

const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token) // 同步给缓存
  },
  removeToken(state) {
    state.token = null
    removeToken()
  }
}

const actions = {
  async login(context, data) {
    const result = await login(data)

    context.commit('setToken', result)

    setTimeStamp()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

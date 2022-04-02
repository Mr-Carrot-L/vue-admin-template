import { constantRoutes } from '@/router'

const state = {
  routes: constantRoutes
}
const mutations = {
  setRoutes(state, payload) {
    state.routes = [...constantRoutes, ...payload]
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

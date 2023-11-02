import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    loginUser({ commit }, user) {
      // Simulasikan proses login atau pengambilan data pengguna dari API
      setTimeout(() => {
        commit('setUser', user);
      }, 1000);
    },
  },
  modules: {
  }
})

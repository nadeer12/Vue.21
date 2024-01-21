// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    users: []
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
    }
  },
  actions: {
    registerUser({ commit }, user) {
      commit('addUser', user);
    }
  }
});

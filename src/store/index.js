import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import home from "./modules/home";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    user
  },
  plugins: [
    // 数据永久存储
    createPersistedState({
      // paths: ["user.accountToken", "user.refreshToken", "user.username"]
      paths: ["user"]
    })
  ]
});

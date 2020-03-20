/*
 * @Description: 系统用户的管理
 * @Author: ontheroad1992
 * @Date: 2020-03-19 14:32:25
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-19 17:48:15
 */

import UserServer from "@/server/UserServer";
import {
  SET_USER_ACCOUNT_TOKEN,
  SET_USER_REFRESH_TOKEN,
  SET_USER_RULE,
  SET_USER_USERNAME,
  SET_USER_NAME,
  SET_USER_MENU
} from "../mutainosTypes";

const state = () => ({
  username: "",
  accountToken: "",
  refreshToken: "",
  rule: "",
  name: "",
  menu: []
});

const mutations = {
  [SET_USER_ACCOUNT_TOKEN](state, payload) {
    state.accountToken = payload;
  },
  [SET_USER_REFRESH_TOKEN](state, payload) {
    state.refreshToken = payload;
  },
  [SET_USER_RULE](state, payload) {
    state.rule = payload;
  },
  [SET_USER_USERNAME](state, payload) {
    state.username = payload;
  },
  [SET_USER_NAME](state, payload) {
    state.name = payload;
  },
  [SET_USER_MENU](state, payload) {
    state.menu = [...payload];
  }
};

const getters = {};

const actions = {
  async userLogin({ commit }, { username, password }) {
    const {
      accountToken,
      refreshToken,
      rule,
      name,
      menu
    } = await UserServer.userLogin(username, password);
    commit(SET_USER_ACCOUNT_TOKEN, accountToken);
    commit(SET_USER_REFRESH_TOKEN, refreshToken);
    commit(SET_USER_USERNAME, username);
    commit(SET_USER_RULE, rule);
    commit(SET_USER_NAME, name);
    commit(SET_USER_MENU, menu);
    return true;
  },
  async clearUserInfo({ commit }) {
    commit(SET_USER_ACCOUNT_TOKEN, "");
    commit(SET_USER_REFRESH_TOKEN, "");
    commit(SET_USER_USERNAME, "");
    commit(SET_USER_RULE, "");
    commit(SET_USER_NAME, "");
    commit(SET_USER_NAME, []);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};

/*
 * @Description: 系统用户的管理
 * @Author: ontheroad1992
 * @Date: 2020-03-19 14:32:25
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-19 15:02:02
 */

import UserServer from "@/server/UserServer";
import {
  SET_USER_ACCOUNT_TOKEN,
  SET_USER_REFRESH_TOKEN,
  SET_USER_RULE,
  SET_USER_USERNAME,
  SET_USER_NAME
} from "../mutainosTypes";

const state = () => ({
  username: "",
  accountToken: "",
  refreshToken: "",
  rule: "",
  name: ""
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
  }
};

const getters = {};

const actions = {
  async userLogin({ commit }, { username, password }) {
    const {
      accountToken,
      refreshToken,
      rule,
      name
    } = await UserServer.userLogin(username, password);
    commit(SET_USER_ACCOUNT_TOKEN, accountToken);
    commit(SET_USER_REFRESH_TOKEN, refreshToken);
    commit(SET_USER_USERNAME, username);
    commit(SET_USER_RULE, rule);
    commit(SET_USER_NAME, name);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};

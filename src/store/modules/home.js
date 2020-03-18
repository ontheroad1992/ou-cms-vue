/*
 * @Description: 首页数据存储
 * @Author: ontheroad1992
 * @Date: 2020-03-18 09:59:20
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 10:29:04
 */

import {
  SET_HOME_DEVICES_INFO,
  SET_HOME_RECHARGE_AMOUNTS,
  SET_HOME_CONSUME_AMOUNTS
} from "../mutainosTypes";
import HomeServer from "@/server/HomeServer";

const state = () => ({
  devicesInfo: {
    all: 0,
    online: 0,
    offline: 0
  },
  rechargeAmounts: {
    day: "100000",
    month: "1000000",
    date: "20200311"
  },
  consumeAmounts: {
    day: "100000",
    month: "1000000",
    date: "20200311"
  }
});

const mutations = {
  [SET_HOME_DEVICES_INFO](state, payload) {
    state.devicesInfo = { ...payload };
  },
  [SET_HOME_RECHARGE_AMOUNTS](state, payload) {
    state.rechargeAmounts = payload;
  },
  [SET_HOME_CONSUME_AMOUNTS](state, payload) {
    state.consumeAmounts = payload;
  }
};

const getters = {};

const actions = {
  async getDevicesInfo({ commit }) {
    const data = await HomeServer.getDeviceInfo();
    commit(SET_HOME_DEVICES_INFO, data);
  },
  async getRechargeAmount({ commit }) {
    const data = await HomeServer.getRechargeAmount();
    commit(SET_HOME_RECHARGE_AMOUNTS, data);
  },
  async getConsumeAmount({ commit }) {
    const data = await HomeServer.getConsumeAmount();
    commit(SET_HOME_CONSUME_AMOUNTS, data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};

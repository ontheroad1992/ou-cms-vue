/*
 * @Description: 系统用户服务的接口
 * @Author: ontheroad1992
 * @Date: 2020-03-19 13:15:01
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-19 16:03:38
 */

import { post } from "@/plugins/request";

export default class UserServer {
  /**
   * 用户登陆
   * @param {string} username 用户名
   * @param {string} password 密码
   */
  static async userLogin(username, password) {
    const result = await post("/user/login", { username, password });
    return result.data;
  }
}

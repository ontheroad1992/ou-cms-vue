/*
 * @Description: 代理管理路由
 * @Author: ontheroad1992
 * @Date: 2020-03-18 14:01:59
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 14:20:55
 */
export default {
  path: "/proxy",
  name: "代理管理",
  icon: "team",
  component: () => import("@/views/proxy/index.vue")
};

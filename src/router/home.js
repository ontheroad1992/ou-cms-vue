/*
 * @Description: 首页路由
 * @Author: ontheroad1992
 * @Date: 2020-03-18 13:52:05
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 13:52:26
 */

export default {
  path: "/home",
  name: "主业",
  icon: "home",
  component: () => import("@/views/home/index.vue")
};

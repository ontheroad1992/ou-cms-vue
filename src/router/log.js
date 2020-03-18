/*
 * @Description: 日志路由
 * @Author: ontheroad1992
 * @Date: 2020-03-18 13:52:51
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 14:22:41
 */
export default {
  path: "/log",
  name: "日志管理",
  icon: "history",
  component: () => import("@/views/log/index.vue")
};

/*
 * @Description: 会员管理路由
 * @Author: ontheroad1992
 * @Date: 2020-03-18 14:03:43
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 14:22:27
 */
export default {
  path: "/member",
  name: "会员管理",
  icon: "user",
  component: () => import("@/views/member/index.vue")
};

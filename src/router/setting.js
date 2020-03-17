/*
 * @Description: 基础设置路由
 * @Author: ontheroad1992
 * @Date: 2020-03-06 02:59:10
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-17 15:52:45
 */

export default {
  isNav: true,
  icon: "setting",
  name: "基础设置",
  routes: [
    {
      path: "/setting/company",
      name: "公司设置",
      icon: "setting",
      component: () => import("@/views/setting/Company.vue")
    },
    {
      path: "/setting/store",
      name: "门店设置",
      icon: "setting",
      component: () => import("@/views/setting/Store.vue")
    }
  ]
};

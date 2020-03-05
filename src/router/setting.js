/*
 * @Description: 基础设置路由
 * @Author: ontheroad1992
 * @Date: 2020-03-06 02:59:10
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-06 04:28:08
 */

export default {
  title: "基础设置",
  isNav: true,
  icon: "setting",
  name: "setting",
  routes: [
    {
      path: "/setting/company",
      name: "CompanySetting",
      icon: "setting",
      title: "公司设置",
      component: () => import("@/views/setting/CompanySetting.vue")
    },
    {
      path: "/setting/store",
      name: "StoreSetting",
      icon: "setting",
      title: "门店设置",
      component: () => import("@/views/setting/StoreSetting.vue")
    }
  ]
};

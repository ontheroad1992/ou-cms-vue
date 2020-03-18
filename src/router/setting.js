/*
 * @Description: 基础设置路由
 * @Author: ontheroad1992
 * @Date: 2020-03-06 02:59:10
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 14:16:22
 */

export default {
  isNav: true,
  icon: "setting",
  name: "系统设置",
  routes: [
    {
      path: "/setting/rule",
      name: "角色管理",
      icon: "setting",
      component: () => import("@/views/setting/SettingRule.vue")
    },
    {
      path: "/setting/user",
      name: "用户管理",
      icon: "setting",
      component: () => import("@/views/setting/SettingUser.vue")
    },
    {
      path: "/setting/manage",
      name: "系统管理",
      icon: "setting",
      component: () => import("@/views/setting/SettingManage.vue")
    }
  ]
};

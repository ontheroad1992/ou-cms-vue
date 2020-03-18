/*
 * @Description: 设备管理路由
 * @Author: ontheroad1992
 * @Date: 2020-03-18 13:53:52
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 14:19:44
 */
export default {
  isNav: true,
  name: "设备管理",
  icon: "cluster",
  routes: [
    {
      path: "/device/group",
      name: "分组管理",
      component: () => import("@/views/device/DeviceGroup.vue")
    },
    {
      path: "/device/list",
      name: "设备列表",
      component: () => import("@/views/device/DeviceList.vue")
    },
    {
      path: "/device/bill",
      name: "计费管理",
      component: () => import("@/views/device/DeviceBill.vue")
    }
  ]
};

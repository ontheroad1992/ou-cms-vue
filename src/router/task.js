/*
 * @Description: 任务管理
 * @Author: ontheroad1992
 * @Date: 2020-03-18 14:00:05
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 14:20:17
 */
export default {
  path: "/task",
  name: "任务管理",
  icon: "tool",
  component: () => import("@/views/task/index.vue")
};

import Vue from "vue";
import VueRouter from "vue-router";

import home from "./home";
import log from "./log";
import device from "./device";
import setting from "./setting";
import task from "./task";
import proxy from "./proxy";
import member from "./member";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "admin",
    redirect: "/home",
    component: () => import("@/layout/base-layout"),
    children: [
      home,
      log,
      ...device.routes,
      task,
      proxy,
      member,
      ...setting.routes
    ]
  },
  {
    path: "/user",
    name: "user",
    redirect: "/user/login",
    component: () => import("@/layout/user-layout"),
    children: [
      {
        path: "/user/login",
        component: () => import("@/views/user/UserLogin.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

// router.afterEach((to, form) => {
//   console.log("to", to);
//   console.log("from", form);
// });

export const sider = [home, log, device, task, proxy, member, setting];

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

import setting from "./setting";

Vue.use(VueRouter);

const home = {
  path: "/home",
  name: "home",
  title: "主业",
  icon: "home",
  component: () => import("@/views/home/index.vue")
};

const routes = [
  {
    path: "/",
    name: "admin",
    redirect: "/home",
    component: () => import("@/layout/base-layout"),
    children: [home, ...setting.routes]
  },
  {
    path: "/user",
    name: "user",
    redirect: "/user/login",
    component: () => import("@/layout/user-layout"),
    children: [
      {
        path: "/user/login",
        component: () => import("@/views/user/LoginUser.vue")
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

export const sider = [home, setting];

export default router;

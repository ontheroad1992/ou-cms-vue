import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/style/base.less";
import "@/plugins/antd/lazyload";
// import antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

// Vue.use(antd);

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

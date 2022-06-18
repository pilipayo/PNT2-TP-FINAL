import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";

import "jquery";
import "popper.js";
import "bootstrap";

Vue.config.productionTip = false;

import { router } from "./router";
import "./form";
import "./axios";

import store from "./store";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

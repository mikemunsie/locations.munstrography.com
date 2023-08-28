import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import VueClipboard from "vue3-clipboard";

import "./style.css";
import App from "./App.vue";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(VueClipboard);
app.mount("#app");

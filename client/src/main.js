import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(router)
  .use(store)
  .use(VueSweetalert2)
  .mixin(mixins)
  .mount("#app");

window.Kakao.init("441218b29213607712eedcb0167d4184");

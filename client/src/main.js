import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).use(store).mixin(mixins).mount("#app");

window.Kakao.init("441218b29213607712eedcb0167d4184");

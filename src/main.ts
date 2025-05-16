// import { createApp } from "vue";
// import "./style.css";
// import App from "./App.vue";

// createApp(App).mount("#app");

// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import "./assets/css/tailwind.css";

// createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n"; // Importez l'instance i18n
import "./assets/css/tailwind.css";

const app = createApp(App);

app.use(router);
app.use(i18n); // Utilisez l'instance i18n

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; // Choose the theme you prefer
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// createApp(App).use(router).use(store).mount("#app");
const app = createApp(App);

app
  .use(PrimeVue, {
    theme: {
      options: {
        cssLayer: {
          name: "primevue",
          order: "tailwind-base, primevue, tailwind-utilities",
        },
      },
    },
  })
  .use(router)
  .use(store);
app.mount("#app");

// Load the initial theme
//const theme = localStorage.getItem("primevue-theme") || "saga-blue";
//const link = document.createElement("link");
//link.rel = "stylesheet";
//link.href = `https://unpkg.com/primevue/resources/themes/${theme}/theme.css`;
//document.head.appendChild(link);

import { createApp } from "vue";
import "./assets/base.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import { useAppConfigStore } from "./stores/app-config.store";
import { AppConfigService } from "./shared/services/app-config.services";

async function initApp() {
  const appConfigService = new AppConfigService();
  const app = createApp(App);
  const pinia = createPinia();

  app.use(pinia);
  app.use(router);

  const appConfigStore = useAppConfigStore();

  try {
    const config = await appConfigService.fetchConfig();
    appConfigStore.setConfig(config);
    appConfigStore.isAppReady = true;
  } catch (error) {
    console.error("Error fetching config:", error);
  } finally {
    app.mount("#app");
  }
}

initApp();

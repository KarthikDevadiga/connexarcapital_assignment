import { ref } from "vue";
import { defineStore } from "pinia";
import type { APIConfig } from "@/shared/types/app.model";

export const useAppConfigStore = defineStore("app", () => {
  const isAppReady = ref(false);
  const isLoading = ref(false);
  const apiConfigs = ref<APIConfig>({} as APIConfig);

  function setConfig(config: APIConfig) {
    apiConfigs.value = config;
  }

  return {
    /*State*/
    isLoading,
    apiConfigs,
    isAppReady,



    /* Actions */ 
    setConfig,
  };
});

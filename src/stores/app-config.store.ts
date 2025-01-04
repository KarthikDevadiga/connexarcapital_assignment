import { ref } from "vue";
import { defineStore } from "pinia";
import type { APIConfig } from "@/shared/types/app.model";

export const useAppConfigStore = defineStore("app", () => {
  const isAppReady = ref(false);
  const isLoading = ref(false);
  const apiConfig = ref<APIConfig[]>([] as APIConfig[]);

  function setConfig(config: APIConfig[]) {
    apiConfig.value = config;
  }
  const getAPIInfo = (name: string): APIConfig | undefined => {
    return apiConfig.value.find((config) => config.name === name);
  };

  return {
    /*State*/
    isLoading,
    isAppReady,

    /* Actions */
    setConfig,

    /* Getters */
    getAPIInfo,
  };
});

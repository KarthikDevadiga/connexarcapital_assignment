<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAppConfigStore } from "./stores/app-config.store";

useAppConfigStore();
</script>

<template>
  <RouterView />
</template>

<template>
  <div class="container mx-auto p-4 pt-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="{ name: route.name }"
        class="max-w-md rounded overflow-hidden shadow-lg bg-white block"
      >
        <img class="w-full h-48 object-cover" :src="route.image" alt="Image placeholder">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-blue-500">
            {{ route.text }}
          </h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { RouteNames } from '@/shared/enum/app.enum';


export default {
  data() {
    return {
      routes: [
        { name: RouteNames.ECONOMIC_CALENDAR, text: "Economic Calendar", image: "https://shorturl.at/fTosD" },
        { name: RouteNames.COMPANY_ALERTS, text: "Company Alerts", image: "https://shorturl.at/fTosD" },
        { name: RouteNames.INVESTOR_INFO, text: "Investor Info", image: "https://shorturl.at/fTosD" },
        { name: RouteNames.NEWS, text: "News", image: "https://via.placeholder.com/400x200" },
        { name: RouteNames.INVESTOR_SUMMARY, text: "Investor Summary", image: "https://via.placeholder.com/400x200" }
      ]
    };
  }
};
</script>

<style scoped></style>
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Forex & Finacial News</h1>

    <!--To do: Reusabel component for filters select inside component/atoms -->
    <div class="mb-4">
      <label for="filter" class="block text-sm font-medium text-gray-700"
        >Filter by Topic</label
      >
      <select
        id="filter"
        v-model="selectedTopic"
        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">All</option>
        <option value="technical">Technical News</option>
        <option value="fundamental">Fundamental News</option>
      </select>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!--To do:  Reusable component for news article -->
      <div
        v-for="article in filteredArticles"
        :key="article.id"
        class="max-w-md rounded overflow-hidden shadow-lg bg-white"
      >
        <img
          class="w-full h-48 object-cover"
          :src="article.image"
          alt="Article image"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-blue-500 hover:underline">
            {{ article.title }}
          </h2>
          <p class="text-gray-500 text-sm">{{ article.publishedAt }}</p>
          <p class="text-gray-700 text-base mt-4">{{ article.summary }}</p>
          <a
            :href="article.url"
            target="_blank"
            class="text-indigo-500 hover:underline mt-4 block"
            >Read More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useNewsStore } from "@/features/news/news.store";

const newsStore = useNewsStore();

onMounted(() => {
  newsStore.loadNews();
});

const selectedTopic = ref("");

//To do: Frontend filtering, but in real world, filter should be refteched with new payload
const filteredArticles = computed(() => {
  if (!selectedTopic.value) {
    return newsStore.articles;
  }
  return newsStore.articles.filter((article) =>
    article.topics.includes(selectedTopic.value)
  );
});
</script>

<style scoped></style>

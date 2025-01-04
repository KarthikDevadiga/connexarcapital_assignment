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
        <option
          v-for="option in filterOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.lable }}
        </option>
      </select>
      <p>{{ selectedTopic }}</p>
    </div>

    <loading-circle v-show="newsStore.isLoading"></loading-circle>

    <div
      v-show="!newsStore.isLoading && !showArticle"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
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
            <a target="_blank" :href="article.url">{{ article.title }}</a>
          </h2>
          <p class="text-gray-500 text-sm">{{ article.publishedAt }}</p>
          <p class="text-gray-700 text-base mt-4">{{ article.content }}</p>
          <button
            type="button"
            @click="showArticle = !showArticle"
            class="text-indigo-500 hover:underline mt-4 block"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from "vue";
import { useNewsStore } from "@/features/news/news.store";
import LoadingCircle from "@/components/LoadingCircle.vue";

const newsStore = useNewsStore();

const filterOptions = reactive([
  { lable: "All", value: "all" },
  { lable: "Indian market", value: "india" },
  { lable: "international market", value: "international" },
]);

const selectedTopic = ref(filterOptions[0].value);

const showArticle = ref(false);

//To do: Frontend filtering, but in real world, filter should be refteched with new payload
const filteredArticles = computed(() => {
  if (selectedTopic.value === "all") {
    return newsStore.articles;
  }
  return newsStore.articles.filter((article) =>
    article.topics.includes(selectedTopic.value)
  );
});

onMounted(() => {
  newsStore.loadNews();
});
</script>

<style scoped></style>

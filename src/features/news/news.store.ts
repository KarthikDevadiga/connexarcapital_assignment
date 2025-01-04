import { defineStore } from "pinia";
import { ref } from "vue";
import type { NewsArticle } from "./news.model";
import { fetchNews } from "./news.services";

export const useNewsStore = defineStore("news", () => {
  /*state*/
  const articles = ref<NewsArticle[]>([]);
  const isLoading = ref(false);
  const isError = ref(false);

  /*actions*/
  const loadNews = async () => {
    try {
      isLoading.value = true;
      const response = await fetchNews();
      isLoading.value = false;
      articles.value = response;
    } catch {
      isError.value = true;
      isLoading.value = false;
    }
  };

  /*getters*/

  return {
    // state
    articles,

    // actions
    loadNews,

    // getters
  };
});

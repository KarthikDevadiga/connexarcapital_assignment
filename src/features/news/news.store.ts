import { defineStore } from "pinia";

interface NewsArticle {
  id: number;
  title: string;
  content: string;
  publishedAt: Date;
}

interface NewsState {
  articles: NewsArticle[];
}

export const useNewsStore = defineStore("news", {
  state: (): NewsState => ({
    articles: [],
  }),
  actions: {
    addArticle(article: NewsArticle) {
      this.articles.push(article);
    },
    removeArticle(articleId: number) {
      this.articles = this.articles.filter(
        (article) => article.id !== articleId
      );
    },
    updateArticle(updatedArticle: NewsArticle) {
      const index = this.articles.findIndex(
        (article) => article.id === updatedArticle.id
      );
      if (index !== -1) {
        this.articles[index] = updatedArticle;
      }
    },
  },
  getters: {
    getArticleById: (state) => (id: number) => {
      return state.articles.find((article) => article.id === id);
    },
  },
});

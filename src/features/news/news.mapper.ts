import type { NewsArticle, NewsResponse } from "./news.model";

export function mapNewsResponseToNewsArticles(
  response: NewsResponse
): NewsArticle[] {
  return response.data.map((article) => ({
    id: article.uuid,
    title: article.title,
    content: article.description,
    publishedAt: new Date(article.published_at),
    image: article.image_url,
    topics: article.entities.map((entity) => entity.industry),
  }));
}

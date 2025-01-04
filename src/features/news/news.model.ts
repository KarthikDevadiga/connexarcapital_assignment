export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  publishedAt: Date;
  image: string;
  topics: string[];
}



/* NEWS API response interface */
interface NewsEntityResponse {
  type: string;
  industry: string;
}

interface NewsArticleResponse {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  published_at: string;
  entities: NewsEntityResponse[];
}

interface PageMetaResponse {
  found: number;
  returned: number;
  limit: number;
  page: number;
}

export interface NewsResponse {
  pageMeta: PageMetaResponse;
  data: NewsArticleResponse[];
}

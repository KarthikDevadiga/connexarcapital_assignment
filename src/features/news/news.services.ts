import { useAppConfigStore } from "@/stores/app-config.store"; // data fatching data creation
import { mapNewsResponseToNewsArticles } from "./news.mapper";
import type { APIConfig } from "@/shared/types/app.model";

export async function fetchNews(
  params: Record<string, string | number | boolean> = {}
) {
  try {
    const apiConfig = useAppConfigStore();
    const { apiURL, apiKey } = apiConfig.getAPIInfo("news") as APIConfig;
    if (!apiURL && !apiKey) {
      throw new Error("API info not found");
    }

    //TODO  write reusable method to return query string
    const url = new URL(apiURL);
    url.searchParams.append("api_token", apiKey);
    url.searchParams.append("language", "en");
    url.searchParams.append("limit", "10");
    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key].toString());
    });

    const response = await fetch(url.toString());
    const data = await response.json();

    const result = mapNewsResponseToNewsArticles(data);
    console.log(data);

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}

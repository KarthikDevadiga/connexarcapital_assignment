export class AppConfigService {
  async fetchConfig() {
    const response = await fetch("/config.json");
    const data = await response.json();

    console.log(data);
    return data;
  }
}

import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://designdept-inc.com/",
  match: "https://designdept-inc.com/**",
  maxPagesToCrawl: 75,
  outputFileName: "DDI webCrawl output.json",
};

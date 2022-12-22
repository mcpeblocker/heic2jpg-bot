import { config as dotenvConfig } from "dotenv";
dotenvConfig();
import * as process from "node:process";

interface Config {
  token: string;
  secret: string;
}

const config: Config = {
  token: process.env["BOT_TOKEN"] || "",
  secret: process.env["CONVERTAPI_SECRET"] || "",
};

export default config;

import { Bot } from "grammy";
import config from "../utils/config";
import { BotContext } from "./context";

if (!config.token)
  throw new Error("Token must be present as an environment variable!");

const bot = new Bot<BotContext>(config.token);

export default bot;

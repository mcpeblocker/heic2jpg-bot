import { Context, SessionFlavor } from "grammy";
import { FileFlavor } from "@grammyjs/files";

interface SessionData {
  files: string[];
}

export type BotContext = FileFlavor<Context & SessionFlavor<SessionData>>;

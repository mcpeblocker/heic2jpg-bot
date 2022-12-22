import { session } from "grammy";
import { hydrateFiles } from "@grammyjs/files";
import bot from "./core/bot";

bot.api.config.use(hydrateFiles(bot.token));

bot.use(
  session({
    initial() {
      return { files: ["test"] };
    },
  })
);

import "./commands";

bot.on(":document", async (ctx) => {
  const file = await ctx.getFile();
  const url = await file.getUrl();
  ctx.session.files.push(url);
  ctx.reply("✔️ Fayl qabul qilindi.");
});

bot.start({
  onStart: (botInfo) => {
    console.log(`@${botInfo.username} started!`);
  },
});

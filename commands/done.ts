import bot from "../core/bot";
import ConvertAPI from "convertapi";
import config from "../utils/config";

const api = new ConvertAPI(config.secret);

bot.command("done", async (ctx) => {
  let { files } = ctx.session;
  files = files.slice(1, files.length);
  ctx.session.files = ["test"];
  if (files.length < 1) {
    ctx.reply("📭 Birontayam fayl yubormagansiz!");
  }

  ctx.reply("⏳ Fayllar JPG formatga o'tkazilmoqda...");

  for (let file of files) {
    const result = await api.convert("jpg", { File: file }, "heic");
    ctx.replyWithDocument(result.file.url);
  }

  ctx.reply("✅ Barcha fayllar JPG formatga o'tkazildi.");
});

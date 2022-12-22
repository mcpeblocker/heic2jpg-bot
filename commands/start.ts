import bot from "../core/bot";

bot.command("start", (ctx) => {
  const text =
    "HEIC formatdagi rasmlarni JPG formatga o'tkazib berishim mumkin. Mutlaqo Tekinga!!! Hazillashdim, lavash evaziga. Yo'riqnoma: /help";
  ctx.reply(text);
});

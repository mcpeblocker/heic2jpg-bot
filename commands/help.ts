import bot from "../core/bot";

bot.command("help", (ctx) => {
  ctx.reply(
    "Xullas shunaqa shunaqa. Fayllarni yuborasiz ketma-ket, keyin /done buyruqini yuborsayiz barcha yuborgan fayllarizni convert qiberaman."
  );
});

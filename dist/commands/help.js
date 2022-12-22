"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("../core/bot"));
bot_1.default.command("help", (ctx) => {
    ctx.reply("Xullas shunaqa shunaqa. Fayllarni yuborasiz ketma-ket, keyin /done buyruqini yuborsayiz barcha yuborgan fayllarizni convert qiberaman.");
});

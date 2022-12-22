"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("../core/bot"));
bot_1.default.command("start", (ctx) => {
    const text = "HEIC formatdagi rasmlarni JPG formatga o'tkazib berishim mumkin. Mutlaqo Tekinga!!! Hazillashdim, lavash evaziga. Yo'riqnoma: /help";
    ctx.reply(text);
});

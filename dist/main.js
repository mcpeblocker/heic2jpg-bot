"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const files_1 = require("@grammyjs/files");
const bot_1 = __importDefault(require("./core/bot"));
bot_1.default.api.config.use((0, files_1.hydrateFiles)(bot_1.default.token));
bot_1.default.use((0, grammy_1.session)({
    initial() {
        return { files: ["test"] };
    },
}));
require("./commands");
bot_1.default.on(":document", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const file = yield ctx.getFile();
    const url = yield file.getUrl();
    ctx.session.files.push(url);
    ctx.reply("✔️ Fayl qabul qilindi.");
}));
bot_1.default.start({
    onStart: (botInfo) => {
        console.log(`@${botInfo.username} started!`);
    },
});

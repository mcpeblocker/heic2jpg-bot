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
const bot_1 = __importDefault(require("../core/bot"));
const convertapi_1 = __importDefault(require("convertapi"));
const config_1 = __importDefault(require("../utils/config"));
const api = new convertapi_1.default(config_1.default.secret);
bot_1.default.command("done", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    let { files } = ctx.session;
    files = files.slice(1, files.length);
    ctx.session.files = ["test"];
    if (files.length < 1) {
        ctx.reply("📭 Birontayam fayl yubormagansiz!");
    }
    ctx.reply("⏳ Fayllar JPG formatga o'tkazilmoqda...");
    for (let file of files) {
        const result = yield api.convert("jpg", { File: file }, "heic");
        ctx.replyWithDocument(result.file.url);
    }
    ctx.reply("✅ Barcha fayllar JPG formatga o'tkazildi.");
}));

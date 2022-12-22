"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const config_1 = __importDefault(require("../utils/config"));
if (!config_1.default.token)
    throw new Error("Token must be present as an environment variable!");
const bot = new grammy_1.Bot(config_1.default.token);
exports.default = bot;

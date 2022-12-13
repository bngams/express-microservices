"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const axios_1 = __importDefault(require("axios"));
class Controller {
    static getAnime(id) {
        return axios_1.default.get(`${process.env.ANIME_SERVICE}/${id}`);
    }
    static getManga(id) {
        return axios_1.default.get(`${process.env.MANGA_SERVICE}/${id}`);
    }
    static getAllAnime() {
        return axios_1.default.get(`${process.env.ANIME_API_ALL}`);
    }
    static getAllManga() {
        return axios_1.default.get(`${process.env.MANGA_API_ALL}`);
    }
}
exports.Controller = Controller;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Controller {
    static getAnimeCatalogue(id) {
        return axios_1.default.get(`${process.env.ANIME_CATALOG_SERVICE}/${id}`);
    }
    static getMangaCatalogue(id) {
        return axios_1.default.get(`${process.env.ANIME_CATALOG_SERVICE}/${id}`);
    }
    static getCatalogueAnime() {
        return axios_1.default.get(`${process.env.ALL_ANIME_CATALOG_SERVICE}`);
    }
    static getCatalogueManga() {
        return axios_1.default.get(`${process.env.ALL_ANIME_CATALOG_SERVICE}`);
    }
}
exports.Controller = Controller;

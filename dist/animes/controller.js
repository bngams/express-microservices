"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Controller {
    static getDetails(id) {
        return axios_1.default.get(`${process.env.ANIME_API_DETAILS}${id}`);
    }
}
exports.Controller = Controller;

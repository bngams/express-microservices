import axios, {AxiosResponse } from "axios";
 
export class Controller {
  static getAnime(id : string) : Promise<AxiosResponse> {
    return axios.get(`${process.env.ANIME_SERVICE}/${id}`)
  }
  static getManga(id : string) : Promise<AxiosResponse> {
    return axios.get(`${process.env.MANGA_SERVICE}/${id}`)
  }
  static getAllAnime() : Promise<AxiosResponse> {
    return axios.get(`${process.env.ANIME_API_ALL}`)
  }
  static getAllManga() : Promise<AxiosResponse> {
    return axios.get(`${process.env.MANGA_API_ALL}`)
  }
}

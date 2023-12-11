import axios, {AxiosResponse } from "axios";
 
export class Controller {

  static getAnimeCatalogue(id : string){
    return axios.get(`${process.env.ANIME_CATALOG_SERVICE}/${id}`) 
  }

  static getMangaCatalogue(id : string):Promise<AxiosResponse>{
    return axios.get(`${process.env.ANIME_CATALOG_SERVICE}/${id}`);
  }

  static getCatalogueAnime():Promise<AxiosResponse>{
    return axios.get(`${process.env.ALL_ANIME_CATALOG_SERVICE}`) 
  }

  static getCatalogueManga():Promise<AxiosResponse>{
    return axios.get(`${process.env.ALL_ANIME_CATALOG_SERVICE}`) 
  }

}

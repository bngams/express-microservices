
import axios, {AxiosResponse } from "axios";

export class Controller {

  static getDetails(id : string) : Promise<AxiosResponse> {
    return axios.get(`${process.env.ANIME_API_DETAILS}${id}`);
  }
}

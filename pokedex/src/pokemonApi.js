import axios from 'axios';

export class Api {
  static getPokemons(url) {
    return axios.get(url).then((response) => response.data);
  }
}

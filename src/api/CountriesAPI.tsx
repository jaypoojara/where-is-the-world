import axios from 'axios';

const BASE_URL = `https://restcountries.com/v3.1`

async function getCountry(url : string) {
    return axios.get(`${BASE_URL}${url}`);
  }

export default {
    getCountry
}
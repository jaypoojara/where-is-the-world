import axios from 'axios';

const BASE_URL = `https://restcountries.com/v3.1`

export default async function getCountry(url : string) {
    return axios.get(`${BASE_URL}${url}`);
}

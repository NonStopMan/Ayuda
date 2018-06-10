import axios from 'axios';
const ROOT_URL = 'http://localhost:57476/';
export const FETCH_BEERS = 'FETCH_BEERS';
export const READ_BEER = 'READ_BEER';


export function getBeers(params) {
    const url = `${ROOT_URL}/api/beers`;
    const request = axios.post(url, params);
    return {
        type: FETCH_BEERS,
        payload: request
    }
}
export function getBeer(beerId) {
    const url = `${ROOT_URL}/api/beer?id=${beerId}`;
    const request = axios.get(url);
    return {
        type: READ_BEER,
        payload: request
    }
}

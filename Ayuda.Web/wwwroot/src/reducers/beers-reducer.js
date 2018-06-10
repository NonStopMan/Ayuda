import { FETCH_BEERS, READ_BEER } from '../actions/index';


export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BEERS:
            return action.payload.data ? action.payload.data : null;
        case READ_BEER:
            return action.payload.data;
        default:
    }
    return state;
}
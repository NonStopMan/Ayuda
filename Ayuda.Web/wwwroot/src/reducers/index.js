import { combineReducers } from 'redux';
import BeersReducer from './beers-reducer';

const rootReducer = combineReducers({
    beers: BeersReducer  
});

export default rootReducer;

import gifSearch from './gifSearch';
import collection from './collection';
import user from './user';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ collection, gifSearch, user })
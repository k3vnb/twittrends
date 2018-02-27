import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer';

const rootReducer = combineReducers({
  tweet: tweetReducer
});

export default rootReducer;

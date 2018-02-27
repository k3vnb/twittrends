import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer';

const rootReducer = combineReducers({
  currentTweetId: tweetReducer,
  tweetsById: tweetReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer';
import tweetDisplayReducer from './tweetDisplayReducer';

const rootReducer = combineReducers({
  currentTweetId: tweetReducer,
  tweetsById: tweetReducer,
  trending: tweetDisplayReducer
});

export default rootReducer;

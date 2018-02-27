
import * as types from './../constants/ActionTypes';


export const requestTweet = (currentTweetId) => ({
  type: types.REQUEST_TWEET,
  currentTweetId
});

export function fetchResults(currentTweetId){
  return function (dispatch){
    dispatch(requestTweet(currentTweetId));
    console.log('bim');
  };
}

import * as types from './../constants/ActionTypes';

export const receiveTweet = (tweetArray) => ({
  type: types.RECEIVE_TWEET,
  tweetArray
});

export function fetchResults(){
  return function (dispatch){
    // dispatch(requestTweet(currentTweetId));
    return fetch('https://api.twitter.com/1.1/trends/place.json?id=2475687&oauth_consumer_key=VDtPhz4zEg9kRO8mSWHRL47Ct&oauth_token=968260387345907712-LUwCOpqKgcCybwE4OIk4yLejRgkXbKZ&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1519758411&oauth_nonce=SPSbZhnc9Ox&oauth_version=1.0&oauth_signature=boklMV939loOxNWaXpJVE8NmnWI%3D')
      .then( response => response.json(), error => console.log('An error occurred.', error)
      ).then(function(json) {
        const tweetArray = [];
        for (let i = 0; i < 50; i++){
          tweetArray.push(json[0].trends[i].name);
        }
        dispatch({type: types.RECEIVE_TWEET, payload: tweetArray});
        console.log(tweetArray);
      });
  };
}

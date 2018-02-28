import constants from './../constants';
const { initialState, types } = constants;

export default function tweetDisplayReducer(state=initialState, action){
  let newTwends;
  switch (action.type) {
  case types.RECEIVE_TWEET:
    newTwends = Object.assign({}, state, {
      trending : action.payload
    });
    return newTwends;
  default:
    return state;
  }
}

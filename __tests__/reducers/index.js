import constants from './../../src/constants';
import * as actions from './../../src/actions';
import { createStore } from 'redux';
import rootReducer from './../../src/reducers/';
import tweetReducer from './../../src/reducers/tweetReducer';

/*eslint-disable */
describe('Twends App', () => {
  const { initialState } = constants;
  const store = createStore(rootReducer, initialState);

  it('Should accept and return initial state.', () => {
    expect(tweetReducer(initialState, { type: null })).toEqual(initialState);
  });



});
/*eslint-enable */

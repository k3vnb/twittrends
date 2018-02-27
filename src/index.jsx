import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import middlewareLogger from './middleware/middleware-logger';

const initialState = {
  tweets: [],
  tags: {}
};

const store = createStore( applyMiddleware(thunkMiddleware));

const tweetReducer = (state = initialState, action) => {

  return;
};

store.dispatch({ type: payload });

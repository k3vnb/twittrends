import React from 'react';
import { connect } from 'react-redux';
import { fetchResults } from './../actions';
import PropTypes from 'prop-types';

function Twits({ dispatch }){

  return(
    <div onClick={e => {
      e.preventDefault();
      console.log('clickedy');
      dispatch(fetchResults());
    }}>
      Twits
    </div>
  );
}


Twits.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Twits);

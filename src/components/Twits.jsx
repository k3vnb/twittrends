import React from 'react';
import { connect } from 'react-redux';
import { fetchResults } from './../actions';
import PropTypes from 'prop-types';

class Twits extends React.Component{
  render() {
    return(
      <div onClick={ () => {this.handleButtonClick();} }>

        Twits
      </div>
    );
  }

  handleButtonClick() {
    console.log('thus');
    this.props.dispatch(fetchResults());

  }

}

Twits.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    trending: state.trending
  };
};

export default connect(mapStateToProps)(Twits);

import React from 'react';
import { connect } from 'react-redux';
import { toggleDetails } from '../actions';
import Palestrantes from '../components/Palestrantes';


const mapStateToProps = (state) => {
  return {
    palestrantes: state.sections.palestrantes
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleDetails: (index, event) =>{
      dispatch(toggleDetails(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Palestrantes);

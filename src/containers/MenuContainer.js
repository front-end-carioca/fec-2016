import React from 'react';
import { connect } from 'react-redux';
import { selectSection, toggleDetails } from '../actions';
import fecSettings from '../fecSettings.json';
import Menu from '../components/Menu';


const mapStateToProps = (state) => {
  return {
    items: state.sections.items
  };
}

export default connect(mapStateToProps)(Menu);

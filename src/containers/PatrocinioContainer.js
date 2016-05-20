import React from 'react';
import { connect } from 'react-redux';
import { selectSection, toggleDetails } from '../actions';
import fecSettings from '../fecSettings.json';
import Patrocinio from '../components/Patrocinio';

const mapStateToProps = (state) => {
  return {
    patrocinadores: state.sections.patrocinadores
  };
}

export default connect(mapStateToProps)(Patrocinio);

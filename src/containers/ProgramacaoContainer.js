import React from 'react';
import { connect } from 'react-redux';
import { selectSection, toggleDetails } from '../actions';
import fecSettings from '../fecSettings.json';
import Programacao from '../components/Programacao';

const mapStateToProps = (state) => {
  return {
    programacao: state.sections.programacao
  };
}

export default connect(mapStateToProps)(Programacao);

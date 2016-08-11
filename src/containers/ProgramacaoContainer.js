import React from 'react';
import { connect } from 'react-redux';
import Programacao from '../components/Programacao';

const mapStateToProps = (state) => {
  return {
    programacao: state.sections.programacao
  };
}

export default connect(mapStateToProps)(Programacao);

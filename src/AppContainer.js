import React from 'react';
import { connect } from 'react-redux';
import { selectSection } from './actions';
import fecSettings from './fecSettings.json';
import App from './components/App';


const mapStateToProps = (state) => {
  return {
    sectionSelected: state.sections.sectionSelected,
    items: state.sections.items,
    sections: state.sections.sections,
    patrocinadores: state.sections.patrocinadores,
    palestrantes: state.sections.palestrantes,
    programacao: state.sections.programacao
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: (name,event) => {
      dispatch(selectSection(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

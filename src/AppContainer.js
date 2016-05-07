import React from 'react';
import { connect } from 'react-redux';
import { selectSection, unselectAllSections } from './actions';
import fecSettings from 'json!./fecSettings.json';
import App from './components/App';


const mapStateToProps = (state) => {
  return {
    sectionSelected: state.sections.sectionSelected,
    items: state.sections.items,
    palestrantes: state.sections.palestrantes
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: (name,event) => {
      dispatch(selectSection(name))
    },

    onUnselectAll: (name,event) => {
      dispatch(unselectAllSections())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

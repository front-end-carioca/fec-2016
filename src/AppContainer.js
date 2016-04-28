import React from 'react';
import { connect } from 'react-redux';
import { selectSection, unselectAllSections } from './actions';
import fecSettings from 'json!./fecSettings.json';
import App from './components/App';


const mapStateToProps = (state) => {
  return {
    sectionSelected: 'home',
    items: state.sections.items
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('ownProps', ownProps);
  return {
    onSelectSection: (name,event) => {
      dispatch(selectSection(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

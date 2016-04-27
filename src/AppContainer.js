import React from 'react';
import { connect } from 'react-redux';
import { selectSection, unselectAllSections } from './actions';
import fecSettings from 'json!./fecSettings.json';
import App from './components/App';


const mapStateToProps = (state) => {
  return { items: state.items };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    onSelectSection: () => {
      dispatch(selectSection(ownProps.name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

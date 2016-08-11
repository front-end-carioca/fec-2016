import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';


const mapStateToProps = (state) => {
  return {
    items: state.sections.items
  };
}

export default connect(mapStateToProps)(Menu);

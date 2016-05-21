import React from 'react';
import { connect } from 'react-redux';
import GuiaDeSobrevivencia from '../components/Guia-de-Sobrevivencia';

const mapStateToProps = ({sections}) => {
  return {
    guia: sections.guia
  }
}

export default connect(mapStateToProps)(GuiaDeSobrevivencia);

import React from 'react';
import { connect } from 'react-redux';
import { selectSection, toggleDetails } from '../actions';
import fecSettings from '../fecSettings.json';
import GuiaDeSobrevivencia from '../components/Guia-de-Sobrevivencia';

export default connect()(GuiaDeSobrevivencia);

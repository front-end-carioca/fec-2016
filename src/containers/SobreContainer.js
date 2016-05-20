import React from 'react';
import { connect } from 'react-redux';
import { selectSection, toggleDetails } from '../actions';
import fecSettings from '../fecSettings.json';
import Sobre from '../components/Sobre';

export default connect()(Sobre);

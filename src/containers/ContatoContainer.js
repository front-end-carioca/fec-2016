import React from 'react';
import { connect } from 'react-redux';
import { selectSection, toggleDetails } from '../actions';
import fecSettings from '../fecSettings.json';
import Contato from '../components/Contato';

export default connect()(Contato);

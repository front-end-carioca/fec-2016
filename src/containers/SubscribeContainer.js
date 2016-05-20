import React from 'react';
import { connect } from 'react-redux';
import { selectSection, toggleDetails } from '../actions';
import fecSettings from '../fecSettings.json';
import Subscribe from '../components/Subscribe';

export default connect()(Subscribe);

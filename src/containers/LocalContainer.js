import React from 'react';
import { connect } from 'react-redux';
import { selectSection, toggleDetails } from '../actions';
import fecSettings from '../fecSettings.json';
import Local from '../components/Local';

export default connect()(Local);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'));
}

module.exports = App;
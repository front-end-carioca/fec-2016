
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from 'json!./fecSettings.json';

if (typeof document !== 'undefined') {
  ReactDOM.render(<App {...config} />, document.getElementById('app'));
}

module.exports = () => {
  const AppFactory = React.createFactory(App);

  return AppFactory(config);
};
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import store from './Store';

if(process.env.NODE_ENV !== 'production') {
  if(typeof window !== 'undefined') {
    window.store = store;

    const script = document.createElement('script');
    script.src = '//127.0.0.1:8081/livereload.js';
    document.body.appendChild(script);
  }
}

const ProviderApp = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

if (typeof document !== 'undefined') {
  render(ProviderApp(), document.getElementById('app'));
}


module.exports = () => React.createFactory(ProviderApp)();

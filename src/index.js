
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import store from './Store';


const ProviderApp = () => <Provider store={store}>
    <AppContainer />
  </Provider>;

if (typeof document !== 'undefined') {
  render( ProviderApp(),
    document.getElementById('app')
  );
}

module.exports = () => {
  const AppFactory = React.createFactory(ProviderApp);
  return AppFactory();
};
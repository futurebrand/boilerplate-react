import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Main from 'layouts/main';
import configureStore from 'store';

import '../config/reactotron';
import 'babel-polyfill';
import 'promise-polyfill/src/polyfill';

const store = configureStore();

function App() {
  // console.log(process.env.config);
  // console.log(process.env.NODE_ENV);

  return (
    <AppContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </AppContainer>
  );
}

const rootElement = document.getElementById('main');
ReactDOM.render(<App />, rootElement);

if (module.hot) {
  module.hot.accept('./layouts/main', () => {
    render();
  });
}

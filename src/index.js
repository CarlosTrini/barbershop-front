import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/globals.scss';
import './styles/util/normalize.scss';
import './styles/util/utilities.scss';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
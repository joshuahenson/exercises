/* global window document */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
    reducers,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )}
  >
    <App />
  </Provider>,
 document.getElementById('root')
);

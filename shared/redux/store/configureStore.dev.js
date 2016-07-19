import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from '../../containers/DevTools/DevTools';
// TODO - UPDATE PROD
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';

export function configureStore(history, initialState = {}) {
  let enhancerClient;
  if (process.env.CLIENT) {
    enhancerClient = compose(
      applyMiddleware(thunk, routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
    );
  }


  const enhancerServer = applyMiddleware(thunk, routerMiddleware(history));

  let store;

  if (process.env.CLIENT) {
    store = createStore(rootReducer, initialState, enhancerClient);
  } else {
    store = createStore(rootReducer, initialState, enhancerServer);
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextReducer = require('../reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

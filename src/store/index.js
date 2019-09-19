import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from 'store/enhancers/monitorReducer';
import loggerMiddleware from 'store/middlewares/logger';
import rootReducers from './modules/rootReducers';

export default function configureStore(preloadedState) {
  const middlewares = [ loggerMiddleware, thunkMiddleware ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [ middlewareEnhancer, monitorReducersEnhancer ];
  const composedEnhancers = compose( console.tron.createEnhancer(), composeWithDevTools(...enhancers));

  const store = createStore(rootReducers, preloadedState, composedEnhancers);

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./modules', () => store.replaceReducer(rootReducers));
  // }

  return store;
}

// import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  compose(
    // applyMiddleware(thunk),
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

store.subscribe(() => { saveState(store.getState()); });

export default store;

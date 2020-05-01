import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer/main';

const middlewares = applyMiddleware(reduxLogger, reduxThunk);

const store = createStore(
  rootReducer,
  middlewares
);

export default store;
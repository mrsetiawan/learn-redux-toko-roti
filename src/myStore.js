import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import myReducer from './reducer/myReducer';

const middleware = applyMiddleware(reduxLogger);

const myStore = createStore(
  myReducer,
  middleware
);

export default myStore;
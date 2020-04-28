import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/main'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'

const middlewares = applyMiddleware(reduxLogger, reduxThunk)

const store = createStore(
  rootReducer, 
  middlewares,
);

export default store;
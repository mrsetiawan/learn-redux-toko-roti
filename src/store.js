import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/main'
import reduxLogger from 'redux-logger'

const middlewares = applyMiddleware(reduxLogger)

const store = createStore(rootReducer, middlewares);

export default store;
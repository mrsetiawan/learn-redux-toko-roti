import { createStore, applyMiddleware } from 'redux'
import myReducer from './reducer/myReducer'
import reduxLogger from 'redux-logger'

const middleware = applyMiddleware(reduxLogger)

const myStore = createStore(
  myReducer,
  middleware
)

export default myStore
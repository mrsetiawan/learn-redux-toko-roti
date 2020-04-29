import { combineReducers } from 'redux'
import donatCakeReducer from '../reducer/donatCakeReducer'

const myReducer = combineReducers({
  donatcake: donatCakeReducer
})

export default myReducer
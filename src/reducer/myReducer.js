import { combineReducers } from 'redux'
import bahanDonutCakeReducer from '../reducer/bahanDonutCakeReducer'
import cartReducer from '../reducer/cartReducer'
import donatCakeReducer from '../reducer/donatCakeReducer'

const myReducer = combineReducers({
  bahan: bahanDonutCakeReducer,
  donatcake:donatCakeReducer,
  cart: cartReducer
})

export default myReducer
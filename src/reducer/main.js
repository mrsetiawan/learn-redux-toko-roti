import { combineReducers } from 'redux'
import bahanReducer from './bahanReducer'
import kasReducer from './kasReducer'
import kasirReducer from './kasirReducer'

//combineReducers untuk menggabungkan semua state awal 
const rootReducer = combineReducers({
  bahan: bahanReducer,
  kas: kasReducer,
  kasir: kasirReducer
})

export default rootReducer;
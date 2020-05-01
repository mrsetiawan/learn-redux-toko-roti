import { combineReducers } from 'redux';
import bahanDonutCakeReducer from './bahanDonutCakeReducer';
import cartReducer from './cartReducer';
import donatCakeReducer from './donatCakeReducer';

const myReducer = combineReducers({
  bahan: bahanDonutCakeReducer,
  donatcake: donatCakeReducer,
  cart: cartReducer
});

export default myReducer;
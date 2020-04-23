import { createStore } from 'redux'; 

const state = {
  tepung: 100,
  coklat: 100,
  cherry: 50
};

const store = createStore(() => state);

export default store;
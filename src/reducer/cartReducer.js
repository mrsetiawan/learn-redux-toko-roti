const initialState = {
  harga: 0
}

const cartReducer = (state = initialState, action) => {

  if (action.type === 'ACTION_DONAT') {

    const newState = {
      harga: state.harga + 1000
    }

    return newState
    
  } else if (action.type === 'ACTION_CAKE') {

    const newState = {
      harga: state.harga + 2000
    }

    return newState;

  } else {
    return state;
  }

}

export default cartReducer
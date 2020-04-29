const initialState = {
  harga: 0
}

const cartReducer = (state = initialState, action) => {

  if (action.type === 'DONAT_CAKE') {
    const newState = {
      harga: state.harga + 1000
    }
    return newState
  }

  return state
}

export default cartReducer
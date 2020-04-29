const intialState = {
  donat: 0,
  cake: 0
}

const donatCakeReducer = (state = intialState, action) => {

  if (action.type === 'DONAT_CAKE') {
    
    const newState = {
      donat: state.donat + 1,
      cake: state.cake
    }

    return newState
  }

  return state
}

export default donatCakeReducer
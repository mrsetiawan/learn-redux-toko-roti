const initialState = {
  tepung: 100,
  coklat: 100,
  keju: 30
}

const bahanDonutCakeReducer = (state = initialState, action) => {

  if (action.type === 'DONAT_CAKE') {
    const newState = {
      tepung: state.tepung - 1,
      coklat: state.coklat - 1,
      keju: state.keju
    }

    return newState
  }

  return state
}

export default bahanDonutCakeReducer
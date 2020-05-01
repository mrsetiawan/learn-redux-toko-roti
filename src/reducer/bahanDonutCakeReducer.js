const initialState = {
  tepung: 100,
  coklat: 100,
  keju: 30
};

const bahanDonutCakeReducer = (state = initialState, action) => {
  if (action.type === 'ACTION_DONAT') {
    const newState = {
      tepung: state.tepung - 1,
      coklat: state.coklat - 1,
      keju: state.keju
    };

    return newState;
  } if (action.type === 'ACTION_CAKE') {
    const newState = {
      tepung: state.tepung - 1,
      coklat: state.coklat,
      keju: state.keju - 1
    };

    return newState;
  }

  return state;
};

export default bahanDonutCakeReducer;
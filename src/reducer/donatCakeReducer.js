const intialState = {
  donat: 0,
  cake: 0
};

const donatCakeReducer = (state = intialState, action) => {
  if (action.type === 'ACTION_DONAT') {
    const newState = {
      donat: state.donat + 1,
      cake: state.cake
    };
    return newState;
  } if (action.type == 'ACTION_CAKE') {
    const newState = {
      donat: state.donat,
      cake: state.cake + 1
    };
    return newState;
  }

  return state;
};

export default donatCakeReducer;
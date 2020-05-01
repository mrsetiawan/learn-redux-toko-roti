const intialState = {
  kas: 0
};

const kasReducer = (state = intialState, action) => {
  if (action.type = 'BUAT_KAS_ACTION') {
    const newState = {
      kas: state.kas + 5000
    };

    return newState;
  }

  return state;
};

export default kasReducer;
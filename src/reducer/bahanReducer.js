//contoh initial state dengan kata lain membuat store
const initialStateBahan = {
  tepung: 100,
  coklat: 100,
  cherry: 50
}

//contoh reducer yang akan menerima 2 parameter yaitu (state,action)
const bahanReducer = (state = initialStateBahan, action) => {

  if (action.type = 'BUAT_DONAT_COKLAT') {

    const newState = {
      tepung: state.tepung - 20,
      coklat: state.coklat - 15,
      cherry: state.cherry - 5
    }

    return newState;
  }

  return state;
}

export default bahanReducer;
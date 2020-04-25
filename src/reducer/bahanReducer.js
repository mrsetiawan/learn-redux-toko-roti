//contoh initial state dengan kata lain membuat store
const initialStateBahan = {
  tepung: 100,
  coklat: 100,
  donat: 0,
  cake: 0
}

//contoh reducer yang akan menerima 2 parameter yaitu (state,action) atau bisa disebut fungsi yg menerima state lama dan mengembalikan state baru
const bahanReducer = (state = initialStateBahan, action) => {
  if (action.type = 'BUAT_DONAT_COKLAT') {

    const newState = {
      tepung: state.tepung - 1,
      coklat: state.coklat - 1,
      donat: state.donat + 1,
    }

    return newState;

  } else {

    return state;

  }

}

export default bahanReducer;
const initialState = [];

const getCustomerReducer = (state = initialState, action) => {

  if (action.type = 'GET_DATA_CUSTOMER') {

    const newState = {
      data: action.customers
    }

    return newState
  }

  return state
}

export default getCustomerReducer
import axios from 'axios'

const getCustomer = (customers) => {
  return (dispatch) => {
    axios.get('http://localhost:1212/costumer')
      .then((response) => {
        return dispatch({
          type: 'GET_DATA_CUSTOMER',
          customers: response.data
        })
      })
  }
}

export default getCustomer
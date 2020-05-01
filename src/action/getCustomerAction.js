import axios from 'axios';

const getCustomer = (customers) => (dispatch) => {
  axios.get('http://localhost:1212/costumer')
    .then((response) => dispatch({
      type: 'GET_DATA_CUSTOMER',
      customers: response.data
    }));
};

export default getCustomer;
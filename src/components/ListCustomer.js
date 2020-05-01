import React, { Component } from 'react';
import { connect } from 'react-redux';
import getDataCustomer from '../action/getCustomerAction';

class ListCustomer extends Component {
  componentDidMount() {
    console.log(this.props.dataCustomer());
  }

  render() {
    return (
      <>
        <div className="wrap-first-section">
          <h3>List Customer</h3>
        </div>
        <div className="container">
          <div className="header">
            <ul>
              {/* {customer.map((nama) => <li key={nama.id}>{nama.name}</li>)} */}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  customer: state.customer
});

const mapDispatchToProps = (dispatch) => ({
  dataCustomer: () => dispatch(getDataCustomer())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCustomer);
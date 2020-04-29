import React from 'react';
import PropTypes from 'prop-types';

function Cart({ harga }) {
  return (
    <div className='wrap-first-section'>
      <p>Kasir : kasir name</p>
      <p>🍩 &nbsp; 🍰 &nbsp; 🛒 &nbsp;</p>
      <p>Cart : {harga}</p>
    </div>
  )
}

Cart.propTypes = {
  harga: PropTypes.number.isRequired,
  kasir: PropTypes.string.isRequired
}

Cart.defaultProps = {
  harga:0,
  kasir: "Mr Setiawan"
}

export default Cart;

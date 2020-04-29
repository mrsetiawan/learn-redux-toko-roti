import React from 'react';
import PropTypes from 'prop-types';

function DonutAndCake({ donat, cake }) {
  return (
    <div className='section-top'>
      <span role='img' aria-label='donuts'>🍩</span> {donat} Donat &nbsp;&nbsp;<span role='img' aria-label='cake'>🍰</span> {cake} Cake
    </div>
  )
}

DonutAndCake.propTypes = {
  donut: PropTypes.number.isRequired,
  cake: PropTypes.number.isRequired
}

DonutAndCake.defaultProps = {
  donut: 0,
  cake: 0
}

export default DonutAndCake;

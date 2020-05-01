import React from 'react';
import PropTypes from 'prop-types';

const Bahan = ({ coklat, keju, tepung }) => (
  <div className="header">
    <button>
      Tepung
      {tepung}
    </button>
    <button>
      Cokelat
      {coklat}
    </button>
    <button>
      Keju
      {keju}
    </button>
  </div>
);

Bahan.propTypes = {
  coklat: PropTypes.number.isRequired,
  keju: PropTypes.number.isRequired,
  tepung: PropTypes.number.isRequired
};

Bahan.defaultProps = {
  coklat: 100,
  keju: 30,
  tepung: 100
};

export default Bahan;

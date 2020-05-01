import React from 'react';

function AddCakeDonut(props) {
  console.log(props);
  return (
    <>
      <div className="section-bottom">
        <span role="img" aria-label="donuts">🍩</span>
        <h3>Buat 1 Donat</h3>
      </div>
      <div className="section-bottom">
        <span role="img" aria-label="cake">🍰</span>
        <h3>Buat 1 Cake</h3>
      </div>
      <div className="section-bottom">
        <span role="img" aria-label="cart">🛒</span>
        <h3>Isi Ulang Bahan</h3>
      </div>
    </>
  );
}

export default AddCakeDonut;

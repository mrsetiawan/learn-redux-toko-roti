import React from 'react';

const TestComponent = ({ myObj, harga }) => (
  <>
    <p>
      {' '}
      nama saya adalah :
      {myObj.nama}
      {' '}

    </p>
    <p>
      hobi adalah :
      {myObj.hobi}
    </p>
    <p>
      harga :
      {harga}
    </p>
  </>
);

export default TestComponent;
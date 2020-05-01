import React from 'react';
import ReactDom from 'react-dom';
import Cart from './Cart.js';

test("Renders cart component" ,() => {
  const wrapper = document.createElement('div');
  ReactDom.render(<Cart harga={harga:harga}}/>, wrapper);

  expect(wrapper).toBeDefined();
});
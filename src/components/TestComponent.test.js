import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent.js';

test('Render TestComponent component', () => {
  const container = document.createElement('div');
  ReactDOM.render(<TestComponent myObj={{ nama: 'tes nama', hobi: 'tes hobi' }} />, container);

  expect(container).toBeDefined();
});

test('Render name into TestComponent', () => {
  const wrapper = document.createElement('div');
  ReactDOM.render(<TestComponent myObj={{ nama: 'tes nama', hobi: 'tes hobi' }} />, wrapper);

  expect(wrapper.textContent).toMatch('tes hobi');
});

test('muhamad rahmat setiawan', () => {
  expect('muhamad').toMatch(/muhamad/);
});
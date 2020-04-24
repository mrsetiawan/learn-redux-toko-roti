import React, { Component } from 'react'
import store from './store';
import { buatKasAction } from './action/buatKasAction';
import { buatkasirAction } from './action/buatKasirAction';
import { buatDonatAction } from './action/buatDonatAction'
import './App.css';
 
export default class App extends Component {

  render() {
    // 🍩 &nbsp; 🍰 &nbsp; 🛒 &nbsp; 🍩
    const { bahan,kasir,kas } = store.getState();
    store.dispatch(buatDonatAction)

    return (
      <div className='container'>
        <div className='header'>
          <span role='img' aria-label='cake'>🍰</span>
          <h3>Toko Roti Vzlooks</h3>
        </div>
        <div className='section-top'>
          <span role='img' aria-label='donuts'>🍩</span> 0 Donat &nbsp;&nbsp;  <span role='img' aria-label='cake'>🍰</span> 0 Cake
        </div>
        <div className='header'>
          <button>Tepung {bahan.tepung}</button>
          <button>Cokelat {bahan.coklat}</button>
          <button>Cherry {bahan.cherry}</button>
        </div>
        <div className='section-bottom'>
          <span role='img' aria-label='donuts'>🍩</span>
          <h3>Buat 1 Donat</h3>
        </div>
        <div className='section-bottom'>
          <span role='img' aria-label='cake'>🍰</span>
          <h3>Buat 1 Cake</h3>
        </div>
        <div className='section-bottom'>
          <span role='img' aria-label='cart'>🛒</span>
          <h3>Isi Ulang Bahan</h3>
        </div>
        <div className='section-top'>
          <p>Kasir : {kasir.nama}</p>
          <p>Saldo : {kas.kas}</p>
        </div>
      </div>
    )
  }
}

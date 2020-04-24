import React, { Component } from 'react'
import './App.css';
import store from './store';
import { buatDonatAction } from './action/buatDonatAction';
import { buatKasAction } from './action/buatKasAction';
import { buatkasirAction } from './action/buatKasirAction';
 
export default class App extends Component {

  render() {

    // console.log(store.getState());

    const { bahan, kas, kasir } = store.getState();
    //untuk merubah state melalui action 
    store.dispatch(buatDonatAction)
    // store.dispatch(buatKasAction)
    // store.dispatch(buatkasirAction)
    // console.log(store.getState())
    // 🍩 &nbsp; 🍰 &nbsp; 🛒 &nbsp; 🍩
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
      </div>
    )
  }
}

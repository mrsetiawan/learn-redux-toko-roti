import React, { Component } from 'react'
import './App.css';
import store from './store';
import styled from 'styled-components';

export default class App extends Component {

  render() {

    // const Container = styled.div`
    //   display: flex;
    //   flex-flow: row wrap;
    //   width: 900px;
    //   height:auto;
    //   margin: 50px auto;
    //   box-sizing: border-box;
    //   justify-content: center;
    //   border:1px solid white;
    //   padding: 15px;
    // `
    // 🍩 &nbsp; 🍰 &nbsp; 🛒 &nbsp; 🍩
    return (
      <div className='container'>
        <div className='header'>
          <h1>🍰</h1>
          <h3>Toko Roti Vzlooks</h3>
        </div>
        <div className='section-top'>
          <p> 🍩 0 Donat &nbsp;&nbsp;  🍰 0 Cake</p>
        </div>
        <div className='header'>
          <button>Tepung 100</button>
          <button>Cokelat 100</button>
          <button>Cherry 50</button>
        </div>
        <div className='section-bottom'>
          <h3>🍩</h3>
          <h3>Buat 1 Donat</h3>
        </div>
        <div className='section-bottom'>
          <h3>🍰</h3>
          <h3>Buat 1 Cake</h3>
        </div>
        <div className='section-bottom'>
          <h3>🛒</h3>
          <h3>Isi Ulang Bahan</h3>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { buatKasAction } from './action/buatKasAction'
import { buatkasirAction } from './action/buatKasirAction'
import { buatDonatAction } from './action/buatDonatAction'
import './App.css';
import { dispatch } from 'C:/Users/myblo/AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs';

class App extends Component {

  render() {

    const { bahan } = this.props;

    return (
      <>
        <div className='wrap-first-section'>
          <p>Kasir : </p>
          <p>🍩 &nbsp; 🍰 &nbsp; 🛒 &nbsp;</p>
          <p>Saldo : </p>
        </div>
        <div className='container'>
          <div className='header'>
            <span role='img' aria-label='cake'>🍰</span>
            <h3>Toko Roti Vzlooks</h3>
          </div>
          <div className='section-top'>
            <span role='img' aria-label='donuts'>🍩</span> {bahan.donat} Donat &nbsp;&nbsp;  <span role='img' aria-label='cake'>🍰</span> 0 Cake
          </div>
          <div className='header'>
            <button>Tepung {bahan.tepung}</button>
            <button>Cokelat {bahan.coklat}</button>
            <button>Cherry 100</button>
          </div>
          <div className='section-bottom' onClick={this.props.buatDonat}>
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
      </>
    )
  }
}

//mengubah state yang ada di redux ke props component di react
const mapStateToProps = (state) => {
  return {
    bahan: state.bahan
  }
}
//untuk merubah method/dispatch di redux menjadi props di component react
const mapDispatchtoProps = (dispatch) => {

  return {
    buatDonat: () => dispatch(buatDonatAction)
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);
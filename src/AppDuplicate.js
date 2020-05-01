import React, { Component } from 'react';
import store from './store';
import { buatKasAction } from './action/buatKasAction';
import { buatkasirAction } from './action/buatKasirAction';
import { buatDonatAction } from './action/buatDonatAction';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tepung: 0,
      coklat: 0,
      cherry: 0,
      donat: 0,
      kasir: 'Kasir default',
      kas: 0
    };
  }

  componentDidMount() {
    const reduxState = store.getState();

    const { bahan } = reduxState;
    const { kasir } = reduxState;
    const { kas } = reduxState;

    this.setState({
      tepung: bahan.tepung,
      coklat: bahan.coklat,
      cherry: bahan.cherry,
      donat: bahan.donat,
      kasir: kasir.nama,
      kas: kas.kas
    });

    store.subscribe(() => {
      const updateStateFromRedux = store.getState().bahan;
      const updateStateKasFromRedux = store.getState().kas;

      this.setState({
        tepung: updateStateFromRedux.tepung,
        coklat: updateStateFromRedux.coklat,
        cherry: updateStateFromRedux.cherry,
        donat: updateStateFromRedux.donat,
        kas: updateStateKasFromRedux.kas
      });
    });
  }

  handleBuatDonat = () => {
    // dispatch berfungsi untuk memberi tahu jika state akan dirubah sesuai parameter / action yang dikirim
    // store.dispatch(buatKasAction)
    store.dispatch(buatDonatAction);
  }

  render() {
    const {
      tepung,
      coklat,
      cherry,
      donat,
      kas,
      kasir
    } = this.state;

    return (
      <>
        <div className="wrap-first-section">
          <p>
            Kasir :
            {kasir}
          </p>
          <p>🍩 &nbsp; 🍰 &nbsp; 🛒 &nbsp;</p>
          <p>
            Saldo :
            {kas}
          </p>
        </div>
        <div className="container">
          <div className="header">
            <span role="img" aria-label="cake">🍰</span>
            <h3>Toko Roti Vzlooks</h3>
          </div>
          <div className="section-top">
            <span role="img" aria-label="donuts">🍩</span>
            {' '}
            {donat}
            {' '}
            Donat &nbsp;&nbsp;
            {' '}
            <span role="img" aria-label="cake">🍰</span>
            {' '}
            0 Cake
          </div>
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
              Cherry
              {cherry}
            </button>
          </div>
          <div className="section-bottom" onClick={this.handleBuatDonat}>
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
        </div>
      </>
    );
  }
}

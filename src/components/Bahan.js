import React, { Component } from 'react'

import store from '../store'

export default class Bahan extends Component {
  
  render() {

    const { bahan } = store.getState();

    return (
      <div className='header'>
        <button>Tepung {bahan.tepung}</button>
        <button>Cokelat {bahan.coklat}</button>
        <button>Cherry {bahan.cherry}</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import store from '../store'

class Header extends Component {
  render() {

    return (
      <>
        <div className='header'>
          <span role='img' aria-label='cake'>🍰</span>
          <h3>Toko Roti Vzlooks</h3>
        </div>
        <div className='section-top'>
          <span role='img' aria-label='donuts'>🍩</span> 0 Donat &nbsp;&nbsp;  <span role='img' aria-label='cake'>🍰</span> 0 Cake
        </div>
      </>
    )
  }
}

export default Header

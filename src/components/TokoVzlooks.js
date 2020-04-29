import React, { Component } from 'react'
import { connect } from 'react-redux'
import DonutAndCake from './DonutAndCake'
import Bahan from './Bahan'
import Cart from './Cart'
//action
import { donatCakeAction } from '../action/donatCakeAction'

class TokoVzlooks  extends Component {

  render() {

    const { tepung, coklat, keju } = this.props.bahan
    const { harga } = this.props.cart
    const { donat, cake } = this.props.donatcake

    return (
      <>
        <Cart harga={harga} />
        
        <div className='container'>
          <div className='header'>
            <span role='img' aria-label='cake'>🍰</span>
            <h3>Toko Roti Vzlooks</h3>
          </div>

          <DonutAndCake donat={donat} cake={cake} />
          <Bahan coklat={coklat} keju={keju} tepung={tepung} />

          <div className='section-bottom' onClick={this.props.buatdonat}>
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

const mapStateToProps = (state) => {
  return {
    bahan: state.bahan,
    donatcake: state.donatcake,
    cart: state.cart
  };
}

const mapDispatchToProps = dispatch => {
  return {
    buatdonat: () => dispatch(donatCakeAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TokoVzlooks);
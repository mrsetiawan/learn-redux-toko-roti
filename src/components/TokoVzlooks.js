import React, { Component } from 'react'
import { connect } from 'react-redux'
import DonutAndCake from './DonutAndCake'
import AddCakeDonut from './AddCakeDonut'
import Bahan from './Bahan'
import Cart from './Cart'

class App extends Component {

  render() {

    const { coklat, keju, tepung } = this.props.donatcake
    return (
      <>
        <Cart />
        <div className='container'>
          <div className='header'>
            <span role='img' aria-label='cake'>🍰</span>
            <h3>Toko Roti Vzlooks</h3>
          </div>
          <DonutAndCake />
          <Bahan 
            coklat={coklat}
            keju={keju}
            tepung={tepung}
          />
          <AddCakeDonut />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    donatcake: state.donatcake
  }
}

export default connect(mapStateToProps, null)(App);
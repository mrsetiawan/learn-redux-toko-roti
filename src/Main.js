import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import './App.css';


class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    )
  }
}

export default Main

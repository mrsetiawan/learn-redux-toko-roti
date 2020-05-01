import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ListCustomer from './components/ListCustomer';
import TokoVzlooks from './components/TokoVzlooks';
import App from './App';
import './App.css';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/list" component={ListCustomer} />
        <Route path="/toko" component={TokoVzlooks} />
      </Switch>
    );
  }
}

export default Main;

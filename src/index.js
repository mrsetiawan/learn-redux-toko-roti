import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import myStore from './myStore'
import './index.css';
import Main from './Main';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Provider store={store}> */}
      <Provider store={myStore}>
        <Main />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

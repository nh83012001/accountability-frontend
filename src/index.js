import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // for routes
import { createStore, applyMiddleware } from 'redux'; // store for redux state, middleware for async ajax requests
import { Provider } from 'react-redux'; // lets react have access to redux store
import thunk from 'redux-thunk'; // middleware for async ajax requests

import rootReducer from './reducers/index'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

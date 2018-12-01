import React from 'react';
import ReactDOM from "react-dom";
import Router from 'react-router-dom';
import App from './containers/App/index';

ReactDOM.hydrate(
<Router>
  <App />
</Router>, 
document.getElementById('app'));
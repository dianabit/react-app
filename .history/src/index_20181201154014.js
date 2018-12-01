import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter  } from 'react-router-dom';
import App from './containers/App/index';

ReactDOM.hydrate(
<BrowserRouter >
  <App />
</BrowserRouter >, 
document.getElementById('app'));
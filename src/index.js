import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from "./Store";
ReactDOM.render(
  <React.StrictMode>
 <Store>   <App /></Store>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

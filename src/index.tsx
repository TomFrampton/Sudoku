import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorkerRegistration from './core/serviceWorkerRegistration';
import reportWebVitals from './core/reportWebVitals';

import { Grid } from './components/grid';

import { GlobalStyles } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Grid></Grid>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

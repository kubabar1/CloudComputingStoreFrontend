import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/scss/bootstrap.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Route path="/" component={App}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

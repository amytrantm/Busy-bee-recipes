import React from 'react';
import ReactDOM from 'react-dom';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import '../public/style.css'


import App from './components/App';

ReactDOM.render(
   <Router history={history}>
      <App />
   </Router>,  
   document.getElementById('app')
);

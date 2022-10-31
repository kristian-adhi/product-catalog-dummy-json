import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';

import './assets/library/bootstrap/css/bootstrap-4.4.1.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './assets/library/font-awesome/css/all.css';
/* import './assets/library/owlcarousel/css/owl.carousel.min.css';
import './assets/library/owlcarousel/css/owl.theme.default.min.css'; */

import './assets/css/main.css';
import './assets/js/custom.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
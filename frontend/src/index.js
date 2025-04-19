import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles.css';
import * as serviceWorker from './ServiceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorker.register();
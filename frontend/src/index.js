// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './assets/styles.css';
// import * as serviceWorker from './serviceWorker';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// // Register service worker for PWA support
// serviceWorker.register();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
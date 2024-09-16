/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line import/extensions
import ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line import/extensions
import App from './App';
// eslint-disable-next-line import/extensions
import reportWebVitals from './reportWebVitals';
/* eslint-enable no-unused-vars */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Report web vitals metrics
reportWebVitals();
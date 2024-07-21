import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

/* Componets */

import Heading from './Componets/Heading/Heading.js';
import Forward from './Componets/Forward/Forward.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Heading />
    <Forward />
  </React.StrictMode>
);

reportWebVitals();

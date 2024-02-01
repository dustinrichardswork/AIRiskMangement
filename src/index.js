import React from 'react';
import App from './app';
import { createRoot } from 'react-dom/client';

import './assets/css/main.css'; 

const domeNode = document.getElementById('root');
const root = createRoot(domeNode); // createRoot(domeNode!) if you use TypeScript
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
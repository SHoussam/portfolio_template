/**
 * ==============================================================
 * 🌟 TEMPLATE INSTRUCTIONS: main.jsx 🌟
 * ==============================================================
 * This is the application entry point. 
 * React Router is already wrapped around the App component here.
 * You likely won't need to change this file unless you're adding new global providers 
 * (like Redux, Context API, or Theme Providers).
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

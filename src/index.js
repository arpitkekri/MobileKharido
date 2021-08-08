import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from './context';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.StrictMode is working only on development server it will not bundles in final build 
  // --> it gives specific errors related to react dom and rendering
  <React.StrictMode>
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// For checking performance uncomment below command......
// reportWebVitals(console.log);

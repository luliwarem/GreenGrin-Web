import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QR from './QR';
import Botellas from './Botellas'
import reportWebVitals from './reportWebVitals';
import Bienvenidos from './Bienvenidos';
import Gracias from './Gracias';
import Warning from './Warning';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Bienvenidos /> */} 
    {/* <Botellas /> */}
    {/* <Warning /> */}
    <QR /> 
    {/* <Gracias /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

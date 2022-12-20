import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'; //* js yazılması optional css zorunlu ancak
import './index.css'; //* doğrudan import yapılır


//! index componenti ReactDOM.createRoot() metodu ile
//! public klasorunde yer alan index.html icersindeki id'si root
//! olan elemana erisir.

const root = ReactDOM.createRoot(document.getElementById('root')); //* create ile object haline gelir
root.render(<App />);



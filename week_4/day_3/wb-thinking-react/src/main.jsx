import axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

axios.get('/api/invoice').then( ({data}) => {
  console.log(data)
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App initialInvoiceList={data}/>
    </React.StrictMode>,
  );
})

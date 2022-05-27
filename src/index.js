import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recovery from './routes/RecoveryPage';
import ContactPage from './routes/ContactPage';
import CloudPage from './routes/CloudPage';
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
     <Route path='/' element={ <App />}/>
     <Route path='/recovery' element={ <Recovery />}/>
     <Route path='/cloud' element={ <CloudPage/>}/>
     <Route path='/contact' element={ <ContactPage />}/>
     </Routes>
  </BrowserRouter>
);

 

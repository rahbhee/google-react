import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from './Nav';
import Logo from './Logo';
import Search from './Search';
import Button from './Button';
import Language from './Language';
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
    <Logo />
    <Search />
    <Button title="Google Search"/>
    <Language />
    <Footer />
  </React.StrictMode>
);



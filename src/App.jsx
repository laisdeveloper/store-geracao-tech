import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { HomePage } from './pages/HomePage.jsx';

import './App.css'
import { ProductListingPage } from './pages/ProductListingPage.jsx';

function App() {
  return (
    <>
    <Router>
    <main><ProductListingPage /></main>
    </Router>
    </>
  )
}

export default App

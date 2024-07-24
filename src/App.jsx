import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { HomePage } from './pages/HomePage.jsx';

import './App.css'

function App() {
  return (
    <>
    <Router>
    <main><HomePage /></main>
    </Router>
    </>
  )
}

export default App

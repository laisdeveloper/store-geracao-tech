import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { useState } from 'react'

import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Body } from './components/Body.jsx'

import './App.css'

function App() {
  return (
    <>
    <Router>
      <header><Header /></header>
      <main><Body /></main>
      <footer><Footer /></footer>
    </Router>
    </>
  )
}

export default App

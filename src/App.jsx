import React from 'react';
import { BrowserRouter} from 'react-router-dom'; 
import { AppRoutes } from './components/Routes.jsx';

import './App.css'
import { HomePage } from './pages/HomePage.jsx';
import { ProductListingPage } from './pages/ProductListingPage.jsx';

function App() {
  return (
    <>
    <main>
      <AppRoutes />
    </main>
    {/* <BrowserRouter>
    <main><ProductListingPage /></main>
    </BrowserRouter>  */}
    </>
  )
}

export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {HomePage} from '../pages/HomePage'; 
import {ProductListingPage} from '../pages/ProductListingPage';
import {ProductViewPage }from '../pages/ProductViewPage';
import { Layout } from './Layout';
import { NotFound } from './NotFound';


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> 
          <Route path="products" element={<ProductListingPage />} />
          <Route path="categories" element={<ProductViewPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
    
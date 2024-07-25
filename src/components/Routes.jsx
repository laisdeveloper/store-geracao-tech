import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {HomePage} from '../pages/HomePage'; 
import {ProductListingPage} from '../pages/ProductListingPage';
import {ProductViewPage }from '../pages/ProductViewPage';


export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/products" component={ProductListingPage} />
      <Route path="/productsView/:id" component={ProductViewPage} />
    </Switch>
  );
}

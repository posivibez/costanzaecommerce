import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';


import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shoppage/shop.component.jsx'
import HatsPage from './pages/hatspage/hatspage.component.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/shop/hats" exact component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

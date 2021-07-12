import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';


import HomePage from './pages/homepage/homepage.component.jsx'
import HatsPage from './pages/hatspage/hatspage.component.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

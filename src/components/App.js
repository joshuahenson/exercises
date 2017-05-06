import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Recipe from './Recipe';
import Nav from './Nav';
import './App.css';

// TODO: Add 404
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Calculator} />
          <Route path="/recipe" component={Recipe} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

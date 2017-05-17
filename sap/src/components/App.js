import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import TransitionRoute from './TransitionRoute';
import Calculator from './Calculator';
import Recipe from './Recipe';
import Nav from './Nav';
import Notification from './Notification';
import './App.css';

// TODO: Add 404
const App = () => {
  return (
    <BrowserRouter>
      <div className="row">
        <div className="container">
          <Nav />
          <Notification />
          <Switch>
            <TransitionRoute exact path="/" transitionName="fade-route" component={Calculator} />
            <TransitionRoute path="/recipe" transitionName="fade-route" component={Recipe} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

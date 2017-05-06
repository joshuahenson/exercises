import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Recipe from './Recipe';

// TODO: Add 404
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Calculator} />
        <Route path="/recipe" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

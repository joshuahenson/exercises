import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';

// TODO: Replace test with actual 404
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Calculator} />
        <Route component={Calculator} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

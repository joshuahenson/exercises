import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './containers/App';
import Home from './containers/Home';
import PollDetail from './containers/PollDetail';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/poll/:slug" component={PollDetail} />
  </Route>
);

export default routes;

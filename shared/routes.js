import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './containers/App';
import Home from './containers/Home';
import PostDetailView from './containers/PostDetailView/PostDetailView';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/post/:slug" component={PostDetailView} />
  </Route>
);

export default routes;

import React from 'react';
import { Route } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const TransitionRoute = ({ transitionName, ...rest }) => (
  <Route
    render={({ location }) => (
      <CSSTransitionGroup
        transitionName={transitionName}
        transitionEnterTimeout={500}
        transitionLeave={false}
      >
        <Route
          location={location}
          key={location.key}
          {...rest}
        />
      </CSSTransitionGroup>
  )}
  />
);

export default TransitionRoute;

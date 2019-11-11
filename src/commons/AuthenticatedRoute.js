import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = ({ isLoggedIn, component: Component, ...props }) => {

  const redirect = isLoggedIn ? (
    <Component {...props} />
  ) : (
      <Redirect to={{
        pathname: '/login/',
        state: { from: props.location }
      }} />
    )

  return (
    <Route {...props} render={() => redirect} />
  )
}

export default AuthenticatedRoute;
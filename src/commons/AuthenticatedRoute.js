import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = ({ isLoggedIn, component: Component, ...props }) => {

  const redirect = (isLoggedIn ? <Component {...props} /> : <Redirect to={{
    pathname: '/login/',
    state: { from: props.location }
  }} />);


  return (
    <Route {...props} render={() => redirect} >
    </Route>
  )
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
};

export default connect(mapStateToProps)(AuthenticatedRoute);

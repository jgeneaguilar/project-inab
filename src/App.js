import React from 'react';
import './App.css';
// import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import DashboardContainer from './components/dashboard/DashboardContainer';
import NotFound from './components/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


function App({ isLoggedIn }) {
  
  const redirect = isLoggedIn ? (
    <Redirect to='/dashboard' />
  ) : (
      <LoginPage />
    )

  return (
    <Switch>
      <Route path='/' exact render={() => redirect }/>
      <Route exact path='/dashboard' component={DashboardContainer}/>
      <Route path='/login' render={() => redirect }/>
      <Route component={NotFound}/>
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);

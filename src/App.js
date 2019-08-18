import React, { useEffect, Fragment } from 'react';
// import HomePage from './components/home/HomePage';
import AuthenticatedRoute from './commons/AuthenticatedRoute';
import LoginPage from './components/login/LoginPage';
import DashboardContainer from './components/dashboard/DashboardContainer';
import NotFound from './components/NotFound';
import './App.css';
import { Empty } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkUserLogin } from './redux/actions/userActions';


function App({ isLoggedIn, checkUserLogin }) {

  useEffect(() => {
    checkUserLogin();
  }, []);

  const redirect = isLoggedIn ? (
    <Redirect to='/dashboard' />
  ) : (
      <LoginPage />
    )

  return (
    <Fragment>
      { 
        // TODO: Implement Loading Screen
        isLoggedIn === null 
          ? <Empty /> 
          : (
            <Switch>
              <AuthenticatedRoute path='/' exact />
              <AuthenticatedRoute 
                exact 
                path='/dashboard' 
                component={DashboardContainer} 
              />
              <Route path='/login' render={() => redirect}  />
              <Route component={NotFound} />
            </Switch>
          )
      }
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
}

export default connect(mapStateToProps, { checkUserLogin })(App);

import React, { useEffect, Fragment } from 'react';
// import HomePage from './components/home/HomePage';
import AuthenticatedRoute from './commons/AuthenticatedRoute';
import LoginPage from './components/login/LoginPage';
import DashboardContainer from './components/dashboard/DashboardContainer';
import SessionExpired from './components/SessionExpired';
import NotFound from './components/NotFound';
import './App.css';
// import { Empty } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkUserLogin } from './redux/actions/userActions';


function App({ isLoggedIn, checkUserLogin }) {

  useEffect(() => {
    checkUserLogin();
  }, [checkUserLogin]);

  const redirect = isLoggedIn ? (
    <Redirect to='/dashboard' />
  ) : (
      <LoginPage />
    )

  return (
    <Fragment>
      { 
        // TODO: Implement Loading Screen
        // !isLoggedIn
        //   ? <Empty /> 
        //   : (
            <Switch>
              <Route path='/login' render={() => redirect}  />
              <AuthenticatedRoute isLoggedIn={isLoggedIn} path='/' exact />
              <AuthenticatedRoute 
                isLoggedIn={isLoggedIn}
                path='/dashboard' 
                component={DashboardContainer} 
              />
              <Route path='/sessionExpired' component={SessionExpired} />
              <Route component={NotFound} />
            </Switch>
          // )
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

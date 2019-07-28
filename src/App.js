import React, { useState } from 'react';
import './App.css';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import DashboardPage from './components/dashboard/DashboardPage';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// temporary container for dev
import DashboardContainer from './components/dashboard/DashboardContainer';

function App() {
  const [isLoggedIn, setLogin] = useState(false)
  
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/dashboard' component={DashboardPage} />
      <Route path='/ant' component={DashboardContainer} />
      <Route path='/login' render={() => (
        isLoggedIn ? (
          <Redirect to='/dashboard' />
        ) : (
          <LoginPage setLogin={setLogin} />
        )
      )}/>
    </Router>
  );
}

export default App;

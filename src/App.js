import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DashboardPage from './components/DashboardPage';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLogin] = useState(false)

  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/dashboardPage' component={DashboardPage} />
      <Route path='/login' render={() => (
        isLoggedIn ? (
          <Redirect to='/dashboard' />
        ) : (
          <Login setLogin={setLogin} />
        )
      )}/>
    </Router>
  );
}

export default App;
